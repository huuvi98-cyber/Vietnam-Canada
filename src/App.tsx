import { HeaderBanner } from './components/HeaderBanner';
import { IntroSection } from './components/IntroSection';
import { PoliticalSection } from './components/PoliticalSection';
import { EconomicSection } from './components/EconomicSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 antialiased selection:bg-sky-500 selection:text-white pb-16">
      {/* Background Decorative Graphic Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-25 z-0" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute top-2/3 -right-32 w-96 h-96 rounded-full bg-red-200/40 blur-3xl" />
      </div>

      <div className="relative z-10">
        <HeaderBanner />
        <IntroSection />
        <PoliticalSection />
        <EconomicSection />
      </div>
    </div>
  );
}
