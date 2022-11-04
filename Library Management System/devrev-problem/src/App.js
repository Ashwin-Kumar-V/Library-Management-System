import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/CarouselComponent';
import Library from './Components/Library';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App(){
    return(
        <React.Fragment>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Carousel />}></Route>
                        <Route exact path="/Library" element={<Library />}></Route>
                    </Routes>
                </div>
            </Router>
        </React.Fragment>
    )

}
export default App;