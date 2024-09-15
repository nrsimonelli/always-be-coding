import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import emailjs from '@emailjs/browser'

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
})

type FormValues = z.infer<typeof formSchema>

export const EmailForm = ({ handleSuccess }: { handleSuccess: () => void }) => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: FormValues) {
    setIsLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setIsLoading(false)
        handleSuccess()
      })
      .catch(() => {
        setIsLoading(false)
        form.setError('message', {
          message: 'Unable to send. Please try again later.',
        })
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-accent'>Name</FormLabel>
              <FormControl>
                <Input
                  className='border-accent text-accent'
                  placeholder='Thomas Anderson'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-accent'>Email</FormLabel>
              <FormControl>
                <Input
                  className='border-accent text-accent'
                  placeholder='tanderson@metacortex.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-accent'>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Let me tell you why you're here. You're here because you know something. What you know you can't explain, but you feel it. You've felt it your entire life..."
                  className='resize-none border-accent text-accent min-h-[96px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} variant={'accent'} type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
