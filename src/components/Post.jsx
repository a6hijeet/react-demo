import Card from "./Card";

function Post() {
  const post1 = "Post Title 1";
  const post2 = "Post Title 2";
  const post3 = "Post Title 3";
  const post4 = "Post Title 4";
  const postDate = new Date().toLocaleString().split(',')[0];
  return ( 
   <>
   <div className="posts-wrapper">
       <Card name={post1} desc="Sample description" visible={true} postDate={postDate}/>
       <Card name={post2} desc="Sample description" visible={true} postDate={postDate}/>
       <Card name={post3} desc="Sample description" visible={false} postDate={postDate}/>
       <Card name={post4} desc="Sample description" visible={false} postDate={postDate}/>
       <Card />
     </div>
   </>
   
  )
}

export default Post