import { Switch } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './components/phonebook.module.css';
import { routes } from './routes';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import { ContactsView } from './Views/ContactsView';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublikRoute';
import authOperations from './redux/auth/auth-operations';

// const HomeView = lazy(() => import('./Views/HomeView'));
// const RegisterView = lazy(() => import('./Views/RegisterView'));
// const LoginView = lazy(() => import('./Views/LoginView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path={routes.home} component={HomeView} />

          <PublicRoute
            exact
            path={routes.register}
            component={RegisterView}
            restricted
          />

          <PublicRoute
            exact
            path={routes.login}
            component={LoginView}
            redirectTo={routes.contacts}
            restricted
          />

          <PrivateRoute
            path={routes.contacts}
            component={ContactsView}
            redirectTo={routes.login}
          />
        </Suspense>
      </Switch>
    </div>
  );
}
export default App;
