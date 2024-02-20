import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from '../src/components/HeaderComponent';
import Footer from '../src/components/FooterComponent';
import AddEmployeeComponent from '../src/components/AddEmployeeComponent';
import ListemployeeComponent from './components/ListemployeeComponent';

function App() {
  return (
    <div>
   <BrowserRouter>
    <Header Component/>
    <div className= "container">
          <Routes>
              <Route exact path = "/" component = {ListemployeeComponent}></Route>
              <Route path = "/employees" component = {ListemployeeComponent}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
            </Routes>
        </div>
    <Footer Component/>
   </BrowserRouter>
   </div>
  );
}

export default App;