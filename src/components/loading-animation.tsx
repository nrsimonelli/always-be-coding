import { useState } from 'react'
import TypeIt from 'typeit-react'

export const LoadingAnimation = () => {
  const [initialized, setInitialized] = useState(false)

  const handleInit = () => {
    setTimeout(() => {
      setInitialized(true)
    }, 2000)
  }

  return (
    <div
      data-loaded={initialized}
      className={`
      fixed 
      inset-0 
      h-full 
      translate-y-0
      data-[loaded=true]:-translate-y-full 
      transition-transform 
      duration-1000 
      ease-in-out 
      will-change-transform
      bg-foreground
      `}
    >
      <div className='flex bg-[linear-gradient(_to_bottom,_rgba(18,_16,_16,_0)_50%,_rgba(0,_0,_0,_0.25)_50%_)] [background-size:100%_8px] pointer-events-none items-center justify-center w-full h-full'>
        <span className='text-2xl caret-transparent text-accent after:content-["■"] after:animate-[ping_1s_infinite] after:[animation-timing-function:step-end] after:ml-1'>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type('SOMETIMES.')
                .pause(200)
                .type('.')
                .pause(100)
                .type('.')
                .pause(700)
                .delete()
                .pause(400)
                .type('ALWAYS ')
                .pause(300)
                .type('BE CODING...')

              return instance
            }}
            options={{
              cursor: false,
              speed: 70,
              waitUntilVisible: true,
              startDelay: 500,
              deleteSpeed: 50,
              afterComplete: () => {
                handleInit()
              },
            }}
          ></TypeIt>
        </span>
      </div>
    </div>
  )
}
