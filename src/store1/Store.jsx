
import { Route, Switch } from 'react-router';
import Header from './header/Header';
import HomeNav from './home/HomeNav';
import Outstanding from './home/outstanding/Outstanding';


function Store() {
    return (
        <div>
            <Header />
            <HomeNav />
            <Switch>
                <Route path="/">
                    <Outstanding />
                </Route>
            </Switch>
        </div>
    )
}

export default Store
