import { Button } from '@/components/ui/button'
import { ZapIcon } from '@/components/ui/zap-icon'

export const Hero = () => {
  return (
    <section className='max-w-screen-xl min-h-screen p-8 xl:mx-auto'>
      <nav className='inline-flex items-center justify-between w-full px-4 py-4 border-2 border-foreground'>
        <ZapIcon className='fill-accent' />
        <p className='text-lg uppercase'>Simonelli UI</p>
        <a className='invisible md:visible' href='#contact'>
          <Button
            variant={'secondary'}
            className='text-lg uppercase border-2 border-foreground'
          >
            Contact
          </Button>
        </a>
        {/* TODO: mobile hamburger here? */}
      </nav>

      <div className='flex flex-col flex-wrap items-center px-8 md:flex-row'>
        <div className='order-1 w-full mt-8 mb-8 text-5xl font-bold text-center uppercase font-gasoek md:text-center md:text-8xl'>
          Always be coding
        </div>
        <div className='flex flex-col flex-1 order-3 mt-2 space-y-0 md:space-y-2 md:order-2 md:mt-0'>
          <p className='font-medium md:text-3xl'>Nick Simonelli</p>
          <p className='font-light md:text-3xl'>Front end software developer</p>
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
