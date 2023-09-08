import React from 'react'
import CommunityElement from './CommunityElement'

export default function Community() {
  return (
    <div className=' bg-[#e6e7e8] text-black p-4'>
        <h2 className='text-2xl font-semibold text-center mt-6'>Enter the Community</h2>
        <div className='flex justify-center items-center gap-4'>
        <CommunityElement src="/design/community_1.png" titlu="Find recipes" text="Explore the recipes selected by our stuff uploaded by our community" />
        <CommunityElement src="/design/community_2.png" titlu="Review recipes" text="Evaluate and comment on the dishes proposed by others" />
        <CommunityElement src="/design/community_3.png" titlu="Add recipes" text="Pass on your know-how by proposing your recipes" />

        </div>
    </div>
  )
}
