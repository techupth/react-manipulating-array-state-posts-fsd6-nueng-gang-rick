import "./App.css";
import {Data} from "./components/Data"
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      {Data.map((item)=>{
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
