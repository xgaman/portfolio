import { Background3D } from '@/components/Background3D';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CursorGlow } from '@/components/CursorGlow';
import { Helmet } from 'react-helmet-async';
import { profileData } from '@/data/profileData';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{profileData.name} | Developer Portfolio</title>
        <meta name="description" content={`${profileData.name} - ${profileData.taglines[0]}. ${profileData.bio}`} />
        <meta name="keywords" content={`${profileData.name}, developer, portfolio, ${profileData.skills.map(s => s.name).join(', ')}`} />
        <meta property="og:title" content={`${profileData.name} | Developer Portfolio`} />
        <meta property="og:description" content={profileData.bio} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* 3D Background */}
        <Background3D />
        
        {/* Cursor Glow Effect */}
        <CursorGlow />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
