import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function EditCommentForm({updateComment}) {
  const [formData, setFormData] = useState({
    comment: ''
  })
  const [errors, setErrors] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetch(`/comments/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  function onSubmit(e){
    e.preventDefault()
    //PATCH to `/comments/${id}`
    fetch(`/comments/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(updateComment)
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div>
      {errors?errors.map(e => <div>{e}</div>):null}
      <form onSubmit={onSubmit}>
        <label>Comment </label>
        <input type='text' name='comment' value={formData.comment} onChange={handleChange} />
        
        <input type='submit' value='Update Comment' />
      </form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }