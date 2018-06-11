import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContentView from './views/ContentView';
import LoginView from './views/LoginView';
import Header from './components/Header';

class App extends Component {
    render() {
        const supportsHistory = 'pushState' in window.history;
        return (
            <BrowserRouter
                forceRefresh={!supportsHistory}
            >
                <div className="App">
                    <Header />
                    <Route exact path="/content" component={ContentView} />
                    <Route exact path="/login" component={LoginView} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
