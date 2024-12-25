import React from 'react'
import error404 from './Animation - 1735149055771.json'
import Lottie from 'lottie-react'

export default function Error() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">404 Not Found</h1>
      <p className="py-6">
    <Lottie animationData={error404} loop={true} />;
      </p>
      
    </div>
  </div>
</div>
    </div>
  )
}
