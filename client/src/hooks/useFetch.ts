import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data);
            setIsPending(false);
            setError(false);
        }).catch(e => {
            setError(e);
            setIsPending(false);
        })
    }, [url])

    return { data, setData, isPending, error }
};

export default useFetch;