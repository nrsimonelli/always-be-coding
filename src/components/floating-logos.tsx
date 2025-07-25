import React from 'react'
import { motion } from 'framer-motion'
import { useItemsPerRow } from '@/hooks/use-items-per-row'

type TechStackItem = {
  name: string
  icon: React.FC<{ className?: string; ogColor?: boolean }>
  url: string
}

interface LogoFloatProps {
  logos: TechStackItem[]
}

export const FloatingLogos = ({ logos }: LogoFloatProps) => {
  const itemsPerRow = useItemsPerRow()
  const rows = Array.from(
    { length: Math.ceil(logos.length / itemsPerRow) },
    (_, i) => logos.slice(i * itemsPerRow, (i + 1) * itemsPerRow)
  )

  return (
    <div className='flex flex-col gap-8 items-center pt-8'>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='flex gap-8 justify-center'>
          {row.map(({ name, icon: Icon }) => {
            const delay = Math.random() * 2
            const yAmount = 2 + Math.random() * 4
            const rotateAmount = 0.5 + Math.random() * 1.5
            const duration = 3 + Math.random() * 2

            return (
              <motion.div
                key={name}
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -yAmount, 0], rotate: [0, rotateAmount, 0] }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                  delay,
                }}
                className={'flex justify-center items-center w-16 h-16'}
              >
                <Icon className='w-12 h-12' />
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
