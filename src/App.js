import logo from './logo.svg';
import './App.css';
import DoubleCard from './component/card/DoubleCard';
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import SkillsSection from './component/SkillsSection';
import ProjectSection from './component/ProjectSection';
import ContactSEction from './component/ContactSection';
import StaticsSection from './component/StaticsSection';

function App() {
  return (
  
    <>
    <HeroSection />
    <StaticsSection />
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
    <ContactSEction />
    </>
  );
}

export default App;
