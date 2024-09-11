import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/ui/zap-icon'
import { TECH_STACK } from './tech-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export const Home = () => {
  const exp = false

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

      <section>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2 mt-16'>
          {TECH_STACK.map((tech) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={tech.url} target='_blank' rel='noreferrer noopener'>
                    <tech.icon ogColor={exp} className='w-40 h-40' />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </section>
      <section>work</section>
      <section>projects</section>
      <section>contact</section>
      <section>footer</section>
    </main>
  )
}
