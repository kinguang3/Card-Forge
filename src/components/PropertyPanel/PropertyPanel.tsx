import { CardData } from '../../types/card';

interface PropertyPanelProps {
  cardData: CardData;
  updateField: <K extends keyof CardData>(field: K, value: CardData[K]) => void;
  uploadImage: (file: File) => void;
  removeImage: () => void;
}

export function PropertyPanel({ cardData, updateField, uploadImage, removeImage }: PropertyPanelProps) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  const inputStyle = {
    backgroundColor: 'rgba(15, 15, 35, 0.6)',
    border: '1px solid rgba(201, 169, 97, 0.15)',
    outline: 'none',
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>标题</label>
        <input
          type="text"
          value={cardData.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:ring-0"
          style={inputStyle}
          placeholder="输入卡牌标题"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>副标题（稀有度）</label>
        <input
          type="text"
          value={cardData.subtitle}
          onChange={(e) => updateField('subtitle', e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:ring-0"
          style={inputStyle}
          placeholder="例如：传说级、史诗级"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>描述</label>
        <textarea
          value={cardData.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 resize-none transition-all duration-200 focus:ring-0"
          style={inputStyle}
          placeholder="输入卡牌描述..."
        />
      </div>

      <div>
        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>卡牌图片</label>
        <div className="border border-dashed rounded-lg p-5 text-center transition-all duration-300 group"
          style={{ borderColor: 'rgba(201, 169, 97, 0.15)' }}
        >
          {cardData.imageUrl ? (
            <div className="relative">
              <img src={cardData.imageUrl} alt="Preview" className="max-h-32 mx-auto rounded-lg shadow-xl" />
              <button
                onClick={removeImage}
                className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 shadow-lg hover:scale-110"
                style={{ backgroundColor: '#8b0000', color: 'white' }}
              >
                ×
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(201,169,97,0.15), rgba(201,169,97,0.05))', border: '1px solid rgba(201, 169, 97, 0.15)' }}
              >
                <svg className="w-6 h-6" style={{ color: '#c9a961' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <label htmlFor="image-upload" className="cursor-pointer text-sm font-medium transition-colors duration-200" style={{ color: '#c9a961' }}>
                点击上传图片
              </label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-xs font-semibold uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>显示数值</label>
          <button
            onClick={() => updateField('showStats', !cardData.showStats)}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 ${cardData.showStats ? 'bg-[#c9a961]' : 'bg-[rgba(201,169,97,0.2)]'}`}
          >
            <span className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${cardData.showStats ? 'left-7 bg-white' : 'left-1 bg-[#6b5f53]'}`} />
          </button>
        </div>
        {cardData.showStats && (
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs mb-1.5" style={{ color: '#6b5f53' }}>费用</label>
              <input
                type="number" min="0" max="99"
                value={cardData.cost}
                onChange={(e) => updateField('cost', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2.5 rounded-lg text-white text-center transition-all duration-200 focus:ring-0"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs mb-1.5" style={{ color: '#6b5f53' }}>攻击</label>
              <input
                type="number" min="0" max="99"
                value={cardData.attack}
                onChange={(e) => updateField('attack', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2.5 rounded-lg text-white text-center transition-all duration-200 focus:ring-0"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs mb-1.5" style={{ color: '#6b5f53' }}>防御</label>
              <input
                type="number" min="0" max="99"
                value={cardData.defense}
                onChange={(e) => updateField('defense', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2.5 rounded-lg text-white text-center transition-all duration-200 focus:ring-0"
                style={inputStyle}
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>尺寸</label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#6b5f53' }}>宽度 (px)</label>
            <input
              type="number" min="100" max="600"
              value={cardData.width}
              onChange={(e) => updateField('width', Math.max(100, Math.min(600, parseInt(e.target.value) || 288)))}
              className="w-full px-3 py-2.5 rounded-lg text-white text-center transition-all duration-200 focus:ring-0"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-xs mb-1.5" style={{ color: '#6b5f53' }}>高度 (px)</label>
            <input
              type="number" min="140" max="800"
              value={cardData.height}
              onChange={(e) => updateField('height', Math.max(140, Math.min(800, parseInt(e.target.value) || 420)))}
              className="w-full px-3 py-2.5 rounded-lg text-white text-center transition-all duration-200 focus:ring-0"
              style={inputStyle}
            />
          </div>
        </div>
        <button
          onClick={() => {
            updateField('width', 288);
            updateField('height', 420);
          }}
          className="mt-3 w-full px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-[rgba(201,169,97,0.1)]"
          style={{ color: '#c9a961', border: '1px solid rgba(201, 169, 97, 0.2)' }}
        >
          重置为默认尺寸
        </button>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>卡牌形状</label>
        <div className="flex gap-3">
          <button
            onClick={() => updateField('rounded', true)}
            className={`flex-1 py-3 rounded-lg text-xs font-medium transition-all duration-200 ${
              cardData.rounded ? 'ring-2' : ''
            }`}
            style={{ 
              backgroundColor: cardData.rounded ? 'rgba(201, 169, 97, 0.2)' : 'rgba(15, 15, 35, 0.6)',
              border: `1px solid ${cardData.rounded ? '#c9a961' : 'rgba(201, 169, 97, 0.15)'}`,
              color: '#c9a961'
            }}
          >
            圆角
          </button>
          <button
            onClick={() => updateField('rounded', false)}
            className={`flex-1 py-3 text-xs font-medium transition-all duration-200 ${
              !cardData.rounded ? 'ring-2' : ''
            }`}
            style={{ 
              backgroundColor: !cardData.rounded ? 'rgba(201, 169, 97, 0.2)' : 'rgba(15, 15, 35, 0.6)',
              border: `1px solid ${!cardData.rounded ? '#c9a961' : 'rgba(201, 169, 97, 0.15)'}`,
              color: '#c9a961'
            }}
          >
            直角
          </button>
        </div>
      </div>
    </div>
  );
}
