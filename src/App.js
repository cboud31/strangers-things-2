import './App.css';

import { fetchPosts } from './API/index';

function App() {
  fetchPosts();

  return (
    <div className="App">
      <h1>Strangers' Things 2</h1>
    </div>
  );
}

export default App;
