import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContentView from './views/ContentView';
import LoginView from './views/LoginView';
import Header from './components/Header';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
);

class App extends Component {
    render() {
        const supportsHistory = 'pushState' in window.history;
        return (
            <Provider store={store}>
                <BrowserRouter
                    forceRefresh={!supportsHistory}
                >
                    <div className="App">
                        <Header />
                        <Route exact path="/content" component={ContentView} />
                        <Route exact path="/" component={LoginView} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
