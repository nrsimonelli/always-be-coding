import { Fragment } from 'react/jsx-runtime'
import { ZapIcon } from '@/components/icons/about/zap-icon'

export const AlwaysBeCoding = () => {
  return (
    <div className='w-full h-20 bg-foreground text-background'>
      <div className='flex flex-row items-center space-x-4 w-max h-full animate-infinite-scroll'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Fragment key={`abc-${index}`}>
            <ZapIcon className='min-w-6 min-h-6' />
            <p className='flex-shrink-0 text-xl uppercase'>Always be coding</p>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
