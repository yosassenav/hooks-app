import { useEffect, useState } from "react"

export const useFetch  = (url) => {
    const  [state, setState] = useState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });

        useEffect(()=>{
            getFetch();

        } , [url]);

        const setIsLoadingState = () => {
            setState({
                data: null,
                isLoading: true,
                hasError: false,
                error: null,
            })
        }

        const getFetch = async () => {

            setIsLoadingState();
            const response = await fetch(url);

            await new Promise(resolve=>setTimeout(resolve, 1500)); //simulamos

            if(!response.ok) {
                setState({
                    data: null,
                    isLoading: false,
                    hasError:true,
                    error : {
                        code:  response.status,
                        message: response.statusText,
                    }
                });
                return; // the response returned an error so the code won't continue to execute
            }

            const data = await response.json();
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error:null
            });
            

            console.log(data);
        }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}