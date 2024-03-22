import Navbar from "./components/Navbar"

import Footer from "./components/Footer"
import Phone from "./components/iPhone/Phone"
import { Route, Routes } from "react-router-dom"
import IPad from "./components/iPad/IPad"

const App = () => {

  return (
    <main className=" bg-black scroll-smooth" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Phone/>} />
        <Route path="/iPhone" element={<Phone/>} />
        <Route path="/iPad" element={<IPad />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
