import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContentView from './views/ContentView';
import LoginView from './views/LoginView';
import Header from './components/Header';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { loadState, saveState } from './utils/storeUtils';

const persistentState = loadState();

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && persistentState,
    applyMiddleware(
        thunkMiddleware
    )
);

store.subscribe(() => {
  saveState(store.getState());
});

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
                        <Route exact path="/login" component={LoginView} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
