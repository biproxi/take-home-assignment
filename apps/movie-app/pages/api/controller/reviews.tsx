// Mongo Connection
import db from '../../../utils/connection';
// Review Schema
import Review from '../../../models/movieSchema';
import { NextApiRequest, NextApiResponse } from 'next';

db();

export default async function getReviews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // find all reviews
        const review = await Review.find({});
        res.status(200).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        // create the review information
        const review = await Review.create(req.body);
        res.status(201).json({ sucess: true, data: review });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ sucess: false });
      break;
  }
}
