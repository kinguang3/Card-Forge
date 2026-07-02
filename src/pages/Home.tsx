import { useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection/FeaturesSection';
import { EditorSection } from '../components/EditorSection/EditorSection';
import { Footer } from '../components/Footer/Footer';
import { useCardData } from '../hooks/useCardData';
import { exportCardToPNG } from '../utils/exportUtils';

export default function Home() {
  const { cardData, updateField, applyTemplate, resetToDefault, uploadImage, removeImage } = useCardData();
  const [showToast, setShowToast] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    const success = await exportCardToPNG(cardRef.current);
    if (success) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full" style={{ backgroundColor: 'rgba(201, 169, 97, 0.03)', filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full" style={{ backgroundColor: 'rgba(74, 127, 181, 0.03)', filter: 'blur(120px)' }} />
      </div>

      <Header onExport={handleExport} onReset={resetToDefault} />

      {showToast && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in backdrop-blur-xl px-6 py-3 rounded-lg shadow-2xl flex items-center gap-2" style={{ backgroundColor: 'rgba(26, 26, 46, 0.95)', border: '1px solid rgba(201, 169, 97, 0.3)', color: '#c9a961' }}>
          <Check className="w-5 h-5" />
          <span className="font-medium" style={{ fontFamily: "'Cinzel', serif" }}>卡牌导出成功</span>
        </div>
      )}

      <div className="pt-16">
        <HeroSection onStartDesign={handleExport} />
        <FeaturesSection />
        <EditorSection
          cardData={cardData}
          updateField={updateField}
          uploadImage={uploadImage}
          removeImage={removeImage}
          applyTemplate={applyTemplate}
          cardRef={cardRef}
        />
        <Footer />
      </div>
    </div>
  );
}
