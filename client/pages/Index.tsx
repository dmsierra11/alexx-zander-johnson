import { HeroSection } from '../components/HeroSection';
import { MusicSection } from '../components/MusicSection';
import { RailroadSessionsSection } from '../components/RailroadSessionsSection';
import { RailroadRecordingsSection } from '../components/RailroadRecordingsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MusicSection />
      <RailroadSessionsSection />
      <RailroadRecordingsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
