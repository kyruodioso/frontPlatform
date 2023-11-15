'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";


import { Button , ButtonGroup} from '@nextui-org/button'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex gap-4'>
      <ButtonGroup>
      <Button size='sm' variant='flat' onClick={() => setTheme('light')}>
      <FaRegSun />
      </Button>
      <Button size='sm' variant='flat' onClick={() => setTheme('dark')}>
      <FaRegMoon />
      </Button>
      </ButtonGroup>
    </div>
  )
}