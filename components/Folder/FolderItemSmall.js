import Image from 'next/image'
import React from 'react'

function FolderItemSmall({folder}) {
  return (
    <div className=' flex gap-3
    hover:bg-gray-100
    p-2 rounded-md cursor-pointer'>
        <Image src='/folder.png'
        alt='folder'
        width={20}
        height={20}
        />
        <h1>{folder.name}</h1>
    </div>
  )
}

export default FolderItemSmall