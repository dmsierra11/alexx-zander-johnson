import { HeroSection } from '../components/HeroSection';
import { MusicSection } from '../components/MusicSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MusicSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
