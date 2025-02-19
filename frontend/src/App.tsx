import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Foooter"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </main>
      <ToastContainer />
    </>
  )
}

export default App
