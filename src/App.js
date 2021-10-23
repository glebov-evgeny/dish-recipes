import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";

import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
// import { Contacts } from "./pages/Contacts";
// import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
    <Router basename='/dish-recipes'>
      <Header />
      <main className="container content">        
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route>
            {/* <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} /> */}
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>        
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;
