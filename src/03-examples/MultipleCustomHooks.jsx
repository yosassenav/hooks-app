import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipeCustomHooks = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    console.log("data: ",data)

    return (
        <>
            <h1>Informacion de Pokemon</h1>
            <hr />
            {isLoading ? (
                <LoadingMessage />
            ) : hasError ? (
                <div>Error: Failed to fetch data</div>
            ) : (
                <PokemonCard
                    id={counter}
                    name={data?.name}
                    sprites={[
                        data?.sprites.front_default,
                        data?.sprites.front_shiny,
                        data?.sprites.back_default,
                        data?.sprites.back_shiny
                    ]}
                />
            )}

            <h2>{data?.name}</h2>
            <button
                className="btn btn-primary mt-2"
                onClick={() => counter > 1 && decrement()}
            >
                Anterior
            </button>
            <button
                className="btn btn-primary mt-2"
                onClick={increment}
                disabled={isLoading}
            >
                Siguiente
            </button>
        </>
    );
};
