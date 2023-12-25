import React from "react";

import { Email } from "@/app/common/Types";

interface EmailDetailProps {
  email: Email | null
}

const EmailDetail : React.FC<EmailDetailProps> = ({ email }) => {
  return email === null ? (<div></div>) : (
    <div>
      <h3>{email.subject}</h3>
      <p><strong>发件人:</strong> {email.from}</p>
      <p><strong>收件人:</strong> {email.to}</p>
      <p>{email.body}</p>
    </div>
  )
}

export default EmailDetail
