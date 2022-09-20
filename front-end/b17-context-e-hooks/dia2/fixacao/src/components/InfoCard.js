import React, { useContext } from 'react'
import FormContext from '../context/FormContext'

export default function InfoCard() {
  const { submittedForms } = useContext(FormContext);

  return (
    <>
    { submittedForms.map((form) => 
      <div key={`${form.name} ${form.age}`}>
      <p>{form.name}</p>
      <p>{form.age}</p>
      <p>{form.city}</p>
      <p>{form.module}</p>
      </div>
    )}
    </>
  )
}
