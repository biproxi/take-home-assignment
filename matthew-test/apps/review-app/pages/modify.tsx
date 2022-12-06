import React from 'react';

import ReviewCard from '../components/ReviewCard';
import Review from '../models/reviewSchema';


export default function Modify() {
  return (
    // we ware going to get a review based on the id of the movie
    // we will then pass that review
    // to the review form component
    // and then we will update the review

    <div className=" relative flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Modify Review</h1>



        <ReviewCard />
    </div>




    );


    
}






