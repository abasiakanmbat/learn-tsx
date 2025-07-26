import { type ReactNode } from 'react'

interface buttonProps {
  text: string,
  color: string,
  fn: ()=>void,
  children: ReactNode
}
export default function Buttons({ children}:Partial<buttonProps>) {
  return (
    <button className='bg-amber-300 text-white'>
    
      {children}
    </button>
  )
}
