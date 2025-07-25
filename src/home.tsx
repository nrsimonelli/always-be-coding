import { Hero } from '@/components/hero'
import { AlwaysBeCoding } from '@/components/always-be-coding'
import { AboutMe } from '@/components/about-me'
import { TechStack } from '@/components/tech-stack'
import { WorkExperience } from '@/components/work-experience'
import { LiveProjects } from '@/components/live-projects'
import { Footer } from '@/components/footer'
import { LoadingAnimation } from '@/components/loading-animation'

export const Home = () => {
  return (
    <main className='relative overflow-x-clip overflow-y-clip'>
      <Hero />

      <AlwaysBeCoding />
      <AboutMe />
      <TechStack />

      <WorkExperience />
      <LiveProjects />

      <Footer />
      <LoadingAnimation />
    </main>
  )
}
