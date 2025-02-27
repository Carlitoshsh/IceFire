import { UseApiProps } from "@/models/UseApiProps";
import { useState, useEffect } from "react";
import { UseApiResponse } from "../models/UseApiResponse";

export function useApi<T>({ fn }: UseApiProps<T>): UseApiResponse<T> {
    const [data, setData] = useState<T>();
    useEffect(() => {
        async function getData() {
            const response = await fn();
            setData(response);
        }
        getData();
    }, [fn]);
    return { data };
}