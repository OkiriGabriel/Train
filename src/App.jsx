import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLoader from './components/helpers/MainLoader'

//Context-Api states

// components: lazyload pages
const Home = React.lazy(() => import('./components/pages/Home'));

const App = () => {
  
  return(
    <Router>

      {/* <UserState> */}

        <Suspense fallback={MainLoader()}>
            <Switch>
              <Route exact path="/" component={Home} />

              {/* <Route exact path="*" component={Home} /> */}
            </Switch>
        </Suspense>
        
        {/* </UserState> */}

    </Router>
  )
}

export default App;