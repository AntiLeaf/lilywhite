import React from 'react'

import Image from 'next/image'

const Home : React.FC = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <Image src='/home.jpg' alt="Logo" 
              width={400}
              height={400}/>
        <h1 className="text-5xl font-bold">春天来了哦~</h1>
        <p className="py-6">测试文本</p>
      </div>
    </div>
  )
}

export default Home
