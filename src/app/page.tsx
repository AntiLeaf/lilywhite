'use client'

import React, { useState } from 'react'

// import CenteredHero from './components/common/Hero'
import Modal from './components/common/Modal'

import MarkdownEditor from './components/markdown/MarkdownEditor'

function Home() {
  // const [hero, setHero] = useState(CenteredHero({ id: 'hero', body: <h1 className='text-5xl font-bold'>Hello, world!</h1>, button_text: 'Click me!' }))
  const [modal_1, setModal_1] = useState(Modal({ id: 'modal_1', title: 'Modal 1', body: 'This is a modal with a close button.', footer: 'OK' }))

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* {hero} */}
      {modal_1}

      <button className='btn' onClick={
        () => {
          // Set the body to current time
          setModal_1(Modal({ id: 'modal_1', title: 'Modal 1', body: new Date().toLocaleTimeString(), footer: 'OK' }));
          (document.getElementById('modal_1') as HTMLDialogElement)?.showModal()
        }
      }>Show Modal 1</button>

      
      <div className='w-full'>
        <MarkdownEditor />
      </div>
    </main>
  )
}

export default Home
