import Card from "./Card";

function Post() {

  const postDate = new Date().toLocaleString().split(',')[0];
  const posts = [
    {key: 11, name: "Post Title 1", desc: "Post 1 description", visible:true, postDate:postDate, views: 210},
    {key: 12, name: "Post Title 2", desc: "Post 2 description", visible:true, postDate:postDate, views: 120},
    {key: 13, name: "Post Title 3", desc: "Post 3 description", visible:true, postDate:postDate, views: 230},
    {key: 14, name: "Post Title 4", desc: "Post 4 description", visible:false, postDate:postDate, views: 220},
    {key: 15, name: "Post Title 5", desc: "Post 5 description", visible:false, postDate:postDate, views: 420},
    {key: 16, name: "Post Title 6", desc: "Post 6 description", visible:false, postDate:postDate, views: 520}
  ];

  return ( 
       <Card items={posts} category="post"/>
   
  )
}

export default Post