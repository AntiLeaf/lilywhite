import React from "react"

import { Email } from "@/app/common/Types"

interface EmailListProps {
	emails : Email[]
  onSelectEmail: (email : Email) => void
}

const EmailList : React.FC<EmailListProps> = ({ emails, onSelectEmail }) => {
  return (
    <div>
      {
        emails.map(email => (
          <div key={email.id} onClick={() => onSelectEmail(email)}>
            <div>{email.from}</div>
            <div>{email.subject}</div>
          </div>
        ))
      }
    </div>
  )
}

export default EmailList
