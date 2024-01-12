import { useState , useEffect} from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";
import Header from './components/Header'
import SiteRoutes from './SiteRoutes'
import ProductCard from './products/ProductCard'
import Footer from './pages/Footer';

function App() {
 
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  }, []);
  const handleLogin = () => {
    const user = { id: 1, name: "admin" };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
 
  return (
    <>
     <Header handleLogOut={handleLogOut} user={user}/>
     <SiteRoutes handleLogin={handleLogin}/>
     <Footer/>
     
    </>
  )
}

export default App
