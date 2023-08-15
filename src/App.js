import './stylesheets/App.css';
import Header from "./componets/Header.js"
import "./stylesheets/colors.css"
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./componets/Home";
import Resources from "./componets/Resources";
import About from "./componets/About";
import Board from './componets/Board'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home/>}> </Route>
                        <Route path="/resources" element={<Resources/>}> </Route>
                        <Route path="/about" element={<About/>}> </Route>
                        <Route path="/board" element={<Board/>}> </Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
