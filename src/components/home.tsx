import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/ui/zap-icon'

import { LiveProjects } from './live-projects'
import { TechStack } from './tech-stack'
import { Button } from './ui/button'

export const Home = () => {
  return (
    <main className='relative transition-all duration-1000 overflow-x-clip overflow-y-clip'>
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
