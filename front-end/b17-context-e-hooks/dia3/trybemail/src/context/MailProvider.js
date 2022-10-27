import React, { useState } from 'react'
import { emailList } from '../helpers/emailsList';
import MailContext from './MailContext'

export default function MailProvider({children}) {
  const [emails, setEmail] = useState(emailList);

  const markAsRead = (id) => {
    const clickedEmail = emails.findIndex((email) => email.id === id);
    emails[clickedEmail].status = 1;
    setEmail(emails);
  }

  const markAsUnread = (id) => {
    const clickedEmail = emails.findIndex((email) => email.id === id);
    emails[clickedEmail].status = 0;
    setEmail(emails);
  }

  const contextValue = {
    emails,
    markAsRead,
    markAsUnread
  }

  return (
    <MailContext.Provider value={contextValue}>
      {children}
    </MailContext.Provider>
  )
}
