import { Sparkles, Wand2, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onStartDesign: () => void;
}

export function HeroSection({ onStartDesign }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(201,169,97,0.06) 0%, transparent 60%), radial-gradient(ellipse at 30% 50%, rgba(74,127,181,0.04) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(201, 169, 97, 0.08)', border: '1px solid rgba(201, 169, 97, 0.25)' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#c9a961' }} />
              <span className="text-sm font-medium" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>传奇卡牌铸造工坊</span>
            </div>

            <div className="relative h-[520px] lg:h-[600px] flex items-center justify-center" style={{ perspective: '900px' }}>
              <div className="absolute top-[-15px] right-[-15px] transition-all duration-500 z-40 cursor-pointer"
                style={{
                  transform: 'perspective(900px) rotateY(-18deg) rotateX(8deg) rotate(20deg)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) rotate(0deg) scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(-18deg) rotateX(8deg) rotate(20deg)'}
              >
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=playing%20card%203%20of%20clubs%20vintage%20style%20dark%20background%20elegant%20border&image_size=portrait_4_3"
                  alt="3 of Clubs"
                  className="w-[100px] lg:w-[140px] h-auto rounded-lg"
                  style={{
                    opacity: 1,
                    boxShadow: '0 14px 40px rgba(0,0,0,0.65)',
                  }}
                />
              </div>
              <div className="absolute top-[-25px] left-[-25px] transition-all duration-500 z-30 cursor-pointer"
                style={{
                  transform: 'perspective(900px) rotateY(22deg) rotateX(-10deg) rotate(-24deg)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) rotate(0deg) scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(22deg) rotateX(-10deg) rotate(-24deg)'}
              >
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=playing%20card%204%20of%20clubs%20vintage%20style%20dark%20background%20elegant%20border&image_size=portrait_4_3"
                  alt="4 of Clubs"
                  className="w-[130px] lg:w-[175px] h-auto rounded-lg"
                  style={{
                    opacity: 1,
                    boxShadow: '0 10px 34px rgba(0,0,0,0.55)',
                  }}
                />
              </div>
              <div className="absolute bottom-[-5px] left-[-5px] transition-all duration-500 z-20 cursor-pointer"
                style={{
                  transform: 'perspective(900px) rotateY(14deg) rotateX(-5deg) rotate(12deg)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) rotate(0deg) scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(14deg) rotateX(-5deg) rotate(12deg)'}
              >
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=playing%20card%205%20of%20clubs%20vintage%20style%20dark%20background%20elegant%20border&image_size=portrait_4_3"
                  alt="5 of Clubs"
                  className="w-[85px] lg:w-[120px] h-auto rounded-lg"
                  style={{
                    opacity: 1,
                    boxShadow: '0 8px 28px rgba(0,0,0,0.5)',
                  }}
                />
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] transition-all duration-500 z-10 cursor-pointer"
                style={{
                  transform: 'perspective(900px) rotateY(-24deg) rotateX(10deg) rotate(-18deg)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) rotate(0deg) scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(900px) rotateY(-24deg) rotateX(10deg) rotate(-18deg)'}
              >
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=playing%20card%20Ace%20of%20spades%20vintage%20style%20dark%20background%20elegant%20border&image_size=portrait_4_3"
                  alt="Ace of Spades"
                  className="w-[115px] lg:w-[155px] h-auto rounded-lg"
                  style={{
                    opacity: 1,
                    boxShadow: '0 16px 48px rgba(0,0,0,0.7), 0 0 30px rgba(201,169,97,0.15)',
                  }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-500 z-50 cursor-pointer">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=playing%20card%20Joker%20vintage%20style%20dark%20background%20elegant%20border%20red%20jester%20hat&image_size=portrait_4_3"
                  alt="Joker"
                  className="w-36 lg:w-52 h-auto rounded-lg"
                  style={{
                    opacity: 1,
                    boxShadow: '0 12px 48px rgba(0,0,0,0.7), 0 0 40px rgba(201,169,97,0.3)',
                    transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                  }}
                />
              </div>

              <div className="relative z-50 flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif", letterSpacing: '1px', textShadow: '0 0 40px rgba(201,169,97,0.3)' }}>
                  打造独一无二的
                  <span className="block bg-gradient-to-r from-[#c9a961] via-[#d4a84b] to-[#8b6914] bg-clip-text text-transparent" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '2px' }}>
                    传奇卡牌
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#a89b8c' }}>
              使用强大的卡牌编辑器，设计精美的游戏卡牌、收藏卡或名片。
              丰富模板、自定义选项和高清导出功能，让你的创作完美呈现。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={onStartDesign}
                className="px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
                style={{
                  color: '#1a1a2e',
                  background: 'linear-gradient(135deg, #c9a961, #d4a84b, #b8942e)',
                  boxShadow: '0 4px 20px rgba(201, 169, 97, 0.3)',
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: '0.5px'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Wand2 className="w-5 h-5" />
                开始设计
              </button>
              <button className="px-8 py-4 text-base font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  color: '#a89b8c',
                  backgroundColor: 'rgba(201, 169, 97, 0.05)',
                  border: '1px solid rgba(201, 169, 97, 0.2)',
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: '0.5px'
                }}
              >
                <BookOpen className="w-5 h-5" />
                浏览社区
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
