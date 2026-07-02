import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, UserPlus, Sparkles } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, isLoading } = useAuthStore();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!username || !email || !password || !confirmPassword) {
      setError('请填写所有字段');
      return;
    }
    if (password !== confirmPassword) {
      setError('两次密码输入不一致');
      return;
    }
    if (password.length < 6) {
      setError('密码长度至少 6 位');
      return;
    }
    const success = await register(username, email, password);
    if (success) {
      navigate('/');
    } else {
      setError('注册失败，请重试');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full" style={{ backgroundColor: 'rgba(201, 169, 97, 0.03)', filter: 'blur(120px)' }} />
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="backdrop-blur-xl rounded-lg p-8 shadow-xl" style={{
          backgroundColor: 'rgba(22, 33, 62, 0.8)',
          border: '1px solid rgba(201, 169, 97, 0.12)',
        }}>
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#c9a961] via-[#d4a84b] to-[#8b6914] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 4px 12px rgba(201, 169, 97, 0.3)' }}>
                <Crown className="w-6 h-6 text-white" />
              </div>
            </Link>
            <h1 className="text-2xl font-bold" style={{ color: '#f0e6d3', fontFamily: "'Cinzel', serif", letterSpacing: '1px' }}>创建账户</h1>
            <p className="text-sm mt-2" style={{ color: '#a89b8c' }}>加入 Card Forge 开始创作</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="px-4 py-3 rounded-lg text-sm" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', border: '1px solid rgba(255, 0, 0, 0.2)', color: '#ff6b6b' }}>
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>用户名</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:ring-0"
                style={{ backgroundColor: 'rgba(15, 15, 35, 0.6)', border: '1px solid rgba(201, 169, 97, 0.15)', outline: 'none' }}
                placeholder="输入用户名"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>邮箱</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:ring-0"
                style={{ backgroundColor: 'rgba(15, 15, 35, 0.6)', border: '1px solid rgba(201, 169, 97, 0.15)', outline: 'none' }}
                placeholder="输入邮箱地址"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>密码</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:ring-0"
                style={{ backgroundColor: 'rgba(15, 15, 35, 0.6)', border: '1px solid rgba(201, 169, 97, 0.15)', outline: 'none' }}
                placeholder="至少 6 位密码"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#c9a961', fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>确认密码</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:ring-0"
                style={{ backgroundColor: 'rgba(15, 15, 35, 0.6)', border: '1px solid rgba(201, 169, 97, 0.15)', outline: 'none' }}
                placeholder="再次输入密码"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50"
              style={{
                color: '#1a1a2e',
                background: 'linear-gradient(135deg, #c9a961, #d4a84b, #b8942e)',
                boxShadow: '0 4px 14px rgba(201, 169, 97, 0.3)',
                fontFamily: "'Cinzel', serif",
                letterSpacing: '0.5px'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {isLoading ? (
                <span>注册中...</span>
              ) : (
                <><UserPlus className="w-4 h-4" /> 注册</>
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-sm" style={{ color: '#a89b8c' }}>
            已有账户？{' '}
            <Link to="/login" className="font-medium transition-colors hover:text-[#c9a961]" style={{ color: '#c9a961' }}>
              立即登录
            </Link>
          </p>

          <div className="mt-6 text-center">
            <Link to="/" className="text-xs transition-colors hover:text-[#c9a961]" style={{ color: '#6b5f53' }}>
              <Sparkles className="w-3 h-3 inline mr-1" />
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
