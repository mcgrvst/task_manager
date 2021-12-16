import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {CreateForm} from './pages/CreateTask'
import { Navbar } from './components/Navbar';
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert/>
          <Routes>
            <Route path={'/'} exact element={<Home/>}/>
            <Route path={'/create'} element={<CreateForm/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
