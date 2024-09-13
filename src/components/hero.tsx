import { Button } from '@/components/ui/button'
import { ZapIcon } from '@/components/icons/about/zap-icon'

export const Hero = () => {
  return (
    <section className='max-w-screen-xl p-8 overflow-clip xl:mx-auto'>
      <div className='absolute inset-y-0 inset-x-1/2 md:inset-x-0 -translate-y-1/2 -translate-x-1/2 md:translate-x-[45%] md:translate-y-[-30%] w-[200%] md:w-screen h-[200vw] md:h-[100vw] rounded-[50%] -z-10 bg-[hsl(221,100%,88%)]'></div>

      <nav className='inline-flex items-center justify-between w-full px-4 py-4 border-2 border-foreground'>
        <ZapIcon className='fill-primary' />
        <p className='text-lg uppercase'>Simonelli UI</p>
        <a className='hidden md:block' href='#contact'>
          <Button
            variant={'accent'}
            className='text-lg uppercase border-2 border-foreground'
          >
            Contact
          </Button>
        </a>
        {/* TODO: mobile hamburger here? */}
      </nav>

      <div className='flex flex-col flex-wrap items-center px-2 md:px-8 md:flex-row'>
        <div className='order-1 w-full mt-8 mb-8 text-5xl font-bold text-center uppercase font-gasoek md:text-center md:text-8xl'>
          Always be coding
        </div>
        <div className='flex flex-col items-center self-start flex-1 order-3 mt-2 space-y-0 md:self-auto md:order-2 md:mt-0'>
          <div className='space-y-1 text-left'>
            <p className='font-medium md:text-lg lg:text-3xl'>Nick Simonelli</p>
            <div className='flex flex-row space-x-1 md:flex-col md:space-x-0'>
              <p className='font-light md:text-lg lg:text-3xl'>
                Front end software
              </p>
              <p className='font-light md:text-lg lg:text-3xl'>developer</p>
            </div>
          </div>
        </div>
        <div className='flex flex-1 order-2 md:order-3'>
          <img
            src='src/assets/site/hero.png'
            alt='Computer with headphones, a keyboard, and a coffee cup nearby'
          />
        </div>
      </div>
      {/* background circle */}
    </section>
  )
}
