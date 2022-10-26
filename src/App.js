import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
    const isAuth = useSelector(state => state.isAuthenticated);

    return (
        <Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile/>}
        </Fragment>
    );
}

export default App;