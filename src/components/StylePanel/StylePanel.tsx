import { CardData, TEMPLATES, FONT_OPTIONS, IMAGE_SCALE_OPTIONS } from '../../types/card';

interface StylePanelProps {
  cardData: CardData;
  updateField: <K extends keyof CardData>(field: K, value: CardData[K]) => void;
  applyTemplate: (templateId: string) => void;
}

export function StylePanel({ cardData, updateField, applyTemplate }: StylePanelProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>选择卡牌外观</label>
        <div className="grid grid-cols-5 gap-2">
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              onClick={() => applyTemplate(template.id)}
              className={`relative aspect-[3/4] rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                cardData.template === template.id ? 'ring-2' : ''
              }`}
              style={{
                background: template.preview,
                borderColor: cardData.template === template.id ? template.borderColor : 'rgba(100, 100, 100, 0.2)',
                boxShadow: cardData.template === template.id ? `0 0 15px ${template.borderColor}30` : 'none'
              }}
            >
              <div className="absolute bottom-1 left-0 right-0 text-center">
                <span className="text-[10px] font-bold" style={{ color: template.textColor }}>
                  {template.name}
                </span>
              </div>
              {cardData.template === template.id && (
                <div className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full flex items-center justify-center shadow" style={{ backgroundColor: template.borderColor }}>
                  <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke={template.textColor}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>自定义颜色</label>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: '#6b5f53' }}>背景颜色</span>
            <input
              type="color"
              value={cardData.backgroundColor}
              onChange={(e) => updateField('backgroundColor', e.target.value)}
              className="w-9 h-9 rounded-lg cursor-pointer border transition-colors"
              style={{ border: '1px solid rgba(201, 169, 97, 0.2)' }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: '#6b5f53' }}>边框颜色</span>
            <input
              type="color"
              value={cardData.borderColor}
              onChange={(e) => updateField('borderColor', e.target.value)}
              className="w-9 h-9 rounded-lg cursor-pointer border transition-colors"
              style={{ border: '1px solid rgba(201, 169, 97, 0.2)' }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: '#6b5f53' }}>文字颜色</span>
            <input
              type="color"
              value={cardData.textColor}
              onChange={(e) => updateField('textColor', e.target.value)}
              className="w-9 h-9 rounded-lg cursor-pointer border transition-colors"
              style={{ border: '1px solid rgba(201, 169, 97, 0.2)' }}
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>图片比例</label>
        <div className="grid grid-cols-3 gap-2">
          {IMAGE_SCALE_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => updateField('imageScaleType', option.id as 'contain' | 'cover' | 'fill')}
              className={`py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                cardData.imageScaleType === option.id ? 'ring-2' : ''
              }`}
              style={{
                backgroundColor: cardData.imageScaleType === option.id ? 'rgba(201, 169, 97, 0.2)' : 'rgba(15, 15, 35, 0.6)',
                border: `1px solid ${cardData.imageScaleType === option.id ? '#c9a961' : 'rgba(201, 169, 97, 0.15)'}`,
                color: '#c9a961'
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>右下角文字</label>
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: '#6b5f53' }}>显示反转文字</span>
          <button
            onClick={() => updateField('showCardFlip', !cardData.showCardFlip)}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 ${cardData.showCardFlip ? 'bg-[#c9a961]' : 'bg-[rgba(201,169,97,0.2)]'}`}
          >
            <span className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${cardData.showCardFlip ? 'left-7 bg-white' : 'left-1 bg-[#6b5f53]'}`} />
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>字体大小</label>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: '#6b5f53' }}>副标题</span>
              <span className="text-xs font-medium" style={{ color: '#c9a961' }}>{cardData.subtitleFontSize}px</span>
            </div>
            <input
              type="range" min="14" max="36" step="1"
              value={cardData.subtitleFontSize}
              onChange={(e) => updateField('subtitleFontSize', parseInt(e.target.value))}
              className="w-full appearance-none h-1.5 rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #c9a961 ${((cardData.subtitleFontSize - 14) / 22) * 100}%, rgba(201,169,97,0.2) ${((cardData.subtitleFontSize - 14) / 22) * 100}%)`,
                accentColor: '#c9a961',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: '#6b5f53' }}>标题</span>
              <span className="text-xs font-medium" style={{ color: '#c9a961' }}>{cardData.titleFontSize}px</span>
            </div>
            <input
              type="range" min="10" max="24" step="1"
              value={cardData.titleFontSize}
              onChange={(e) => updateField('titleFontSize', parseInt(e.target.value))}
              className="w-full appearance-none h-1.5 rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #c9a961 ${((cardData.titleFontSize - 10) / 14) * 100}%, rgba(201,169,97,0.2) ${((cardData.titleFontSize - 10) / 14) * 100}%)`,
                accentColor: '#c9a961',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: '#6b5f53' }}>描述</span>
              <span className="text-xs font-medium" style={{ color: '#c9a961' }}>{cardData.descriptionFontSize}px</span>
            </div>
            <input
              type="range" min="8" max="20" step="1"
              value={cardData.descriptionFontSize}
              onChange={(e) => updateField('descriptionFontSize', parseInt(e.target.value))}
              className="w-full appearance-none h-1.5 rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #c9a961 ${((cardData.descriptionFontSize - 8) / 12) * 100}%, rgba(201,169,97,0.2) ${((cardData.descriptionFontSize - 8) / 12) * 100}%)`,
                accentColor: '#c9a961',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>字体选择</label>
        <select
          value={cardData.fontName}
          onChange={(e) => updateField('fontName', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-white transition-all duration-200 appearance-none cursor-pointer focus:ring-0"
          style={{ backgroundColor: 'rgba(15, 15, 35, 0.6)', border: '1px solid rgba(201, 169, 97, 0.15)', outline: 'none' }}
        >
          {FONT_OPTIONS.map((font) => (
            <option key={font.id} value={font.id} style={{ fontFamily: font.id, color: '#000' }}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}