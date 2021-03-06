import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Details } from './pages';

function App() {
  return (
<Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details/:title" element={<Details />} />
        </Routes>
    </Router>    
  );
}

export default App;
