import { Stream } from 'stream'

interface Attachment {
  filename : string
  content : string | Buffer | Stream
}

interface Email {
  id : number
  from : string
  to : string | string[]
  cc? : string | string[]
  subject : string
  body : string
  attachments? : Attachment[]

  read : boolean
}

interface Account {
  username : string
  password? : string
  host? : string
  port? : number
  // secure : boolean
}

export type { Attachment, Email, Account }
