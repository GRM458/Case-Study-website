
import { AudienceSection } from './components/sections/AudienceSection'
import { ClientSection } from './components/sections/ClientSection'
import { ConclusionSection } from './components/sections/ConclusionSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { HeroSection } from './components/sections/HeroSection'
import { IntroSection } from './components/sections/IntroSection'
import { ObjectivesSection } from './components/sections/ObjectivesSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { SiteFooter } from './components/sections/SiteFooter'
import { StatusSection } from './components/sections/StatusSection'
function App() {
  return (
    <main className=" bg-paper text-ink">
      <HeroSection />
      <IntroSection />
      <ProblemSection />
      <ObjectivesSection />
      <FeaturesSection />
      <AudienceSection />
      <StatusSection />
      <ConclusionSection />
      <ClientSection/>
      {/* <SiteFooter /> */}
    </main>
  )
}

export default App
