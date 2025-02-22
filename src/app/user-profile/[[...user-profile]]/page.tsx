import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
   <div className='flex justify-center items-center p-8'>
     <UserProfile path='/user-profile' />
   </div>
  )
}

export default Page