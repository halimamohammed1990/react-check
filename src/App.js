import pic from './pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">الرعيض</h1>
          <br />
    </div>
          <img src="/mis.jpg"  />
          <br />
          <img src={pic} alt="pic" />
          <br />
          <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;