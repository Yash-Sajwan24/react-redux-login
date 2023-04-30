import SignIn from "./components/SignIn";
import HomePage from'./components/HomePage';
import { Fragment } from "react";
import { useSelector } from "react-redux";

const App = () => {

    const auth  = useSelector(state => state.auth.isAuthenticated);
    return (
        <Fragment >
          {!auth &&   <SignIn />}
        {auth && <HomePage />}
        </Fragment>

    )
}

export default App;