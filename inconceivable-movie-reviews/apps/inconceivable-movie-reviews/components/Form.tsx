import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import React from 'react'

const Form = ({ formId, movieForm, forNewMovie = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  // const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    title: movieForm.title,
    tagline: movieForm.tagline,
    starActor: movieForm.starActor,
    imageUrl: movieForm.imageUrl,
    movieRating: movieForm.movieRating,
  })

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/movie/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        // throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/movie/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      // setMessage('Failed to update movie')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/movie', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        // throw new Error(res.status)
      }

      router.push('/')
    } catch (error) {
      // setMessage('Failed to add movie')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const formValidate = () => {
    // eslint-disable-next-line prefer-const
    let err = {}
    // if (!form.title) err.title = 'title is required'
    // if (!form.tagline) err.tagline = 'tagline is required'
    // if (!form.imageUrl) err.imageUrl = 'imageUrl is required'
    // if (!form.starActor) err.starActor = 'Star actor is required'
    // if (!form.movieRating) err.movieRating = 'Movie Rating is required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewMovie ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="movieRating">Movie Rating:</label>
        <input
          type="text"
          name="movieRating"
          value={form.movieRating}
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={form.tagline}
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="starActor">Star Actor:</label>
        <input
          type="text"
          name="starActor"
          value={form.starActor}
          required
          onChange={handleChange}
        />
        <br />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          required
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form