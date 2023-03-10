// import Form from '@reusejs/react/dist/types/utils/form'
import React from 'react'

function AddPack() {
      const handleSubmit = e => {
            e.preventDefault()
            alert("Hello")
      }
  return (
    <>
      <h1>Add Your Package</h1>
      <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search your Result'/>
            <br/>
            <select>
                  <option></option>
            </select>
            <br/>
            <textarea></textarea>
            <br/>
            <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default AddPack