import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/icons/about/zap-icon'

import { LiveProjects } from './live-projects'
import { TechStack } from './tech-stack'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { AboutMe } from './about-me'
import { WorkExperience } from './work-experience'

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
      {tokenKeys.map((key) => (
        <div
          key={key}
          className={`bg-${key} h-16 min-w-min px-4 rounded-lg flex items-center shadow`}
        >
          <p className={cn('capitalize', `text-${key}-foreground`)}>{key}</p>
        </div>
      ))}
    </div>
  )
}

export const Home = () => {
  const temp = true

  return (
    <main className='relative overflow-x-clip overflow-y-clip'>
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

      <AboutMe />
      <TechStack />

      {temp && <TempThemeViewer />}

      <WorkExperience />
      <LiveProjects />

      <section className='py-16'>
        <div className='container flex flex-row mx-auto'>
          <div className='flex flex-col items-end justify-center flex-1'>
            <div className='max-w-[540px] space-y-8'>
              <div className='space-y-4'>
                <p
                  className={`lg:text-5xl text-3xl font-bold text-foreground after:content-["Let's_Connect!"] after:text-background after:mix-blend-difference`}
                >
                  {/* Let's Connect! */}
                </p>
                <p className='font-light mix-blend-normal after:content-["Want_to_learn_more_about_my_work_experience_and_love_for_coding?"] after:text-background after:mix-blend-difference'>
                  {/* Want to learn more about my work experience and love for coding? */}
                </p>
                <p className='font-light mix-blend-difference after:content-["Fill_out_the_contact_form_below!"] after:text-background after:mix-blend-difference'>
                  {/* Fill out the contact form below! */}
                </p>
              </div>
              <Button className='uppercase' variant={'secondary'}>
                Contact
              </Button>
            </div>
          </div>

          <div className='flex justify-center flex-1'>
            <img src='src/assets/site/footer.png' className='w-auto h-full' />
          </div>
        </div>
      </section>
      <div className='absolute bottom-0 left-1/2 translate-y-[60%] -translate-x-1/2 w-[200%] md:w-[200vw] h-[200vw] md:h-[100vw] rounded-[50%] -z-10 bg-foreground'></div>
    </main>
  )
}
