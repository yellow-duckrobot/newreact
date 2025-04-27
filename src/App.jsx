import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('Hello, Welcome!');

  const changeGreeting = () => {
    setGreeting('Hi there! Have a great day!');
  };

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <button className="greet-button" onClick={changeGreeting}>
        Change Greeting
      </button>
    </div>
  );
}

export default App;
