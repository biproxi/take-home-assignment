import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import { updateFormTitle, updateFormStatus } from "../store/hooks";
import axios from "axios";

interface Query{
  id: number,
  title: any,
  status: any
}

interface Props{
  query: Query
}

const EditForm: React.FC<Props> = (props: any) => {

  const router = useRouter();

  useEffect(() => {
    let options = document.querySelectorAll("option");

    if (props.query.status === "Active") options[0].setAttribute("selected", "")
    if (props.query.status === "Inactive") options[1].setAttribute("selected", "")
    if (props.query.status === "Archived") options[2].setAttribute("selected", "")
  }, []);

  const handleEditForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try{
      event.preventDefault();
      const updates = {
        title: props.todos.title,
        status: props.todos.status
      };
      await axios.put(`/api/editPost?id=${props.query.id}`, {updates})

      router.push({
        pathname: '/'
      })
    } catch(err) {
      console.error(err)
    }
  };

   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     props.updateFormTitle(event.target.value)
   };

   const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
     props.updateFormStatus(event.target.value)
   };

   return(
    <div>
      <Link href = "/" passHref>
        <button>Go back</button>
      </Link>
      <form onSubmit = {handleEditForm}>
          <input
            type = "text"
            placeholder = {props.query.title}
            onChange = {handleTitleChange}
          />
          <select name = "status" onChange = {handleStatusChange}>
            <option value={"Active"}>Active</option>
            <option value={"Inactive"}>Inactive</option>
            <option value={"Archived"}>Archived</option>
          </select>
          <button type = "submit">Submit</button>
      </form>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return { todos: state.todos}
};

export default connect (mapStateToProps, { updateFormTitle, updateFormStatus})(EditForm);