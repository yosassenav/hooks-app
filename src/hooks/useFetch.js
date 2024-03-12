import { useEffect, useState } from "react"

const localCache = {};

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

            if(localCache[url]){
                console.log('Usando cache')
                setState({
                    data: localCache[url],
                    isLoading: false,
                    hasError: false,
                    error: null,
                })
            }

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
            

            // console.log(data);
            localCache[url] =  data;
        }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}