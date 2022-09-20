import React, { useState } from 'react'
import FormContext from './FormContext'

export default function FormProvider({ children }) {
  const [submittedForms, setNewForms] = useState([]);

  const submitFormInfo = (newForm) => {
    setNewForms(submittedForms.concat(newForm));
  };

  const contextValue = {
    submitFormInfo,
    submittedForms,
  }

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  )
}
