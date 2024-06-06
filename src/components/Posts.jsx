import { useState } from "react";
function Posts(props) {
  let [like , likeClick] = useState(props.like)
  let likeToggle = () =>{
   likeClick(like+1)
  }
  let dislikeToggle = () =>{
    if(like > 0){
      likeClick(like-1)
    }
   }
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>{props.title}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{like}</span>
            </div>
          </div>
          <p class="post-content">
            {props.content}
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={likeToggle}>Like</button>
            <button class="dislike-button" onClick={dislikeToggle}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
