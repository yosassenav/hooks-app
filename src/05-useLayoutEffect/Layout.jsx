import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "../03-examples/LoadingMessag";
import { PokemonCard } from "../03-examples/PokemonCad";

export const Layout = ()=>{

    const {counter, decrement, increment} = useCounter(1);
    const {data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/1${counter}`);

    // console.log("data: ",data);

    return (
    <>
        <h1>Informacion de Pokemon</h1>
        <hr/>
        {isLoading
         ? <LoadingMessage/>
         : (
         <PokemonCard
         id={counter}
         name={data.name}
         sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
        ]}
         />
         )
        }

        {/* <pre>{JSON.stringify(data, null , 2)}</pre> */}
        <h2>{data?.name}</h2>
        <button 
        className="btn btn-primary mt-2"
        onClick={() => counter > 1 ? decrement() : null }
        >
        Anterior
        </button>
        <button 
        className="btn btn-primary mt-2"
        onClick={() => increment()}
        >
        Siguiente
        </button>
    </>
    )
}