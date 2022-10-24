import '../App.css';
import Login from './Login'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Login />
    </div>
  //   <div className="App">
  //     <Router>
  //       <Routes>
  //           <Route exact path="/" element={
  //               <Home />
  //           }/>
  //           <Route path="/login" element={
  //               <Login />
  //           }/>
  //           </Routes>   
  //       </Router>
  //   </div>
  );
}

export default App;

// import './App.css';

// import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route path="/testing">
//             <h1>Test Route</h1>
//           </Route>
//           <Route path="/">
//             <h1>Page Count: {count}</h1>
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;