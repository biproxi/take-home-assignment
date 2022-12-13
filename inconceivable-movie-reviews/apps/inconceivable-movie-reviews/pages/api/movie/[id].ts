import dbConnect from '../../../lib/dbConnect'
import Movie from '../../../models/Movie'

// The API page in a Next.js app functions very similarly to a controller in a Rails or Phoenix app.  It uses conditional logic to check what type of request is coming from the client.  The client receives the JSON data based on what type of request they submitted.
export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {

    // This case is used for the Show actions in the app.  If the case cannot find the model by its ID, it returns a 400 error.  If it finds the data, it will return the data in JSON form.
    case 'GET' /* Get a model by its ID */:
      try {
        const movie = await Movie.findById(id)
        if (!movie) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: movie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

      // This case is used for updating a model.  If the validations are not met or if the id cannot be found, then a 400 error is returned to the client.  Otherwise the API successfully PUTs the data in the form of JSON.
    case 'PUT' /* Edit a model by its ID */:
      try {
        const movie = await Movie.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!movie) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: movie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

      // This case is used for deleting a model.  If the Movie is found based on its id, it is successfully deleted.  Otherwise, a 400 error is returned.
    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedMovie = await Movie.deleteOne({ _id: id })
        if (!deletedMovie) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
