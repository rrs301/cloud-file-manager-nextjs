import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Login() {
    const {data:session}=useSession();
    const router=useRouter();
    useEffect(()=>{
      console.log("User Session",)
      if(session)
      {
        router.push("/")
      }
     
    },[session])
  return (
    <div className='flex justify-center 
    items-center mt-[25%] ml-[0%] md:ml-[50%] flex-col gap-6'>
      <Image src='/logo.png'
      alt='logo'
      width={200}
      height={100}
      />
        <button 
        className=' text-white'
        onClick={()=>signIn()}>
            <Image src='/google.png'
            alt='google'
            width={300}
            height={300}
            />
            </button>
    </div>
  )
}

export default Login