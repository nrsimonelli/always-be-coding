import { PERSONAL_TRAITS } from '@/components/icons/about'
import { useStaggeredAnimation } from '@/hooks/use-staggered-animation'
import { cn } from '@/lib/utils'

interface AboutMeCardProps {
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  delayValue?: string
  refCallback?: (arg: HTMLDivElement) => void
  isVisible?: boolean
}

const AboutMeCard = ({
  title,
  description,
  icon: Icon,
  delayValue,
  refCallback,
  isVisible = false,
}: AboutMeCardProps) => {
  return (
    <div
      ref={refCallback}
      className={cn(
        'flex flex-col justify-start items-center space-y-4 transition-all duration-1000 ease-out max-w-[280px]',
        delayValue,
        isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-24'
      )}
    >
      <div className='flex justify-center items-center w-10 h-10 rounded-full bg-accent'>
        <Icon className='fill-foreground' />
      </div>
      <div className='text-xl font-semibold md:text-2xl'>
        <div>{title}</div>
      </div>
      <div className='text-sm font-light text-center text-muted-foreground'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const AboutMe = () => {
  const delayValueList = [
    'delay-300',
    'delay-500',
    'delay-700',
    'delay-900',
    'delay-1100',
    'delay-1300',
  ]

  const { refCallbacks, isVisibleArray } = useStaggeredAnimation(
    PERSONAL_TRAITS.length
  )

  return (
    <section className='bg-background' id='about'>
      <div className='container px-4 pt-16 pb-16 mx-auto space-y-8 text-center md:pt-32 sm:px-0'>
        <div className='mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
          <p className='text-3xl font-bold text-center lg:text-5xl'>
            Who am I?
          </p>
        </div>

        <div className='flex flex-row flex-wrap gap-8 justify-center items-center mx-auto max-w-screen-lg'>
          {PERSONAL_TRAITS.map((item, index) => (
            <AboutMeCard
              key={`about-me-card-${index}`}
              {...item}
              isVisible={isVisibleArray[index]}
              delayValue={delayValueList[index]}
              refCallback={refCallbacks[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
