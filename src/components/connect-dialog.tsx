import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from './ui/dialog'
import { EmailForm } from './email-form'
import { ReactNode, useState } from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { cn } from '@/lib/utils'

export const ConnectDialog = ({ children }: { children: ReactNode }) => {
  const [showThankYouScreen, setShowThankYouScreen] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpenChange = () => {
    setOpen((prev) => !prev)
    if (showThankYouScreen) {
      setShowThankYouScreen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='bg-foreground overflow-clip border-foreground'>
        <div className='content-["_"] block absolute top-[0] left-[0] bottom-[0] right-[0] bg-[linear-gradient(_to_bottom,_rgba(18,_16,_16,_0)_50%,_rgba(0,_0,_0,_0.25)_50%_)] [background-size:100%_8px] pointer-events-none -z-10'>
          <div className='w-full h-[100px] bg-[linear-gradient(_0deg,_rgba(0,_0,_0,_0)_0%,_rgba(255,_255,_255,_0.2)_10%,_rgba(0,_0,_0,_0.1)_100%_)] opacity-10 absolute bottom-full animate-[scanline_10s_linear_infinite]'></div>
          <div></div>
        </div>
        <DialogHeader>
          <DialogTitle className='text-accent'>
            {showThankYouScreen
              ? 'Thank you!'
              : 'Please enter your information below.'}
          </DialogTitle>
          <VisuallyHidden>
            <DialogDescription>Email portfolio contact form</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <div
          className={cn(
            'transition-all duration-500',
            showThankYouScreen ? 'h-[140px]' : 'h-[400px]'
          )}
        >
          <div className={showThankYouScreen ? 'block' : 'hidden'}>
            <p className='text-accent'>Your message was sent successfully.</p>
          </div>

          <div className={showThankYouScreen ? 'hidden' : 'block'}>
            <EmailForm handleSuccess={() => setShowThankYouScreen(true)} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
