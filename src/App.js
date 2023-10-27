import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async() => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
  }

  componentDidMount(){
    this.getMovies()
  }

  componentDidUpdate(){
    console.log('I"m just updated')
  }

  componentWillUnmount(){
      
  }

  render() {
    const {isLoading} = this.state

    console.log('render')
    return (
      <div>
        {isLoading ? 'Loading': 'we are ready'}

      </div>
    );
  }
}

export default App;
