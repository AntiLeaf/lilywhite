import React, { useState } from "react";

import { Email, Account } from "@/app/common/Types";

type MailBoxType = 'inbox' | 'unread' | 'sent'

interface Filter {
  mailboxType : MailBoxType
  account? : string // undefined 则为所有账户
  keyword? : string
  filter? : (email : Email) => boolean
}

interface EmailContextType {
  filteredEmails: Email[];
  accounts: Account[];
  addAccount: (username: string) => void;
  removeAccount: (username: string) => void;
  setFilter: (filter: Filter) => void;
}

const EmailContext = React.createContext<EmailContextType>({
  filteredEmails: [],
  accounts: [],
  addAccount: () => {},
  removeAccount: () => {},
  setFilter: () => {},
});

const EmailProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [filter, setFilter] = useState<Filter>({ mailboxType: 'inbox' });

  const addAccount = (username: string) => {
    setAccounts(prevAccounts => [...prevAccounts, { username }]);
  };

  const removeAccount = (username: string) => {
    setAccounts(prevAccounts => prevAccounts.filter(account => account.username !== username));
  };

  const filteredEmails = emails.filter(email => {
    const matchesType =
      (filter.mailboxType === 'inbox' && email.to === filter.account) ||
      (filter.mailboxType === 'sent' && email.from === filter.account) ||
      (filter.mailboxType === 'unread' && !email.read);
    const matchesKeyword = !filter.keyword ||
      (email.subject.includes(filter.keyword) || email.body.includes(filter.keyword))
    
    return matchesType && matchesKeyword
  });

  return (
    <EmailContext.Provider value={{ filteredEmails, accounts, addAccount, removeAccount, setFilter }}>
      {children}
    </EmailContext.Provider>
  );
};

export { EmailContext, EmailProvider };
