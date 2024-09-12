import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/ui/zap-icon'

import { LiveProjects } from './live-projects'
import { TechStack } from './tech-stack'
import { Button } from './ui/button'

export const Home = () => {
  return (
    <main className='transition-all duration-1000 overflow-x-clip'>
      <Hero />
      <div className='w-full h-20 bg-foreground text-background'>
        <div className='flex flex-row items-center h-full space-x-4 animate-infinite-scroll'>
          {Array.from({ length: 10 }).map(() => (
            <>
              <ZapIcon className='min-w-6 min-h-6' />
              <p className='flex-shrink-0 text-xl uppercase'>
                Always be coding
              </p>
            </>
          ))}
        </div>
      </div>

      <TechStack />
      <LiveProjects />
      <section>contact</section>
      <section className='py-16'>
        <div className='container flex flex-row mx-auto'>
          <div className='flex flex-col items-start justify-center flex-1 px-4 space-y-2'>
            <p className='text-6xl font-semibold'>Let's Connect!</p>
            <p>
              Want to learn more about my work experience and love for coding?
            </p>
            <p>Fill out the contact form below!</p>
            <Button>Contact</Button>
          </div>
          <div className='flex-1'>
            <img src='src/assets/site/footer.png' className='w-auto h-full' />
          </div>
        </div>
      </section>
    </main>
  )
}
