import React, { useEffect } from "react";
import { useState } from "react"


export default function App() {
  const [value, setValue] = useState(1)

  return (
    <div className="container">
      <h1>Hooks</h1>
      <button className="btn btn-primary" onClick={() => setValue(value + 1)}>Next</button>
      <button className="btn btn-warning" onClick={() => setValue(value - 1)}>Prev</button>
      <PostDetails id={value} />
    </div>

  )
}



const PostDetails = ({ id }) => {

  // console.log(id)
  const title = usePostTitle(id)

  return (
    <div>
      {id} - {title}
    </div>
  )
}


const usePostTitle = (id) => {
  console.log(id)
  const [title, setTitle] = useState('');

  useEffect(() => {
    let cancelled = false

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.title);
        !cancelled && setTitle(json.title)
      })

    return () => { console.log("CANCELED!"); cancelled = true }
  }, [id])

  return title
}