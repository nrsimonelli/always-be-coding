import { PROJECTS } from '@/lib/projects'
import { ProjectCard } from './project-card'

export const LiveProjects = () => {
  return (
    <section
      className='container px-4 py-16 mx-auto space-y-8 sm:px-0'
      id='projects'
    >
      <div className='mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
        <p className='text-3xl font-bold text-center lg:text-5xl'>
          Live Projects
        </p>
      </div>
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={`live-project-card-${index}`}
          isReversed={index % 2 === 0}
          {...project}
        />
      ))}
    </section>
  )
}
