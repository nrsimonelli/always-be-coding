import { PERSONAL_TRAITS } from './icons/about'

interface AboutMeCardProps {
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}
const AboutMeCard = ({ title, description, icon: Icon }: AboutMeCardProps) => {
  return (
    <div
      className='max-w-[280px] flex flex-col space-y-4 items-center justify-start '
      data-aos='zoom-in-right'
      data-aos-delay='300'
      data-aos-duration='900'
      data-aos-anchor-placement='#about'
    >
      <div className='flex items-center justify-center w-10 h-10 rounded-full bg-accent'>
        <Icon className='fill-foreground' />
        {/* Icon */}
      </div>
      <div className='text-2xl font-semibold'>
        <div>{title}</div>
      </div>
      <div className='text-sm font-light text-center text-muted-foreground'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const AboutMe = () => {
  return (
    <section
      className='container px-4 py-16 mx-auto space-y-16 sm:px-0'
      id='about'
    >
      <div className='mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
        <p className='text-3xl font-bold text-center lg:text-5xl'>Who am I?</p>
      </div>

      <div className='flex flex-row flex-wrap items-center justify-center max-w-screen-lg gap-8 mx-auto'>
        {PERSONAL_TRAITS.map((item) => (
          <AboutMeCard {...item} />
        ))}
      </div>
    </section>
  )
}
