
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import LogIn from "./LogIn";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Register from "./Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>E-Commerce Project</h1>
    
      <Routes>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/update" element={<UpdateProduct />}/>
          
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
