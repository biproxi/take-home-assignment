import React from 'react';

import ReviewCard from '../components/ReviewCard';
import Review from '../models/reviewSchema';
import reviews from './api/controller/reviews';
import getReviews from './api/controller/specific';

export default function Review() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Modify Review</h1>
      <ReviewCard />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const review = await getReviews(id);
  return {
    props: {
      review,
    },
  };
}
