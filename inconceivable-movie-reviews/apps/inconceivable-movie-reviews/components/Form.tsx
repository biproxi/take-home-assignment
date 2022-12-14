import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import React from 'react'

// The Form component is integral to this app.  It is used for both creating and updating movies, and is also used on the initialize page.  The form houses both the HTML/CSS to cause the form to render in the browser but also the server-side logic that posts our data to the database using Mongoose middle-ware.  The form follows the basic structure from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose/components/Form.js.

const Form = ({ formId, movieForm, forNewMovie = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    title: movieForm.title,
    tagline: movieForm.tagline,
    starActor: movieForm.starActor,
    imageUrl: movieForm.imageUrl,
    movieRating: movieForm.movieRating,
  })

  // The PUT method edits an existing entry in the mongodb database.
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

  // The POST method adds a new entry in the mongodb database.
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
      target.name === 'some' ? target.checked : target.value
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

// The handleSubmit function is used when the submit button is pressed on the form.  It finds out whether or not the form is for a new or existing movie, and then directs the request to either postData or putData depending on which type of request is needed to fulfill the action.

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewMovie ? postData(form) : putData(form).then(() => {
        window.location.href = "/modify"
      })
    } else {
      setErrors({ errs })
    }
  }

  return (
    <div>
      <form id={formId} onSubmit={handleSubmit} className="bg-yellow-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
      <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label htmlFor="movieRating" className="block text-gray-700 text-sm font-bold mb-2">Movie Rating:</label>
        <input
          type="text"
          name="movieRating"
          value={form.movieRating}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label htmlFor="tagline" className="block text-gray-700 text-sm font-bold mb-2">Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={form.tagline}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label htmlFor="starActor" className="block text-gray-700 text-sm font-bold mb-2">Star Actor:</label>
        <input
          type="text"
          name="starActor"
          value={form.starActor}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ">
          Submit
        </button>
      </form>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </div>
  )
}

export default Form
