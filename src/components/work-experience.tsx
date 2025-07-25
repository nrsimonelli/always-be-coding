import { EXPERIENCE } from '@/lib/experience'
import { ExperienceCard } from '@/components/experience-card'

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
      <div className='flex flex-col flex-wrap gap-8 items-center mx-auto transition-all duration-500 md:justify-center md:flex-row'>
        {EXPERIENCE.map((project) => (
          <ExperienceCard
            key={`experience-card-${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}
