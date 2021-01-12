import './App.css';
import Navbar from './components/navbar.components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/home.homepage';
import FAQ from './components/pages/FAQ/faq.pages';
import Feature from './components/pages/Features/features.pages';
import SignUp from './components/pages/SignUp/signup.pages';
import Login from './components/pages/Login/login.pages';
//import Blog from './components/pages/Blog/blog.pages';
import Dashboard from './components/pages/Dashboard/dashboard.pages';
import Footer from './components/pages/Footer/footer.footer';
import ForgotPassword from './components/pages/ForgotPassword/forgot-password.pages';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute/private-route';
import Referral from './components/pages/Referral/referral.pages';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/faq' component={FAQ}/>
        <Route path='/features' component={Feature}/>
        <Route path='/referrals' component={Referral}/>
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}
        >
        <div className='w-100' style={{maxWidth: '400px'}}>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/forgot-password' component={ForgotPassword}/>
        </div>
        </Container>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
      </Switch>
      <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
// <Route path='/dashboard' component={Dashboard}/>
//<Route path='/blog' component={Blog}/>
//switch determines which page were currently on and router which page were going to
