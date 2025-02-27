'use client';

import HouseCard from "@/components/houses/House";
import { useApiPaginated } from "@/hooks/useApi";
import api from "@/api/oficeandfire";
import { IceAndFireHouse } from "@/models/IceAndFireHouse";
import { Paginator } from "@/components/shared/Paginator";

export default function List() {
    const paginatedProps = {
        fn: api.getHouses
    }
    const { data, page, loading, updatePage } = useApiPaginated<IceAndFireHouse[]>(paginatedProps)

    if(loading) {
        return <>Loading...</>
    }

    return <>
        <h2>Houses</h2>
        <Paginator update={updatePage} page={page} />
        <div className="grid grid-cols-2">
            {data ? data.map((house, i) =>
                <HouseCard house={house} key={`house` + i} />
            ) : <>No houses found!</>}
        </div>
    </>
}