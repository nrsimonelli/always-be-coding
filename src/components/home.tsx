import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/icons/about/zap-icon'

import { LiveProjects } from './live-projects'
import { TechStack } from './tech-stack'
import { AboutMe } from './about-me'
import { WorkExperience } from './work-experience'
import { Footer } from './footer'
import { Fragment } from 'react/jsx-runtime'

import { LoadingAnimation } from './loading-animation'

export const Home = () => {
  return (
    <main className='relative overflow-x-clip overflow-y-clip'>
      <Hero />

      <div className='w-full h-20 bg-foreground text-background'>
        <div className='flex flex-row items-center h-full space-x-4 animate-infinite-scroll'>
          {Array.from({ length: 10 }).map((_, index) => (
            <Fragment key={`abc-${index}`}>
              <ZapIcon className='min-w-6 min-h-6' />
              <p className='flex-shrink-0 text-xl uppercase'>
                Always be coding
              </p>
            </Fragment>
          ))}
        </div>
      </div>

      <AboutMe />
      <TechStack />

      <WorkExperience />
      <LiveProjects />

      <Footer />
      <LoadingAnimation />
    </main>
  )
}
