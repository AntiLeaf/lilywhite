import React, { useState } from 'react'

import MarkdownEditor from '../components/markdown/MarkdownEditor'

interface AttachmentProps {
  name: string
  file?: File
}

function MailEditor() {
  const [sender, setSender] = useState<string>('')
  const [receiver, setReceiver] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [attachments, setAttachments] = useState<AttachmentProps[]>([])

  const confirm_id = 'attachment_delete_confirm'
  const [attachment_to_delete, setAttachmentToDelete] = useState<string>('')

  return (
    <div className='w-full'>
      <div className='flex flex-col'>
        <div className='w-1/5'>
          <div className='flex flex-row items-center mb-2'>
            <p className='w-20'>发件人</p>
            <select className='grow select select-bordered select-primary'
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            >
              <option>option 1</option>
              <option>option 2</option>
            </select>
          </div>
        </div>

        <div className='w-1/3'>
          <div className='flex flex-row items-center mb-2'>
            <p className='w-20'>收件人</p>
            <input className='grow input input-bordered input-primary'
              type='text'
              placeholder='someone@example.com'
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
          </div>

          <div className='flex flex-row items-center mb-2'>
            <p className='w-20'>主题</p>
            <input className='grow input input-bordered input-primary'
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className='w-full mb-2'>
          <MarkdownEditor />
        </div>

        {
          attachments.length > 0 && (
            <div className='items-center mb-2'>
              <p className='font-semibold'>Attachments</p>
            </div>
          )
        }

        <div className='flex flex-col mb-2'>
          {
            attachments.map(item => (
              <div key={item.name} className='border border-primary rounded px-2 py-1 flex items-center mb-2 w-1/3'>
                <span>{item.name}</span>

                <div className='grow'></div> {/* no actural use, just a placeholder */}

                <button className='btn btn-square btn-sm btn-ghost'
                  onClick={() => {
                    setAttachmentToDelete(item.name)
                    const dialog = document.getElementById(confirm_id) as HTMLDialogElement
                    dialog.showModal()
                  }
                }>×</button>
              </div>
            ))
          }
        </div>
      
        <div className='flex flex-row items-center mb-2'>
          <p className='w-36'>添加附件…</p>
          <input className='file-input file-input-bordered file-input-primary'
            type='file'
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file && attachments.findIndex(item => item.name === file.name) === -1)
                setAttachments([...attachments, { name: file.name, file }])
              e.target.value = ''
            }}
          />
        </div>
      </div>

      {/* end */}

      <dialog id={confirm_id} className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>删除附件</h3>
          <p className='py-4'>确认删除 &quot;{attachment_to_delete}&quot;？</p>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn btn-primary'
                onClick={() => {
                  setAttachments(attachments.filter(item => item.name !== attachment_to_delete))
                  setAttachmentToDelete('')
                }}
              >
                确定
              </button>
              
              <button className='btn'
                onClick={() => {
                  setAttachmentToDelete('')
                }}
              >
                取消
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default MailEditor
