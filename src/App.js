import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Stats from './Components/Tools/Stats/Stats'
import Adaptation from './Components/Tools/Adaptation/Adaptation'
import Reforge from './Components/Tools/Reforge/Reforge'
import IgnoreDefense from './Components/Tools/IgnoreDefense/IgnoreDefense'
import Faq from './Components/Faq/Faq'
import About from './Components/About/About'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calc/stats' component={Stats} />
        <Route path='/calc/adaptation' component={Adaptation} />
        <Route path='/calc/reforge' component={Reforge} />
        <Route path='/calc/ignore-defense' component={IgnoreDefense} />
        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
      </Switch>
    </Router>
  )
}
