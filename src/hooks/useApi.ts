import { useEffect, useState } from "react";
type UseApiProps<T> = {
    fn: (page: number) => Promise<T>;
};

export function useApiPaginated<T>({ fn }: UseApiProps<T>) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const updatePage = (increaseFactor: number) => {
        setPage(prev => prev + increaseFactor)
    }

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const response = await fn(page)
            setData(response)
            setLoading(false);
        }
        getData()
    }, [page, fn])
    return { data, page, loading, updatePage }
}