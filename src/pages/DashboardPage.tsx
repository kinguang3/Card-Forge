import { Link } from 'react-router-dom';
import { Crown, LogOut, Sparkles, Library, Settings } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="text-center">
          <p className="text-lg mb-4" style={{ color: '#a89b8c' }}>请先登录</p>
          <Link
            to="/login"
            className="px-6 py-3 text-sm font-semibold rounded-lg inline-flex items-center gap-2"
            style={{
              color: '#1a1a2e',
              background: 'linear-gradient(135deg, #c9a961, #d4a84b, #b8942e)',
              fontFamily: "'Cinzel', serif",
            }}
          >
            前往登录
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1a2e' }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-xl" style={{ borderBottom: '1px solid rgba(201, 169, 97, 0.12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a961] via-[#d4a84b] to-[#8b6914] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 4px 12px rgba(201, 169, 97, 0.3)' }}>
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#f0e6d3]" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '1px' }}>Card Forge</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm" style={{ color: '#a89b8c' }}>{user?.username}</span>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#a89b8c] hover:text-[#f0e6d3] hover:bg-[#c9a961]/10 rounded-lg transition-all duration-200"
              >
                <LogOut className="w-4 h-4" />
                退出
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif", letterSpacing: '1px' }}>
            我的卡牌库
          </h1>
          <p className="mt-2 text-sm" style={{ color: '#a89b8c' }}>管理你创建的所有卡牌</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/"
            className="group p-8 backdrop-blur-xl rounded-lg transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(201, 169, 97, 0.03)',
              border: '1px solid rgba(201, 169, 97, 0.1)',
            }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.15), rgba(201, 169, 97, 0.05))',
                border: '1px solid rgba(201, 169, 97, 0.15)',
              }}
            >
              <Sparkles className="w-7 h-7" style={{ color: '#c9a961' }} />
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif" }}>创建新卡牌</h3>
            <p className="text-sm" style={{ color: '#a89b8c' }}>从空白开始设计一张全新的卡牌</p>
          </Link>

          <div className="group p-8 backdrop-blur-xl rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(201, 169, 97, 0.03)',
              border: '1px solid rgba(201, 169, 97, 0.1)',
            }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.15), rgba(201, 169, 97, 0.05))',
                border: '1px solid rgba(201, 169, 97, 0.15)',
              }}
            >
              <Library className="w-7 h-7" style={{ color: '#c9a961' }} />
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif" }}>我的卡牌</h3>
            <p className="text-sm" style={{ color: '#a89b8c' }}>查看和管理你之前创建的卡牌</p>
          </div>

          <div className="group p-8 backdrop-blur-xl rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(201, 169, 97, 0.03)',
              border: '1px solid rgba(201, 169, 97, 0.1)',
            }}
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.15), rgba(201, 169, 97, 0.05))',
                border: '1px solid rgba(201, 169, 97, 0.15)',
              }}
            >
              <Settings className="w-7 h-7" style={{ color: '#c9a961' }} />
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif" }}>账户设置</h3>
            <p className="text-sm" style={{ color: '#a89b8c' }}>管理个人信息和安全设置</p>
          </div>
        </div>
      </div>
    </div>
  );
}
