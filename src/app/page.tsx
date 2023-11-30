'use client'

import React, { useState } from 'react'

import { FiHome, FiMail, FiSettings } from 'react-icons/fi'

// import CenteredHero from './components/common/Hero'
import Modal from './components/common/Modal'

import Sidebar from './components/common/Sidebar'

// import MarkdownEditor from './components/markdown/MarkdownEditor'
import Home from './pages/Home'
import MailEditor from './pages/MailEditor'
import Dummy from './pages/Dummy'

enum CurrentModule {
  Home,
  Mail,
  Settings,
  Dummy,
}

function HomePage() {
  const [current_module, setCurrentModule] = useState<CurrentModule>(CurrentModule.Mail)
  // console.log('current_module = ', current_module)

  return (
    <main className='static min-h-screen'>

      {(current_module === CurrentModule.Home) && <div>
        <Home />
      </div>}

      {(current_module === CurrentModule.Mail) && <div>
        <div className='flex max-h-screen flex-col items-center justify-between p-24'>

          <MailEditor />
        </div>
      </div>}

      {(current_module === CurrentModule.Dummy) && <div>
        <Dummy />
      </div>}

      <Sidebar items={[
        { icon: <FiHome />, label: '主页', onClick: () => setCurrentModule(CurrentModule.Home) },
        { icon: <FiMail />, label: '邮件', onClick: () => setCurrentModule(CurrentModule.Mail) },
        { icon: <FiSettings />, label: '设置', onClick: () => setCurrentModule(CurrentModule.Dummy) }
      ]} />

    </main>
  )
}

export default HomePage
