import { useEffect, useState } from 'react'

export const useItemsPerRow = () => {
  const [itemsPerRow, setItemsPerRow] = useState(6)

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth
      if (width < 640) setItemsPerRow(3)
      else if (width < 768) setItemsPerRow(4)
      else setItemsPerRow(6)
    }

    updateItems()
    window.addEventListener('resize', updateItems)
    return () => window.removeEventListener('resize', updateItems)
  }, [])

  return itemsPerRow
}
