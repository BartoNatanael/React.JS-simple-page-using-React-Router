import React, {Component} from 'react';
import '../styles/app.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
    state={

    }
    render(){
        return(
            <Router>
                <div className="App">
                    <header>
                        {<Header/>}
                    </header>
                    <main>
                        <aside>
                            {<Navigation/>}
                        </aside>
                        <section className='Blog'>
                            <Page/>
                        </section>
                    </main>
                    <footer>
                        {<Footer/>}
                    </footer>
                </div>
            </Router>
        )
    }
}

export default App;