import { useState } from 'react';
import './App.css';

 


function MediaCard({title,userImage,userPost,body}){
  return(
    <div className="card">
      <img src={userImage} width='50px'/>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={userPost} width='500px'/>
    </div>
  )
}

function App() {
  
  const [isLit,setLit] = useState(true)
  const [counter,setCounter] = useState(0)
  
  return (
    <div  className={isLit?"bright App":"dark App"}>
    <div>
      <button onClick={(prevValue)=>setCounter(counter-1)}>-</button>
      <span>  {counter}  </span>
      <button onClick={(prevValue)=>setCounter(counter+1)}>+</button>

    </div>
    <div >
      <h2 >the room is {isLit?"bright":"dark"}</h2>
      <button onClick={(prevState)=>{setLit(!isLit)}}>Change</button>
    </div>
            <h1>Posts</h1>
     <MediaCard title="Hassan" userImage='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png' userPost="https://wallpaperaccess.com/full/671267.jpg" body="Playing Dota 2" />
     <MediaCard title="Hassan" userImage='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png' userPost="https://wallpaperaccess.com/full/671267.jpg" body="Playing Dota 2" />
     <MediaCard title="Hassan" userImage='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png' userPost="https://wallpaperaccess.com/full/671267.jpg" body="Playing Dota 2" />
    </div>
  );
}

export default App;
