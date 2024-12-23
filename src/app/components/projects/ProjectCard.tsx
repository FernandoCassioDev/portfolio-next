import React from 'react'

import Image from 'next/image'
function ProjectCard() {
  return (
    // Finish card design
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 rounded-lg shadow-lg mx-4 my-5'>
      <Image
      src="/profile.png"
      width={250}
      height={250}
      alt="Development Project"
    />
    </div>
  )
}

export default ProjectCard
