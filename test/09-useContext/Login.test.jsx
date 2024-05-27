import { render, screen, fireEvent } from "@testing-library/react"
import { Login } from "../../src/09-useContext/Login"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Puebas en <Login/>', () => { 

    const user = {
        id:'123',
        name:'John Doe',
        email:'johndoe@example.com'
    }

    const mockedUser = jest.fn(); 

    test('debe de mostrar el componente sin el usuario',()=>{
        render( 
            <UserContext.Provider value={{user: null, setUser: mockedUser}}>
                <Login/>
            </UserContext.Provider>
         );
         const preTag = screen.getByLabelText('data');
         expect(preTag.textContent).toBe('null');

    })

    test('debe llamar el setUser cuando se hace click en el boton',()=>{
        render(
            <UserContext.Provider value={{user: user, setUser: mockedUser}}>
                <Login/>
            </UserContext.Provider>
        )
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockedUser).toHaveBeenCalledWith(user);
    })
 })