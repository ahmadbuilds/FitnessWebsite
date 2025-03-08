import React from 'react'
import ExerciseNav from '../ui/ExerciseNav'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <ExerciseNav></ExerciseNav>
      <div>{children}</div>
    </div>
  )
}

export default layout
