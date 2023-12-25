'use client'

import React, { useState } from 'react'

import * as monaco from 'monaco-editor';
import { loader } from '@monaco-editor/react';

import { ConfigProvider, theme } from 'antd';

// import { FiHome, FiMail, FiSettings } from 'react-icons/fi'

import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { HomeOutlined, InboxOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'

// import AntdConfig from './components/AntdConfig'

import Home from '@/app/pages/Home'
import MailEditor from '@/app/pages/MailEditor'
import Dummy from '@/app/pages/Dummy'
import Inbox from '@/app/pages/Inbox'
import Settings from './pages/Settings'

import { EmailContext, EmailProvider } from './components/inbox/EmailContext'

type MenuItem = Required<MenuProps>['items'][number]

enum CurrentModule {
  Home,
  WriteMail,
  Inbox,
  Settings,
  Dummy,
}

function HomePage() {
  // const { window } = require('browser-monads')
  // if (typeof window !== 'undefined') {
  //   loader.config({ monaco });
  // }

  const [collapsed, setCollapsed] = useState(false);
  const [current_module, setCurrentModule] = useState<CurrentModule>(CurrentModule.WriteMail)
  // console.log('current_module = ', current_module)

  const { setFilter, accounts } = React.useContext(EmailContext)
  console.log(accounts)
  if (setFilter === undefined || accounts === undefined) {
    console.log('setFilter, accounts 不能为 undefined')
  }

  return (
    <div className='flex flex-row'>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,

          token: {
            colorPrimary : '#ffc0cb',
            borderRadius : 4,

            // colorBgContainer : '#fff5f6',
          }
        }}
      >
        <Menu
          onClick={((e) => {
            console.log('click ', e);
            
            if (e.key === 'home') {
              setCurrentModule(CurrentModule.Home)
            }
            else if (e.key === 'mail') {
              setCurrentModule(CurrentModule.WriteMail)
            }
            else if (e.key === 'settings') {
              setCurrentModule(CurrentModule.Settings)
            }
            else {
              setCurrentModule(CurrentModule.Inbox)

              const [prefix, username] = e.key.split(':')
              setFilter({
                mailboxType: prefix as ('inbox' | 'unread' | 'sent'),
                account: username == 'all' ? undefined : username,
              })
            }
          }) as MenuProps['onClick']}
          style={{ width: 192 }}
          defaultSelectedKeys={['mail']}
          mode='inline'
          items={[
            { key: 'home', icon: <HomeOutlined />, label: '主页' } as MenuItem,
            { key: 'mail', icon: <MailOutlined />, label: '写邮件' } as MenuItem,
            { type : 'divider' },
            { key: 'inbox', icon: <InboxOutlined />, label: '收件箱',
              children: [
                { key: '', label: '所有邮箱', type: 'group', children: [
                  { key: 'inbox:all', label: '收件箱' },
                  { key: 'unread:all', label: '未读邮件' },
                  { key: 'sent:all', label: '已发送' },
                ]},
                ...accounts.map(account => ({
                  key: account.username,
                  label: account.username,
                  type: 'group',
                  children: [
                    { key: `inbox:${account.username}`, label: '收件箱' },
                    { key: `unread:${account.username}`, label: '未读邮件' },
                    { key: `sent:${account.username}`, label: '已发送' },
                  ]
                })),
              ]
            } as MenuItem,
            { type : 'divider' },
            { key: 'settings', icon: <SettingOutlined />, label: '设置' } as MenuItem,
          ]}
        />

        <main className='static min-h-screen grow'>
            {current_module === CurrentModule.Home && <div>
              <div className='flex max-h-screen flex-col items-center justify-between p-24'>
                <Home />
              </div>
            </div>}

            {current_module === CurrentModule.WriteMail && <div>
              <div className='flex max-h-screen flex-col items-center justify-between p-24'>
                <MailEditor />
              </div>
            </div>}

            {current_module === CurrentModule.Inbox && <div>
              <div className='flex max-h-screen flex-col items-center justify-between p-24'>
                <Inbox />
              </div>
            </div>}

            {current_module === CurrentModule.Settings && <div>
              <EmailProvider>
                <div className='flex max-h-screen flex-col items-center justify-between p-24'>
                  <Settings />
                </div>
              </EmailProvider>
            </div>}

            {current_module === CurrentModule.Dummy && <div>
              <Dummy />
            </div>}
        </main>
      </ConfigProvider>
    </div>
  )
}

export default HomePage
