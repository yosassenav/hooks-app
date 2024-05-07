import { fireEvent, render, screen } from "@testing-library/react"
import { MultipeCustomHooks } from "../../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../src/hooks/useFetch"
import "@testing-library/jest-dom";
import { useCounter } from "../../../src/hooks/useCounter";

jest.mock("../../../src/hooks/useFetch");
jest.mock("../../../src/hooks/useCounter");


describe('Pruebas en MultipleCustomHooks', () => {

    const mockUseCounter = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockUseCounter
    })

    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test('debe mostrar el componente por defecto', () => {
        // Mock the useFetch hook return value
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipeCustomHooks />);
        
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
        expect(screen.getByText('Informacion de Pokemon')).toBeInTheDocument();

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton).toBeDisabled(); // Use toBeDisabled() instead of checking .disabled attribute
    });

    test('Debe mostrar info de la API',()=>{

       // Mock the useFetch hook return value
       useFetch.mockReturnValue({
        data: { name: 'metapod', order: 15, sprites: { 
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png"
        
        }},
        isLoading: false,
        hasError: null
    });

    render(<MultipeCustomHooks />);

    expect(screen.getByText('metapod')).toBeInTheDocument();
    })

    test('debe llamar la funcion de incrementar',()=>{
         // Mock the useFetch hook return value
         useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

       

        render(<MultipeCustomHooks />);
        
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
        expect(screen.getByText('Informacion de Pokemon')).toBeInTheDocument();

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);

        expect(mockUseCounter).toHaveBeenCalledTimes(1);

    })

})