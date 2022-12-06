// Mongo Connection
import db from '../../../utils/mongoConnection';
// Review Schema
import Review from '../../../models/reviewSchema';
import { NextApiRequest, NextApiResponse } from 'next';

db();

// page for getting the specific review
export default async function getSpecificReview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        // find specific review by ID
        const review = await Review.findById(id);

        if (!review) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: review });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        // update the specific id and check validators
        const review = await Review.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!review) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: review });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        // delete the unique id/review
        const deletedReview = await Review.deleteOne({ _id: id });

        if (!deletedReview) {
          return res.status(400).json({ success: false });
        }

        // show empty data
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
  }
}

console.log(getSpecificReview);
