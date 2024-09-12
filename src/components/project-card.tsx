import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface ProjectCardProps {
  isReversed: boolean
  title: string
  url: string
  image: string
  alt: string
  description: string
  stack: string[]
}

export const ProjectCard = ({
  isReversed,
  title,
  url,
  image,
  alt,
  description,
  stack,
}: ProjectCardProps) => {
  // const { title, url, image, alt, description, stack } = project
  return (
    <div
      className={cn(
        'transition-all duration-500 rounded-lg overflow-clip shadow-xl h-[520px] md:flex-row flex flex-col md:max-w-screen-md mx-auto md:h-[336px] lg:h-[445px] lg:max-w-screen-lg min-w-[280px] bg-card text-card-foreground',
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <div
        className={cn(
          'min-h-0 flex-1 shrink-0',
          isReversed ? 'bg-primary' : 'bg-accent'
        )}
      >
        <img
          className='w-auto h-full mx-auto bg-no-repeat bg-contain'
          src={image}
          alt={alt}
        />
      </div>

      <div className='flex items-center flex-1 min-h-0 shrink-0'>
        <div className='mx-16 space-y-8 sm:space-y-4 md:space-y-8'>
          <p className='text-2xl font-semibold'>{title}</p>

          <p className='hidden text-lg font-light sm:inline-flex lg:inline-flex md:hidden'>
            {description}
          </p>

          <div className='inline-flex flex-wrap items-center'>
            {stack.map((item, index) => {
              const lastIndex = stack.length - 1

              return (
                <>
                  <p className='mr-2 text-sm font-light text-muted-foreground'>
                    {item}
                  </p>
                  {index < lastIndex && (
                    <span
                      className={cn(
                        'mr-2 h-1.5 w-1.5 rounded-full',
                        'bg-primary'
                      )}
                    />
                  )}
                </>
              )
            })}
          </div>
          <div>
            {/* open link in new tab */}

            <a href={url} target='_blank' rel='noreferrer noopener'>
              <Button
                className='font-medium uppercase border-2 border-foreground'
                variant={'outline'}
              >
                View Project
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
