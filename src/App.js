import './App.css';
import Navbar from './Components/Navbar'
import Bankdetails from './Components/Bankdetails';
import Paymentvendor from './Components/Paymentvendor';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div>
      <Routes> 

      <Route path='/' element={ <Navbar/>} />
      <Route path='/Bankdetails' element={  <Bankdetails/> } />
     <Route path='/paymentvendor' element={  <Paymentvendor/> } />

       </Routes>
    </div>
  );
}

export default App;
