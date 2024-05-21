import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/how-it-works" component={HowItWorks} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/faq" component={FAQ} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
