/* eslint-disable @typescript-eslint/no-var-requires */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const styles = require('../styles/index.module.css')

export function Index() {

  return (
    <div className="flex flex-row space-x-12  h-screen place-items-center y-screen place-content-center">
      <Link className="max-w-sm rounded overflow-hidden shadow-lg content-center grow transition duration-300 hover:scale-125 m-10" id="review" href="/display">
        <Image className="w-full review" src="/../public/read-reviews.jpeg" width={100} height={100} alt="Read Reviews" />
        <div className="px-6 py-4" id={styles.review}>
          <div className="font-bold text-xl mb-2">Read Reviews</div>
        </div>
      </Link>
      <Link className="max-w-sm rounded overflow-hidden shadow-lg grow transition duration-300 hover:scale-125 m-10" id="review" href="/modify">
        <Image className="w-full review" src="/../public/review.jpeg" width={100} height={100} alt="Contribute" />
        <div className="px-6 py-4" id={styles.review}>
          <div className="font-bold text-xl mb-2">Contribute</div>
        </div>
      </Link>
    </div>

  );
}

export default Index;
