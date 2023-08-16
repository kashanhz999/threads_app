import Image from 'next/image'
import React from 'react'

interface props{
    accountId:string
    authUserId:string
    name:string
    username:string
    imgUrl:string
    bio:string
}

const ProfileHeader = ({
    accountId,
    authUserId,
    name,
    username,
    imgUrl,
    bio

}:props) => {
  return (
    <div className="flex w-full flex-col justify-start">
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className='relative h-20 w-20 object-cover'>
                    <Image
                        src={imgUrl}
                        alt="Profile Picture"
                        fill
                        className='rounded-full object-cover shadow-2xl'
                    />
                </div>
                <div className='flex-1'>
                    <h2 className='text-left text-heading4-medium text-light-1'>{name}</h2>

                    <p className='text-base-medium text-gray-1'>@{username}</p>
                </div>

            </div>


        {/* TODO Community */}
        </div>
        <p className='mt-7 max-w-lg text-small-regular text-light-2 antialiased tracking-wider'>
            {bio}
        </p>
        <div className='mt-8 h-0.5 w-full bg-dark-3'/>
    </div>
  )
}

export default ProfileHeader