import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import styles from './components/phonebook.module.css'
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { routes } from "./routes";
// import {Home} 
import { Registration } from './login/registration'


// const Contacts = lazy(() => import('./components/HomePage.js'));
// const MoviesPage = lazy(() => import('./components/MoviesPage.js'));

  function App() {
    // usePageViews();
 
        return (
        <div className={styles.container}>

<Suspense fallback={<h1>Loading.....</h1>}>

<Switch>
          {/* <Route path={routes.home} exact component {Home}/> */}
          <Route path={routes.register} component={Registration}/>
          {/* <Route path={routes.home} exact component {Home}/> */}

        </Switch>
      </Suspense>


          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
         <Contacts />

          <Filter />
        </div>
      )
        }
  export default App;
