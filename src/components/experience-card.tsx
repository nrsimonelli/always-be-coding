interface ExperienceCardProps {
  title: string
  position: string
  description: string
  image: string
}

export const ExperienceCard = ({
  title,
  position,
  description,
  image,
}: ExperienceCardProps) => {
  return (
    <div className='shadow-xl bg-card text-card-foreground p-8 rounded-lg space-y-4 flex flex-col flex-1 basis-80 md:h-[320px] justify-center md:justify-start'>
      <div className='inline-flex items-center space-x-2'>
        <div className='flex justify-center w-16 h-16 rounded-full shadow overflow-clip shrink-0'>
          <img
            className={'h-full w-auto'}
            src={image}
            alt='work experience avatar logo'
          />
        </div>
        <p className='text-2xl font-semibold'>{title}</p>
      </div>
      <div className='space-y-2'>
        <p className='font-semibold'>{position}</p>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}
