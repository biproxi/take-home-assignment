import axios from 'axios';
import Router from 'next/router';
import { Button } from 'semantic-ui-react';
import styles from '../index.module.css';

export function Moviecard({ review }) {
  const { data } = review;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios
      .delete(`http://localhost:4200/api/controller/${data._id}`)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Router.push(`/edit`);
  };
  return (
    <div className="container">
      <h1>Are you sure you want to delete this edit?</h1>
      <div className={styles['delete-container']}>
        <h1>
          Movie: {data.movieTitle} - {data.movieId} (MovieID)
        </h1>
        <h2>
          <b>review by: </b>
          {data.name}
        </h2>
        <p>
          <b>Created at: </b>
          <em>{new Date(data.createdAt).toLocaleDateString()}</em>
        </p>
        <p>{data.review}</p>
      </div>
      <Button type="submit" onClick={handleSubmit}>
        Delete
      </Button>
    </div>
  );
}

export async function getServerSideProps(context) {
  // grab review id
  const id = context.params.delete;

  // review
  const reviews = await axios.get(`http://localhost:4200/api/controller/${id}`);

  return {
    props: {
      review: reviews.data,
    },
  };
}

export default Moviecard;
