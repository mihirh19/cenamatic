import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Moviepage from './pages/Moviepage';
import axios from 'axios';
import Playspage from './pages/Playspage';


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = "3fc1cbd793653959a0de6992bed8c849";

function App() {
    return ( 
    <>
        <Routes >
        <Route path = '/' element = { < Homepage / > }/> 
        <Route path = '/movie/:id'
        element = { < Moviepage / > }
        /> <
        Route path = '/plays'
        element = { < Playspage / > }
        />
        
        {/* <Route path='/sign' element = {<login/>}/> */}
        <Route path='/about' element = {<about/>}/>
        


        </Routes> 
        </>
    );
}

export default App;