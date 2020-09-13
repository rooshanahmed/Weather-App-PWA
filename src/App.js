import React from 'react';
import { fetchWeather } from './API/fetchWeather';
import './App.css';

const App = () => {
    return (
        <div className="main-container">
            <input 
                type="text"
                className="search"
                placeholder="Search..."
                value={}
                onChange={}
            />
        </div>
    )
}
export default App