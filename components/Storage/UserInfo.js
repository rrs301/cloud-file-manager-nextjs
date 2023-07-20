import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

function UserInfo() {
    const {data:session}=useSession();

  return (
    <div>
        {session?
        <div className='flex gap-2 items-center'>
            <Image src={session.user.image}
            alt='user-image'
            width={40}
            height={40}
            className='rounded-full'/>
            <div>
                <h2 className='text-[15px] font-bold'>{session.user.name}</h2>
                <h2 className='text-[13px] text-gray-400
                mt-[-4px]'>{session.user.email}</h2>
            </div>
            <div className='bg-blue-200 p-2 rounded-lg
            cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} onClick={()=>signOut()}
                stroke="currentColor" 
                className="w-6 h-6 text-blue-500
                hover:animate-pulse transition-all ">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
            </div>
        </div>:null}
    </div>
  )
}

export default UserInfo

