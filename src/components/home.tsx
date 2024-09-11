import { Hero } from '@/components/hero'

export const Home = () => {
  return (
    <main className='transition-all duration-1000 overflow-x-clip'>
      <Hero />
      <section>about</section>
      <section>work</section>
      <section>projects</section>
      <section>contact</section>
      <section>footer</section>
    </main>
  )
}
