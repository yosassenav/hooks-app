import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('Pruebas en componente <HomePage/>',()=>{

    const mockedUser = {
        id: 1,
        name: 'Vanessa'
    }

    test('Debe de mostrar el componente SIN el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        )
        // screen.debug()
        const preTg = screen.getByLabelText('pre');
        expect(preTg.innerHTML).toBe('null');
    })

    test('Debe de mostrar el componente CON el usuario', () => {
        render(
            <UserContext.Provider value={{user: mockedUser}}>
                <HomePage/>
            </UserContext.Provider>
        )
        // screen.debug()
        const preTg = screen.getByLabelText('pre');
        expect(preTg.innerHTML).toContain(mockedUser.name);
        expect(preTg.innerHTML).toContain(`${mockedUser.id}`);
    })
})