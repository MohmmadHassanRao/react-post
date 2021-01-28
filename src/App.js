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

  
  return (
    <div className="App">
            <h1>Posts</h1>
     <MediaCard title="Hassan" userImage='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png' userPost="https://wallpaperaccess.com/full/671267.jpg" body="Playing Dota 2" />
     <MediaCard title="Hassan" userImage='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png' userPost="https://wallpaperaccess.com/full/671267.jpg" body="Playing Dota 2" />
     <MediaCard title="Hassan" userImage='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png' userPost="https://wallpaperaccess.com/full/671267.jpg" body="Playing Dota 2" />
    </div>
  );
}

export default App;
