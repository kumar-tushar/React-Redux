import {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  return (
      <Fragment>
        <Header/>
        <Auth/>
      </Fragment>
  );
}

export default App;