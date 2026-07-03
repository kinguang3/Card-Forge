import { Crown } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16" style={{ backgroundColor: '#0f0f1a', borderTop: '1px solid rgba(201, 169, 97, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a961] via-[#d4a84b] to-[#8b6914] flex items-center justify-center" style={{ boxShadow: '0 4px 12px rgba(201, 169, 97, 0.3)' }}>
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif", letterSpacing: '1px' }}>Card Forge</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#a89b8c' }}>
              打造属于你的传奇卡牌，释放你的创意潜能。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>快速链接</h4>
            <ul className="space-y-3">
              <li><button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>创建</button></li>
              <li><button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>浏览</button></li>
              <li><button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>教程</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>支持</h4>
            <ul className="space-y-3">
              <li><button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>帮助中心</button></li>
              <li><button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>联系我们</button></li>
              <li><button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>反馈建议</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(201, 169, 97, 0.08)' }}>
          <p className="text-sm" style={{ color: '#6b5f53' }}>2026 Card Forge. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>隐私政策</button>
            <button className="text-sm transition-all hover:text-[#c9a961]" style={{ color: '#8b7d6f' }}>服务条款</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
