import { CardData } from '../../types/card';
import { Sparkles, Sword, Shield, Move, GripHorizontal } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface CardPreviewProps {
  cardData: CardData;
  cardRef: React.RefObject<HTMLDivElement | null>;
  updateField: <K extends keyof CardData>(field: K, value: CardData[K]) => void;
}

type DragKey = 'stats' | 'title' | 'subtitle' | 'description';

const DRAG_FIELDS: Record<DragKey, keyof CardData> = {
  stats: 'statsPosition',
  title: 'titlePosition',
  subtitle: 'subtitlePosition',
  description: 'descriptionPosition',
};

export function CardPreview({ cardData, cardRef, updateField }: CardPreviewProps) {
  const borderRadius = cardData.rounded ? '8px' : '0px';
  const [dragging, setDragging] = useState<DragKey | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const fontStyle = cardData.fontName.includes(' ') ? `'${cardData.fontName}', sans-serif` : `${cardData.fontName}, sans-serif`;

  const getImageObjectFit = () => {
    switch (cardData.imageScaleType) {
      case 'cover': return 'cover';
      case 'fill': return 'fill';
      default: return 'contain';
    }
  };

  const handleMouseDown = (e: React.MouseEvent, key: DragKey) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setDragging(key);
  };

  useEffect(() => {
    if (!dragging) return;

    const elRef = dragging === 'stats' ? statsRef :
                  dragging === 'title' ? titleRef :
                  dragging === 'subtitle' ? subtitleRef :
                  descriptionRef;
    const field = DRAG_FIELDS[dragging];

    const handleMove = (e: MouseEvent) => {
      if (!cardRef.current || !elRef.current) return;
      const cardRect = cardRef.current.getBoundingClientRect();
      const elW = elRef.current.offsetWidth;
      const elH = elRef.current.offsetHeight;

      let newX = ((e.clientX - cardRect.left - dragOffsetRef.current.x + elW / 2) / cardRect.width) * 100;
      let newY = ((e.clientY - cardRect.top - dragOffsetRef.current.y + elH / 2) / cardRect.height) * 100;

      newX = Math.max(0, Math.min(100, newX));
      newY = Math.max(0, Math.min(100, newY));

      (updateField as (f: typeof field, v: { x: number; y: number }) => void)(field, { x: newX, y: newY });
    };

    const handleUp = () => setDragging(null);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [dragging, updateField, cardRef]);

  const pos = (key: DragKey) => {
    switch (key) {
      case 'stats': return cardData.statsPosition;
      case 'title': return cardData.titlePosition;
      case 'subtitle': return cardData.subtitlePosition;
      case 'description': return cardData.descriptionPosition;
    }
  };

  const isDraggingKey = (key: DragKey) => dragging === key;

  return (
    <div className="flex items-center justify-center min-h-full p-6">
      <div className="relative">
        <div
          className="absolute -inset-6 rounded-3xl opacity-60"
          style={{
            background: `radial-gradient(ellipse at center, ${cardData.borderColor}15 0%, transparent 70%)`,
            filter: 'blur(30px)',
            borderRadius: '24px'
          }}
        />

        <div
          ref={cardRef}
          className="relative shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105"
          style={{
            width: `${cardData.width}px`,
            height: `${cardData.height}px`,
            background: cardData.backgroundColor,
            border: `1px solid ${cardData.borderColor}`,
            fontFamily: fontStyle,
            color: cardData.textColor,
            boxShadow: `0 12px 48px rgba(0,0,0,0.5), 0 0 40px ${cardData.borderColor}15`,
            borderRadius: borderRadius
          }}
        >
          <div
            className="absolute inset-[1px] border pointer-events-none"
            style={{
              borderColor: `${cardData.borderColor}20`,
              borderRadius: borderRadius
            }}
          />

          <div className="absolute inset-4">
            {cardData.imageUrl ? (
              <img
                src={cardData.imageUrl}
                alt="Card Image"
                className="w-full h-full"
                style={{
                  objectFit: getImageObjectFit(),
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                  borderRadius: cardData.rounded ? '4px' : '0px'
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Sparkles className="w-10 h-10 mb-3" style={{ opacity: 0.3 }} />
                  <span className="text-sm" style={{ opacity: 0.5 }}>上传图片</span>
                </div>
              </div>
            )}
          </div>

          {/* 副标题 */}
          <div
            ref={subtitleRef}
            className={`absolute select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              left: `${pos('subtitle').x}%`,
              top: `${pos('subtitle').y}%`,
              transform: 'translate(-50%, -50%)',
              fontWeight: 'bold',
              fontSize: `${cardData.subtitleFontSize}px`,
              lineHeight: '1.1',
              opacity: isDraggingKey('subtitle') ? 0.85 : 1,
              textShadow: '0 1px 3px rgba(0,0,0,0.5)'
            }}
            onMouseDown={(e) => handleMouseDown(e, 'subtitle')}
          >
            <span>{cardData.subtitle}</span>
            {isDraggingKey('subtitle') && (
              <GripHorizontal className="w-3 h-3 absolute -top-4 left-1/2 -translate-x-1/2" style={{ color: cardData.borderColor, opacity: 0.6 }} />
            )}
          </div>

          {cardData.showCardFlip && (
            <div
              className="absolute select-none pointer-events-none"
              style={{
                bottom: '8px',
                right: '8px',
                fontWeight: 'bold',
              fontSize: `${cardData.subtitleFontSize}px`,
                lineHeight: '1.1',
                transform: 'rotate(180deg)',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)'
              }}
            >
              <span>{cardData.subtitle}</span>
            </div>
          )}

          {/* 标题 */}
          <div
            ref={titleRef}
            className={`absolute select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              left: `${pos('title').x}%`,
              top: `${pos('title').y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: isDraggingKey('title') ? 0.85 : 1,
            }}
            onMouseDown={(e) => handleMouseDown(e, 'title')}
          >
            <h2
              className="font-bold text-center whitespace-nowrap"
              style={{
                fontSize: `${cardData.titleFontSize}px`,
                letterSpacing: '0.5px',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                fontFamily: fontStyle
              }}
            >
              {cardData.title}
            </h2>
            {isDraggingKey('title') && (
              <GripHorizontal className="w-3 h-3 absolute -top-4 left-1/2 -translate-x-1/2" style={{ color: cardData.borderColor, opacity: 0.6 }} />
            )}
          </div>

          {/* 描述 */}
          {cardData.description && (
            <div
              ref={descriptionRef}
              className={`absolute select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                left: `${pos('description').x}%`,
                top: `${pos('description').y}%`,
                transform: 'translate(-50%, -50%)',
                opacity: isDraggingKey('description') ? 0.85 : 1,
                maxWidth: '90%'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'description')}
            >
              <p
                className="text-center"
                style={{
                  fontSize: `${cardData.descriptionFontSize}px`,
                  opacity: 0.8,
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                  fontFamily: fontStyle
                }}
              >
                {cardData.description}
              </p>
              {isDraggingKey('description') && (
                <GripHorizontal className="w-3 h-3 absolute -top-4 left-1/2 -translate-x-1/2" style={{ color: cardData.borderColor, opacity: 0.6 }} />
              )}
            </div>
          )}

          {/* 数值 */}
          {cardData.showStats && (
            <div
              ref={statsRef}
              className={`absolute flex justify-center gap-6 select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                left: `${pos('stats').x}%`,
                top: `${pos('stats').y}%`,
                transform: 'translate(-50%, -50%)',
                opacity: isDraggingKey('stats') ? 0.9 : 1
              }}
              onMouseDown={(e) => handleMouseDown(e, 'stats')}
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded flex flex-col items-center justify-center shadow"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${cardData.borderColor}`,
                    boxShadow: isDraggingKey('stats') ? '0 4px 16px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  <Sword className="w-3 h-3" style={{ color: cardData.borderColor }} />
                  <span className="text-xs font-bold" style={{ color: cardData.borderColor }}>{cardData.attack}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded flex flex-col items-center justify-center shadow"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${cardData.borderColor}`,
                    boxShadow: isDraggingKey('stats') ? '0 4px 16px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  <Shield className="w-3 h-3" style={{ color: cardData.borderColor }} />
                  <span className="text-xs font-bold" style={{ color: cardData.borderColor }}>{cardData.defense}</span>
                </div>
              </div>
              {isDraggingKey('stats') && (
                <Move className="w-4 h-4 absolute -top-6 left-1/2 -translate-x-1/2" style={{ color: cardData.borderColor, opacity: 0.6 }} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
