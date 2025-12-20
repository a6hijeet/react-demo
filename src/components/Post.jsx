import Card from "./Card";

function Post() {
  const post1 = "Post Title 1";
  const post2 = "Post Title 2";
  const post3 = "Post Title 3";
  const post4 = "Post Title 4";

  return ( 
   <>
   <div className="posts-wrapper">
       
       <Card/>
       <Card/>
       <Card/>
     </div>
   </>
   
  )
}

export default Post