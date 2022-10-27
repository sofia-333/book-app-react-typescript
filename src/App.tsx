import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import BooksView from "./components/books/BooksView";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BooksView/>}/>
            </Routes>
        </Router>
    );
}

export default App;
