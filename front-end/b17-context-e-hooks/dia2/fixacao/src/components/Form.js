import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext';

const INIT_STATE = {
  name: '',
  age: '',
  city: '',
  module: '',
}

export default function Form() {
  const [formData, setFormData] = useState(INIT_STATE);
  const { submitFormInfo } = useContext(FormContext);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newForm = {
      name: formData.name,
      age: formData.age,
      city: formData.city,
      module: formData.module
    }

    submitFormInfo(newForm);

    setFormData(INIT_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Nome:
        <input type='text' name='name' id='name' value={formData.name} onChange={handleChange}></input>
      </label>
      <label>
        Idade:
        <input type='number' name='age' id='age' value={formData.age} onChange={handleChange}></input>
      </label>
      <label>
        Cidade:
        <input type='text' name='city' id='city' value={formData.city} onChange={handleChange}></input>
      </label>

      <fieldset>
        <legend>Módulo Atual:</legend>
      
        <label>
        <input type='radio' name='module' value='Fundamentos' checked={formData.module === 'Fundamentos'} onChange={handleChange}></input>
        Fundamentos
        </label>
        <label>
        <input type='radio' name='module' value='Front-End' checked={formData.module === 'Front-End'} onChange={handleChange}></input>
        Front-End
        </label>
        <label>
        <input type='radio' name='module' value='Back-End' checked={formData.module === 'Back-End'} onChange={handleChange}></input>
        Back-End
        </label>
        <label>
        <input type='radio' name='module' value='Ciência da Computação' checked={formData.module === 'Ciência da Computação'} onChange={handleChange}></input>
        Ciência da Computação
        </label>
      </fieldset>

        <button type='submit'>Finalizar</button>
      </form>
  )
}
