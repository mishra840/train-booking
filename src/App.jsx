import { BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation
 } from "react-router-dom";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TrainCarousel from "./components/TrainCarousel"
import ContactPage from "./pages/ContactPage";

const RouteContentManager = () => {
   const location = useLocation();
   const navigate = useNavigate();

   return(
    <div>
      {location.pathname === "/" && (
       <>
       <Home/>
       <TrainCarousel/>
       </>
      )}
      <Routes>
        <Route path="/" element="null"/>
        {/* <Route path="/booking" element={<BookingPage/>}/> */}
        <Route path="/contact" element={<ContactPage/>}/>
        {/* <Route 
        path="/login"
        element={
          <LoginModal
          isOpen={true}
          onClose={()=> window.history.back()}
          onLogin={()=> {}}
        switchToRegister={()=> {}}
        /> 
        }
        /> */}
      </Routes>
    </div>
   )
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <NavBar />
        <RouteContentManager />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
