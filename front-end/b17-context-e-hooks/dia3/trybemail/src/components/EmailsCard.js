import React, { useContext } from 'react'
import MailContext from '../context/MailContext'

export default function EmailsCard() {
  const { emails, markAsRead, markAsUnread } = useContext(MailContext);

  return (
    <div>
      <ul>
      {emails.map((email, index) => {
      return (
      <li key={index}>
        <p className={}>{email.title}</p>
        <button type='button' onClick={() => markAsRead(email.id)}>Lido</button>
        <button type='button' onClick={() => markAsUnread(email.id)}>Não Lido</button>
      </li>
      )
    })}
      </ul>
    </div>
  )
}
