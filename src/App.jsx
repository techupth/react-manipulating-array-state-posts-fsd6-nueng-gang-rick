import "./App.css";
import { blog } from "./components/blogpost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      {blog.map((item)=>{
        return(<Posts 
        key={item.id}
        title={item.title}
        like={item.likes}
        content={item.content} />)
      })}
    </div>
  );
}

export default App;
