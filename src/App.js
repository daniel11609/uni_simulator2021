import './App.css';
import Navbar from "./components/navigation/Navbar"
function App() {
  return (
    <div className="App">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
              crossOrigin="anonymous"/>
      <Navbar/>
      <h1>Hier könnte Ihre Werbung stehen!</h1>
    </div>
  );
}

export default App;
