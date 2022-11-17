import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from'./components/NavBar';
import About from './components/About';
import Services from'./components/Services';
import Mywork from './components/Mywork';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
// import Routess from './components/Routess';

function App() {
  return (
    <>
  {/* <Routess /> */}
  <NavBar/>
  <Home />
  <About />
  <Services />
  <Mywork />
  <ContactForm />
  <Footer />
  

    </>
  );
}

export default App;
