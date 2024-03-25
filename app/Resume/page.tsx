import React from 'react'
import Resume from "../../components/main/Resume"

const page = () => {
  return (
    <div className="h-full w-full">
      <main className="flex flex-col items-center justify-center py-20" id="projects">
        <Resume/>
        </main>
    </div>
  )
}

export default page