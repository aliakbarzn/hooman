import ReviewCard from '@/components/cards/review-card'
import React from 'react'

export default function LatestReview() {
  return (
    <div className='w-full py-16 px-32'>
      <h1 className="mb-11">Latest Review</h1>
      <ReviewCard/>
    </div>
  )
}
