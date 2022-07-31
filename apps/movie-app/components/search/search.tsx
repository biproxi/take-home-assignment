import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import styles from './search.module.css';
import Router from 'next/router';

export function Search() {
  const [searchKey, setSearchKey] = useState('');

  const fetchMovies = async (searchKey: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
    const check = searchKey ? 'search' : 'disover/movie';
    const response = await axios.get(
      `https://api.themoviedb.org/3/${check}/movie?api_key=${API_KEY}&query=${searchKey}`
    );
    Router.push(`/search/${searchKey}`);
  };

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  return (
    <div className={styles['search-container']}>
      <Form onSubmit={searchMovies}>
        <Form.Input
          placeholder="Movie Name"
          name="Movie"
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default Search;
