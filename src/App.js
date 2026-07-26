import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Thành Kka
        <MyComponent></MyComponent>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world with React.js (Hoi Dan IT)
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
