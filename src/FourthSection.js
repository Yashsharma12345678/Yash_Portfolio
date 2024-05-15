import React from 'react'
import SkillsList from './SkillsList'

const FourthSection = () => {
  return (
    <div className=''>
        <div className="bg-[#000000] pt-10 flex items-center justify-center">
          <SkillsList />
        </div>
        <div className="bg-[#000000] flex items-center justify-center">
          <SkillsList initialDirection="right" />
        </div>
        <div className="bg-[#000000]  flex items-center justify-center">
          <SkillsList />
        </div>
    </div>
  )
}

export default FourthSection