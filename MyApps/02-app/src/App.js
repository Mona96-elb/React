import { BrowserRouter} from 'react-router-dom';
import {AppRouter} from './routes/approuter';

import './App.css';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Home} from './pages/home'
import {About} from './pages/about'

function App() {
  return (
  <>
  <BrowserRouter>
    <Header/>
    <AppRouter/>  
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
