import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className='relative min-h-screen p-8'>
      <nav className='relative inline-flex justify-center w-full py-4 border-2 border-foreground'>
        <p className='text-lg uppercase'>Simonelli UI</p>
        <a
          className='absolute invisible -translate-y-1/2 md:visible top-1/2 right-4'
          href='#contact'
        >
          <Button className='text-lg uppercase'>Contact</Button>
        </a>
      </nav>

      <div className='flex flex-col flex-wrap items-center md:flex-row'>
        <div className='w-full my-8 text-5xl font-bold text-center uppercase md:text-center md:text-8xl'>
          Always be coding
        </div>
        <div className='flex flex-col flex-1'>
          <p className='text-xl font-semibold'>Nick Simonelli</p>
          <p className='text-xl'>Front end software developer</p>
        </div>
        <div className='flex flex-1'>
          <img src='src/assets/hero-image.png' />
        </div>
      </div>

      <div className='absolute inset-y-0 inset-x-1/2 md:inset-x-0 -translate-y-1/2 -translate-x-1/2 md:translate-x-[35%] md:translate-y-[-20%] w-[200%] md:w-screen h-[200vw] md:h-[100vw] rounded-[50%] -z-10 bg-[#C1D5FF]'></div>
    </section>
  )
}
