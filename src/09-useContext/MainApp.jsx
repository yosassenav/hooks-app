import {Routes, Route, Navigate} from "react-router-dom"
import { HomePage } from "./HomePage"
import { Login } from "./Login"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>

        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>

            <Route path="/*" element={<Navigate to="/about"/>}></Route>

        </Routes>
    </UserProvider>
  )
}