import React from 'react'
import ExerciseNav from '../ui/ExerciseNav'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Exercises",
  description: "A fitness website just for showing the desired Workout",
};
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <ExerciseNav></ExerciseNav>
      <div>{children}</div>
    </div>
  )
}

export default layout
