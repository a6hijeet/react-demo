function Post() {
  const post1 = "Post Title 1";
  const post2 = "Post Title 2";
  const post3 = "Post Title 3";
  const post4 = "Post Title 4";

  return ( 
    <ul>
      <li>{post1}</li>
      <li>{post2.toLocaleLowerCase()}</li>
      <li>{post3}</li>
      <li>{post4.toUpperCase()}</li>
    </ul>
  )
}

export default Post