import React from 'react'

import { Email } from '@/app/common/Types'

import { EmailContext } from './EmailContext'

import EmailList from '@/app/components/inbox/EmailList'
import EmailDetail from '@/app/components/inbox/EmailDetail'

const InboxComponent : React.FC = () => {
  const { filteredEmails } = React.useContext(EmailContext)
  const [selectedEmail, setSelectedEmail] = React.useState<Email | null>(null)

  const onSelectEmail = (email : Email) => {
    setSelectedEmail(email)
  }

  return (
    <div>
      <EmailList emails={filteredEmails} onSelectEmail={onSelectEmail} />
      <EmailDetail email={selectedEmail} />
    </div>
  )
}
export default InboxComponent
