import { PERSONAL_TRAITS } from '@/components/icons/about'
import { cn } from '@/lib/utils'
import { useEffect, useState, useRef } from 'react'

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
  console.log(title, delayValue)
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isVisibleArray, setIsVisibleArray] = useState<boolean[]>([])

  const delayValueList = [
    'delay-300',
    'delay-600',
    'delay-900',
    'delay-1200',
    'delay-1500',
    'delay-1800',
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisibleArray((prev) => {
          const updatedArray = [...prev]
          entries.forEach((entry) => {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            )
            if (entry.isIntersecting && !updatedArray[index]) {
              updatedArray[index] = true
            }
          })
          return updatedArray
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })
    return () => {
      observer.disconnect()
    }
  }, [])

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
              refCallback={(element) => (cardRefs.current[index] = element)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
