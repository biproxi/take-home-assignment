import React, { useEffect, useRef } from "react";
import Link from "next/link";
import axios from 'axios';

interface Query{
  id: number,
  title: string,
  status: string
}

interface Props{
  query: Query
}

const EditForm: React.FC<Props> = ({ query }) => {

  const inputRef = useRef({});
  useEffect(() => {
    inputRef.current['title'].focus()
    inputRef.current['title'].value = query.title
    inputRef.current['status'].value = query.status
  }, []);

  const handleEditForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updates = {
      title: inputRef.current['title'].value,
      status: inputRef.current['status'].value
    };

    try{
      const editPost = await axios.put(`/api/editPost?id=${query.id}`, {updates})
      const response = editPost.data;
      console.log(response)
    } catch(err) {
      console.error(err)
    }
  };

   return(
    <div>
      <Link href = "/">
        <button>Go back</button>
      </Link>
      <form onSubmit = {handleEditForm}>
          <input ref={el => inputRef.current['title'] = el} type = "text" placeholder = {query.title} />
          <select name = "status" ref={el => inputRef.current['status'] = el}>
            <option value={"Active"}>Active</option>
            <option value={"Inactive"}>Inactive</option>
            <option value={"Archived"}>Archived</option>
          </select>
          <button type = "submit">Submit</button>
      </form>
    </div>
  )
};

export default EditForm;