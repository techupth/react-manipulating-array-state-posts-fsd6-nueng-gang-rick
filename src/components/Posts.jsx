import { useState } from "react";
import Data from "./DataPost";

function Posts() {
  const [posts, setPosts] = useState(Data);

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleDislike = (index) => {
    const newPosts = [...posts];
    if (newPosts[index].likes > 0) {
      newPosts[index].likes -= 1;
    }
    setPosts(newPosts);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post, index) => {
          return (
            <div className="post-item" key={post.id}>
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">
                {post.content}
              </p>
              <div className="post-actions">
                <button className="like-button" onClick={() => handleLike(index)}>Like</button>
                <button className="dislike-button" onClick={() => handleDislike(index)}>Dislike</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
