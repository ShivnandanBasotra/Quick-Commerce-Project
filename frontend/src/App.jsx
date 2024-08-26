import { AuthPage } from "./pages/AuthPage"
import  BuyersPage  from "./pages/BuyersPage"
import  Header  from "./components/Header.jsx"
import CartPage from "./pages/CartPage.jsx"
import Footer from "./components/Footer.jsx"

function App() {
 
   return (
  <div className="bg-slate-100">
   <Header/>
   {/* <BuyersPage/> */}
   <CartPage/>
   <Footer/>
  </div>
  )
}

export default App
