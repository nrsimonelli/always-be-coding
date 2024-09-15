import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/icons/about/zap-icon'

import { LiveProjects } from './live-projects'
import { TechStack } from './tech-stack'
import { cn } from '@/lib/utils'
import { AboutMe } from './about-me'
import { WorkExperience } from './work-experience'
import { Footer } from './footer'
import { Fragment } from 'react/jsx-runtime'

import { LoadingAnimation } from './loading-animation'

const TempThemeViewer = () => {
  const tokenKeys = [
    'accent',
    'secondary',
    'primary',
    'destructive',
    'popover',
    'card',
  ]

  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 p-8'>
      <div
        className={`bg-foreground h-16 min-w-min px-4 rounded-lg flex items-center shadow`}
      >
        <p className={cn('capitalize', `text-background`)}>foreground</p>
      </div>
      <div
        className={`bg-background h-16 min-w-min px-4 rounded-lg flex items-center shadow`}
      >
        <p className={cn('capitalize', `text-foreground`)}>background</p>
      </div>
      <div
        className={`bg-muted h-16 min-w-min px-4 rounded-lg flex items-center shadow`}
      >
        <p className={cn('capitalize', `text-muted-foreground`)}>muted</p>
      </div>
      {tokenKeys.map((key, index) => (
        <div
          key={`theme-token-${index}`}
          className={`bg-${key} h-16 min-w-min px-4 rounded-lg flex items-center shadow`}
        >
          <p className={cn('capitalize', `text-${key}-foreground`)}>{key}</p>
        </div>
      ))}
    </div>
  )
}

export const Home = () => {
  const temp = false

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

      {temp && <TempThemeViewer />}

      <WorkExperience />
      <LiveProjects />

      <Footer />
      <LoadingAnimation />
    </main>
  )
}
