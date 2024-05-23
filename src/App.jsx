import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';


function App() {

  return (<>
    <Navbar></Navbar>
    {/* <ImageWithBorder></ImageWithBorder> */}
    <Outlet></Outlet>
    </>
  )
}
export default App;
