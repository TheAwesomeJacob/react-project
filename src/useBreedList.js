import { useState, useEffect } from "react";

// CUSTOM HOOK

const localCache = {}; // use for not calling API again

export default function useBreedList(animal) {
    const [ breedList, setBreedList ] = useState([]);
    const [ status, setStatus ] = useState('unloaded'); // for checking the state of fetching API

    useEffect(() => {
        if (!animal){
            setBreedList([]);
        } else if (localCache[animal]){
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus('loading');
            
            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus('loaded');
        }
    }, [animal]);

    return [ breedList, status ]; // things we give from this custom hook
}