import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { data } from './data';
import Checkout from './pages/checkout-page';
import Main from './pages/main-page';
import './styles/style.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<Checkout data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
