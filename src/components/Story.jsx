import Card from "./Card";

function Story() {

  const stories = [
    {key: 1, name: "story 1", desc: "Story desc", views: 10, visible:false},
    {key: 2, name: "story 2", desc: "Story desc", views: 20, visible:true},
    {key: 3, name: "story 3", desc: "Story desc", views: 30, visible:true},
    {key: 4, name: "story 4", desc: "Story desc", views: 60, visible:true},
    {key: 5, name: "story 5", desc: "Story desc", views: 40, visible:true}
  ];

  const storyItems = stories.map(story => 
    <Card key={story.key} name={story.name} desc={story.desc} views={story.views} visible={story.visible}/>
   
  )

  return (<div className="posts-wrapper">{storyItems}</div>)

}

export default Story