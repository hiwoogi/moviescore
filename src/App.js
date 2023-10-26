import logo from './logo.svg';
import './App.css';

function Food({fav}) {
  return <h3>I love {fav}</h3>;
}


function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Food fav="kimchi"/>
    </div>
   
  );
}

export default App;
