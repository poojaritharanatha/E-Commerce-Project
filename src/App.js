import "./App.css"
import Header from "./common/header/Header"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Pages from "./pages/Pages"
import Data from "./components/FlashDeals/Data"
import Footer from "./components/Footer/Footer"


function App() {
  const { productItems } = Data
    return(
        <>
        <Router>
        <Header />
        <Switch>
        <Route path="/" exact>
          <Pages productItems={ productItems } />
        </Route>
      </Switch>
      <Footer />
    </Router>
       </>
    )
}

export default App
