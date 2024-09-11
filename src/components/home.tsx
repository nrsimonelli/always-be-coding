import { Hero } from '@/components/hero'
import { ZapIcon } from '@/components/ui/zap-icon'

export const Home = () => {
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

      <section>about</section>
      <section>work</section>
      <section>projects</section>
      <section>contact</section>
      <section>footer</section>
    </main>
  )
}
