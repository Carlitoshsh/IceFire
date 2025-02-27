'use client';

import api from "@/api/oficeandfire";
import { IceAndFireHouse } from "@/models/IceAndFireHouse";
import HouseCard from "../../components/houses/House";
import { useApi } from "../../hooks/useApi";

export default function Houses() {
    const { data: houses } = useApi<IceAndFireHouse[]>({ fn: api.getHouses });
    return <>
        <h2>Houses</h2>
        <div className="grid grid-cols-2">
            {houses ? houses.map((house, i) =>
                <HouseCard house={house} key={`house` + i} />
            ) : <>No houses found!</>}
        </div>
    </>
}