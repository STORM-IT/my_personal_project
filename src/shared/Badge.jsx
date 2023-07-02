import React from 'react'

export default function Badge({text,padding,fontSize="16px",classes=""}) {
  return (
    <div className={`bg-purple text-white ${padding?padding:"py-3 px-4"} text-[${fontSize}] inline-block rounded-3xl ${classes}`}>
        {text}
    </div>
  )
}
