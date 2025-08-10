import { createContext, useEffect, useState } from "react";
import { questions } from "../questions/microsoft/microsoft";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:3000";
    // const [token, setToken] = useState("");
    // const [token, setTokenState] = useState("");
    const [token, setTokenState] = useState(() => localStorage.getItem("token") || "");
    const setToken = (newToken) => {
        setTokenState(newToken);
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }
    };

    useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    setToken(storedToken);
  }
}, []);





    function capitalizeFirstLetter(name) {
        if (!name) return "";
        return name.charAt(0).toUpperCase() + name.slice(1);
    }


    const companies = [
        'amazon',
        'google',
        'adobe',
        'meta',
        'apple',
        'microsoft',
        'netflix',
        'tesla',
        'spotify'
    ];
    const topics = [
        "math",
        "array",
        "hashtable",
        "sorting",
        "binarysearch",
        "twopointers",
        "slidingwindow",
        "kadanealgorithm",
        "stack",
        "queue",
        "greedy",
        "linkedlist",
        "trees",
        "trie",
        "backtracking",
        "bitmanipulation",
        "dynamicprogramming",
        "graph"
    ]
    const contextValue = {
        questions,
        url,
        setToken,
        token,
        companies,
        capitalizeFirstLetter,
        topics
    }

    // const [revisionQuestions,setRevisionQuestions] = useState(false);




    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
