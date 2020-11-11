import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Stats from './Components/Stats/Stats'
import Faq from './Components/Faq/Faq'
import About from './Components/About/About'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calc/stats' component={Stats} />
        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
      </Switch>
    </Router>
  );
}
