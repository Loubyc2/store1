import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
//import Header from './components/header/Header';
//import Home from './components/home/Home';
import Store from "./store1/Store";

function App() {
    return (
        <Router>
            <Store />
            {/* <div>
                <Header />
                <Switch>
                    <Route>
                        <Home />
                    </Route>
                </Switch>
            </div> */}
        </Router>

    );
}

export default App;