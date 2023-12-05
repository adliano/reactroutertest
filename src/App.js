// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
import './App.css'
import { Home, Blog, About } from './pages'

import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter basename='/reactroutertest'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}
// reactroutertest
export default App
