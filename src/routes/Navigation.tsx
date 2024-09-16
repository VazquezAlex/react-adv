import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              { 
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to} activeClassName="nav-active" exact>{ name }</NavLink>
                  </li>
                )) 
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            { 
              routes.map((route, index) => (
                <Route path={route.path} key={index} component={route.Component} />
              )) 
            }
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}