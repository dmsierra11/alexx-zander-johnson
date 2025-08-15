import { HeroSection } from '../components/HeroSection';
import { MusicSection } from '../components/MusicSection';
import { EventsSection } from '../components/EventsSection';
import { AboutSection } from '../components/AboutSection';
import { PressKitSection } from '../components/PressKitSection';
import { ContactSection } from '../components/ContactSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MusicSection />
      <EventsSection />
      <AboutSection />
      <PressKitSection />
      <ContactSection />
    </div>
  );
}
