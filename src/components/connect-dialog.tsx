import { Dialog, DialogTrigger, DialogContent } from './ui/dialog'
import { EmailForm } from './email-form'
import { ReactNode } from 'react'

export const ConnectDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className='max-w-md'>
          <EmailForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
