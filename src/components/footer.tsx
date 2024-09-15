import { ConnectDialog } from '@/components/connect-dialog'
import { Button } from '@/components/ui/button'
import footerImage from '@/assets/site/footer.png'

export const Footer = () => {
  return (
    <section id='connect' className='relative py-16 overflow-x-clip'>
      <div className='container flex flex-col gap-8 px-4 mx-auto md:px-0 md:flex-row md:gap-0'>
        <div className='flex flex-col items-end justify-center flex-1 order-2 md:order-1'>
          <div className='max-w-[540px] space-y-8'>
            <div className='space-y-4'>
              <p
                className={`lg:text-5xl text-3xl font-bold text-foreground after:content-["Let's_Connect!"] after:text-background after:mix-blend-difference`}
              >
                {/* Let's Connect! */}
              </p>
              <p className='font-light mix-blend-normal after:content-["Want_to_learn_more_about_my_work_experience_and_love_for_coding?"] after:text-background after:mix-blend-difference'>
                {/* Want to learn more about my work experience and love for coding? */}
              </p>
              <p className='font-light mix-blend-difference after:content-["Fill_out_the_contact_form_below!"] after:text-background after:mix-blend-difference'>
                {/* Fill out the contact form below! */}
              </p>
            </div>
            <ConnectDialog>
              <Button className='uppercase' variant={'accent'}>
                Contact
              </Button>
            </ConnectDialog>
          </div>
        </div>

        <div className='flex self-end justify-center flex-1 order-1 md:self-auto md:order-2'>
          <img
            src={footerImage}
            className='max-w-[200px] md:max-w-max w-full h-auto'
          />
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-0 h-[80%] scale-x-110 -z-10 bg-foreground md:rounded-tl-[50%_10rem] md:rounded-tr-[50%_10rem] rounded-tl-[50%_4rem] rounded-tr-[50%_4rem]'></div>
    </section>
  )
}
