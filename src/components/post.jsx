import React from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string"; // 6.10
const Posts = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location.search);
  console.log(queryString.parse(location.search)); // 6.10
  return (
    <div>
      <h1>Posts</h1>
      Year: , Month:
    </div>
  );
};

export default Posts;
