import './App.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Listing from './pages/Listing';
import Stats from './pages/Stats';

function App() {
  const match = useRouteMatch();

  return (
    <div className="App">
      <Header />

      {/* Set up routing */}
      <Switch>
          <Route exact path={`${match.url}view/:id`}>
            {/* View a certain pokemon */}
            <Stats />
          </Route>
          <Route exact path={match.url}>
            {/* Home page grid */}
            <Listing />
          </Route>
        </Switch>
        
      <Footer />
    </div>
  );
}

export default App;
