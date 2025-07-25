import { TECH_STACK } from '@/components/icons/tech'
import { FloatingLogos } from './floating-logos'

export const TechStack = () => {
  return (
    <section
      className='container px-4 py-16 mx-auto space-y-8 text-center sm:px-0'
      id='tech'
    >
      <div className='mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
        <p className='text-3xl font-bold lg:text-5xl'>Technologies</p>
      </div>

      <FloatingLogos logos={TECH_STACK} />
    </section>
  )
}
