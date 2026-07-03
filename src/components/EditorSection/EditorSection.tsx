import { useState } from 'react';
import { Settings, Palette, Github } from 'lucide-react';
import { CardData } from '../../types/card';
import { CardPreview } from '../CardPreview/CardPreview';
import { PropertyPanel } from '../PropertyPanel/PropertyPanel';
import { StylePanel } from '../StylePanel/StylePanel';

interface EditorSectionProps {
  cardData: CardData;
  updateField: <K extends keyof CardData>(field: K, value: CardData[K]) => void;
  uploadImage: (file: File) => void;
  removeImage: () => void;
  applyTemplate: (templateId: string) => void;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export function EditorSection({ cardData, updateField, uploadImage, removeImage, applyTemplate, cardRef }: EditorSectionProps) {
  const [activeTab, setActiveTab] = useState<'properties' | 'style'>('properties');

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 h-full min-h-[500px]">
              <div className="backdrop-blur-xl overflow-hidden shadow-xl rounded-lg h-full flex flex-col" style={{
                backgroundColor: 'rgba(22, 33, 62, 0.8)',
                border: '1px solid rgba(201, 169, 97, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <div className="flex border-b" style={{ borderColor: 'rgba(201, 169, 97, 0.1)' }}>
                  <button
                    onClick={() => setActiveTab('properties')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 font-medium transition-all duration-300`}
                    style={{
                      color: activeTab === 'properties' ? '#c9a961' : '#6b5f53',
                      borderColor: activeTab === 'properties' ? '#c9a961' : 'transparent',
                      backgroundColor: activeTab === 'properties' ? 'rgba(201, 169, 97, 0.08)' : 'transparent',
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '0.5px'
                    }}
                  >
                    <Settings className="w-4 h-4" />
                    <span>属性</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('style')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 font-medium transition-all duration-300`}
                    style={{
                      color: activeTab === 'style' ? '#c9a961' : '#6b5f53',
                      borderColor: activeTab === 'style' ? '#c9a961' : 'transparent',
                      backgroundColor: activeTab === 'style' ? 'rgba(201, 169, 97, 0.08)' : 'transparent',
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '0.5px'
                    }}
                  >
                    <Palette className="w-4 h-4" />
                    <span>样式</span>
                  </button>
                </div>

                <div className="p-5 flex-1 overflow-y-auto">
                  {activeTab === 'properties' ? (
                    <PropertyPanel
                      cardData={cardData}
                      updateField={updateField}
                      uploadImage={uploadImage}
                      removeImage={removeImage}
                    />
                  ) : (
                    <StylePanel
                      cardData={cardData}
                      updateField={updateField}
                      applyTemplate={applyTemplate}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl p-8 lg:p-12 rounded-lg min-h-[500px] h-full flex flex-col" style={{
              backgroundColor: 'rgba(22, 33, 62, 0.5)',
              border: '1px solid rgba(201, 169, 97, 0.08)',
            }}>
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>卡牌预览</h3>
                <p className="text-sm" style={{ color: '#6b5f53', fontFamily: "'Cinzel', serif", letterSpacing: '0.3px' }}>修改左侧面板，卡牌实时更新</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <CardPreview cardData={cardData} cardRef={cardRef} updateField={updateField} />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a href="https://github.com/kinguang3/Card-Forge" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ 
                color: '#c9a961', 
                backgroundColor: 'rgba(201, 169, 97, 0.12)',
                border: '1px solid rgba(201, 169, 97, 0.4)',
                fontFamily: "'Cinzel', serif",
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(201, 169, 97, 0.15)'
              }}>
                <Github className="w-5 h-5" />
                <span>欢迎来 Star ⭐</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
