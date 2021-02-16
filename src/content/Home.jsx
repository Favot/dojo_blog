import { useState } from "react";
import useFetch from "../useFetch";

import BlogList from "./BlogsList";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // fetch data with useEffect a the first loading

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
