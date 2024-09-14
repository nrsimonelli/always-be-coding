import { EXPERIENCE } from '@/lib/experience'
import { ExperienceCard } from './experience-card'

export const WorkExperience = () => {
  return (
    <section
      className='container px-4 py-16 mx-auto space-y-8 sm:px-0'
      id='experience'
    >
      <div className='mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
        <p className='text-3xl font-bold text-center lg:text-5xl'>
          Work Experience
        </p>
      </div>
      <div className='flex flex-col flex-wrap items-center gap-8 mx-auto transition-all duration-500 md:justify-center md:flex-row'>
        {EXPERIENCE.map((project, index) => (
          <ExperienceCard key={`experience-card-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}
