import React, { useEffect, useState } from "react";
import API from '../API'
import { isStatePersisted } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    tot_pages: 0,
    tot_results: []
}

export const useGetHome = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    const fetchMovies = async(page, searchTerm = '') => {

        try{
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(page,searchTerm);

            setState( prev => ({
                ...movies,
                results: 
                page >1 ? [...prev.results, ...movies.results]: [...movies.results]



            }));
        }
        catch(error){
            setError(true);
        }
        setLoading(false);
    };
    // empty array'[]' to just run once 
    // for initial and search
    useEffect(()=>{
        if(!searchTerm){
            const sessionState = isStatePersisted('home');
            if(sessionState){
                console.log('Fetch from session storage');
                setState(sessionState);
                return;
            }
        }
        console.log('fetch from API');
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    //Load more
    useEffect(()=>{
        if(!isLoadingMore)  return

        fetchMovies(state.page +1, searchTerm); 
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]) 

    //Write to Sessionstorage

    useEffect(()=>{
        if(!searchTerm) sessionStorage.setItem('home', JSON.stringify(state));

    },[searchTerm, state])

    return {state:state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore}
}