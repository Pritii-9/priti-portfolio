import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Project from "./components/sections/Project";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import { portfolioApi } from "./api/portfolioApi";
import type { PortfolioProfile } from "./types/portfolio";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState<PortfolioProfile | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    portfolioApi
      .getProfile()
      .then(setProfile)
      .finally(() => setIsDataLoading(false));
  }, []);

  if (isDataLoading || !profile) {
    return <LoadingScreen onComplete={() => undefined} />;
  }

  return (
    <>
      {!isLoaded ? <LoadingScreen onComplete={() => setIsLoaded(true)} /> : null}
      <div className={`opacity-0 transition-opacity duration-[450ms] ease-in ${isLoaded ? "opacity-100" : ""}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home name={profile.name} title={profile.title} />
        <About summary={profile.summary} education={profile.education} />
        <Experience experience={profile.experience} />
        <Project projects={profile.projects} />
        <Skills skills={profile.skills} />
        <Contact />
      </div>
    </>
  );
}

export default App;