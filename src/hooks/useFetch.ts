import useSWR from "swr";

export default function useFetch(url : any, headers: any = null) {
    const fetcher = (...args: any) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(url, fetcher);
    
    return { data, error};
}




