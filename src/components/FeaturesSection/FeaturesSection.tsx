import { Wand2, Layers, Shield, Swords } from 'lucide-react';

const features = [
  { icon: Wand2, title: '精妙模板', desc: '多种经典卡牌框架，一键切换主题风格，快速上手创作' },
  { icon: Layers, title: '深度定制', desc: '完整的颜色、字体、布局控制，打造专属卡牌设计' },
  { icon: Shield, title: '即时预览', desc: '实时所见即所得编辑，修改即刻呈现最终效果' },
  { icon: Swords, title: '高清导出', desc: '支持 PNG 格式高清导出，分享你的传奇卡牌' },
];

export function FeaturesSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif", letterSpacing: '1px' }}>为何选择 Card Forge</h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#a89b8c' }}>
            专业级工具，让卡牌设计变得简单而强大
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 backdrop-blur-xl rounded-lg transition-all duration-300"
              style={{
                backgroundColor: 'rgba(201, 169, 97, 0.03)',
                border: '1px solid rgba(201, 169, 97, 0.1)',
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.15), rgba(201, 169, 97, 0.05))',
                  border: '1px solid rgba(201, 169, 97, 0.15)',
                }}
              >
                <feature.icon className="w-6 h-6" style={{ color: '#c9a961' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif" }}>{feature.title}</h3>
              <p className="text-sm" style={{ color: '#a89b8c' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
