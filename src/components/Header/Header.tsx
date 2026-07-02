import { RotateCcw, Menu, X, Sparkles, ScrollText, Library, User, Crown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onExport: () => void;
  onReset: () => void;
}

export function Header({ onExport, onReset }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-xl" style={{ borderBottom: '1px solid rgba(201, 169, 97, 0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a961] via-[#d4a84b] to-[#8b6914] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 4px 12px rgba(201, 169, 97, 0.3)' }}>
                <Crown className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#f0e6d3] tracking-wide" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '1px' }}>Card Forge</h1>
              <p className="text-xs text-[#c9a961]/70" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>Forge Legendary Cards</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <button className="px-4 py-2 text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-all duration-200 flex items-center gap-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>
              <ScrollText className="w-4 h-4" />
              创建
            </button>
            <button className="px-4 py-2 text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-all duration-200 flex items-center gap-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>
              <Library className="w-4 h-4" />
              浏览
            </button>
            <button className="px-4 py-2 text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-all duration-200 flex items-center gap-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>
              <User className="w-4 h-4" />
              我的卡牌
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={onReset} className="px-4 py-2 text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-all duration-200 flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              重设
            </button>
            <button onClick={onExport} className="px-6 py-2.5 text-sm font-semibold text-[#1a1a2e] bg-gradient-to-r from-[#c9a961] via-[#d4a84b] to-[#c9a961] hover:from-[#d4a84b] hover:via-[#e0b95a] hover:to-[#d4a84b] rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden group" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px', boxShadow: '0 4px 14px rgba(201, 169, 97, 0.3)' }}>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Sparkles className="w-4 h-4" />
              导出
            </button>
          </div>

          <button className="md:hidden p-2 text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(201, 169, 97, 0.12)' }}>
            <nav className="flex flex-col gap-2 mb-4">
              <button className="px-4 py-2 text-left text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-colors flex items-center gap-2"><ScrollText className="w-4 h-4" />创建</button>
              <button className="px-4 py-2 text-left text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-colors flex items-center gap-2"><Library className="w-4 h-4" />浏览</button>
              <button className="px-4 py-2 text-left text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-colors flex items-center gap-2"><User className="w-4 h-4" />我的卡牌</button>
            </nav>
            <button onClick={() => { onReset(); setMobileMenuOpen(false); }} className="w-full px-4 py-2 text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-colors flex items-center gap-2"><RotateCcw className="w-4 h-4" />重设</button>
            <button onClick={() => { onExport(); setMobileMenuOpen(false); }} className="w-full mt-2 px-4 py-2.5 text-sm font-semibold text-[#1a1a2e] bg-gradient-to-r from-[#c9a961] to-[#d4a84b] rounded-lg transition-all duration-200 flex items-center justify-center gap-2" style={{ fontFamily: "'Cinzel', serif" }}>
              <Sparkles className="w-4 h-4" />导出
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
