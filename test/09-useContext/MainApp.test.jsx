import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom";
import { Login } from "../../src/09-useContext/Login";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <MainApp/>',()=>{
    test('debe mostrar el <HomePage/>',()=>{
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        // screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    })

    test('debe mostrar el <Login/>',()=>{
        render(
            <MemoryRouter initialEntries={["/login"]}>  
                <UserContext.Provider value={{user: null}}>
                    <Login/>
                </UserContext.Provider>             
            </MemoryRouter>
        );

        // screen.debug();
        expect(screen.getByText('Login')).toBeTruthy();
    })
})