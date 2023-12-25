import React, { useState } from 'react'

import { Input, Select, Button, message, Upload, Skeleton } from 'antd'
import type { SelectProps, UploadProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import MarkdownEditor from '../components/markdown/MarkdownEditor'
import { info } from 'console'

import { Attachment } from '../common/Types'

const MailEditor : React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  const [sender, setSender] = useState<string>('')
  const [receiver, setReceiver] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [attachments, setAttachments] = useState<Attachment[]>([])

  const confirm_id = 'attachment_delete_confirm'
  const [attachment_to_delete, setAttachmentToDelete] = useState<string>('')

  return (
    <div className='w-full'>

      { !loaded && (<div className='absolute z-9999'>
        <Skeleton active />
      </div>) }

      <div className='flex flex-col'>
        <div className='w-1/3'>
          <div className='flex flex-row items-center mb-2'>
            <p className='w-20'>发件人</p>
            <Select
              style={{ width: '100%' }}
              options={[
                { label: 'option 1', value: 'option 1' },
                { label: 'option 2', value: 'option 2' },
                { label: 'disabled option', value: 'disabled option', disabled: true },
              ]}
              value={sender}
              onChange={(value : string) => { setSender(value) }}
            />
          </div>
        </div>

        <div className='w-1/3'>
          <div className='flex flex-row items-center mb-2'>
            <p className='w-20'>收件人</p>
            <Select
              mode='tags'
              style={{ width: '100%' }}
              placeholder='someone@example.com'
              onChange={(value : string) => { setReceiver(value) }}
            />
          </div>

          <div className='flex flex-row items-center mb-2'>
            <p className='w-20'>主题</p>
            <Input
              placeholder='主题'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className='w-full mb-2'>
          <MarkdownEditor onLoaded={() => { setLoaded(true) }} />
        </div>

        <Upload
          name='attachments'
          action={undefined}
          onChange={(info) => { console.log(info) }}
        >
          <Button icon={<UploadOutlined />}>添加附件…</Button>
        </Upload>

      </div>
    </div>
  )
}

export default MailEditor
