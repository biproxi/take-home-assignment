import dbConnect from '../../../lib/dbConnect'
import Movie from '../../../models/Movie'

// The API page in a Next.js app functions very similarly to a controller in a Rails or Phoenix app.  It uses conditional logic to check what type of request is coming from the client.  The client receives the JSON data based on what type of request they submitted.
export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {

    // This is the index action for the app.  It finds each instance of a movie in our database, and returns the JSON for those instances.  If there is an error, most likely because there is not data in the database, such as when you intiialize the app, a 400 error is returned to the client.
    case 'GET':
      try {
        const movies = await Movie.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: movies })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

      // The POST action allows the client to post a new Movie document to the database.  If the post cannot successfully be created, a 400 error is returned.
    case 'POST':
      try {
        const movie = await Movie.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: movie })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
