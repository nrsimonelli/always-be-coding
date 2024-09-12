import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { TECH_STACK } from './icons/tech'

export const TechStack = () => {
  const exp = false
  return (
    <section className='bg-background' id='technologies'>
      <div className='container px-4 py-16 mx-auto space-y-16 text-center sm:px-0'>
        <div className='mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
          <p className='text-3xl font-bold lg:text-5xl'>Technologies</p>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center space-x-4 space-y-4 max-w-[540px] mx-auto'>
          {TECH_STACK.map(({ url, name, icon: Icon }) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={url} target='_blank' rel='noreferrer noopener'>
                    <Icon ogColor={exp} className='w-16 h-16' />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  )
}
