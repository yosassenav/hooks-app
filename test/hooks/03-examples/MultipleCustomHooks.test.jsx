import { render, screen } from "@testing-library/react"
import { MultipeCustomHooks } from "../../../src/03-examples/MultipleCustomHooks"

describe('Pruebas en MultipleCustomHooks', () => {
    test('debe mostrar el componente por defecto',()=>{
        render( <MultipeCustomHooks/> );
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Informacion de Pokemon'))

        const nextButton = expect(screen.getByRole('button',{name: 'Siguiente'}));

        expect(nextButton.disabled).toBeTruthy()

        screen.debug()
    }) 

})