import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Index() {
    const naviagate=useNavigate()
    useEffect(() => {
        naviagate('/home')
    }, [])
    
  return (
    <div>
      
    </div>
  )
}
