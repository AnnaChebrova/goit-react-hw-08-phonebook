import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import styles from './components/phonebook.module.css'
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { routes } from "./routes";
// import {Home} 
import { Registration } from './login/registration';
import { Login } from './login/login';
import { ContactsView } from './Views/ContactsView';
import { AppBar } from './components/AppBar';






// const Contacts = lazy(() => import('./components/HomePage.js'));
// const MoviesPage = lazy(() => import('./components/MoviesPage.js'));

  function App() {
    // usePageViews();

        return (

        <div className={styles.container}>
              <AppBar />


<Suspense fallback={<h1>Loading.....</h1>}>

<Switch>
          {/* <Route path={routes.home} exact component={Home}/> */}
          <Route path={routes.register} exact component={Registration}/>
          <Route path={routes.login} exact component={Login}/>
          <Route path={routes.contacts} exact component={ContactsView}/>

        
        </Switch>
      </Suspense>


         
        </div>
      )
        }
  export default App;
