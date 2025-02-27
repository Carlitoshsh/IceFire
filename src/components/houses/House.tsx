import Quote from "@/components/shared/Quote";
import { IceAndFireHouse } from "@/models/IceAndFireHouse";
import { SwornMembers } from "./SwornMembers";

type HouseCardProps = {
    house: IceAndFireHouse
}

export default function HouseCard({ house }: HouseCardProps) {

    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{house.name}</h2>
            <div className="space-y-2">
                {house.words && <Quote quote={house.words} />}
                {house.region && <p>🧭 {house.region}</p>}
                {house.coatOfArms && <p>🤺: {house.coatOfArms}</p>}
                {house.currentLord && <p>Current Lord: {house.currentLord}</p>}
                {house.overlord && <p>Overlord: {house.overlord}</p>}
            </div>
            <div className="mt-4">
                {house.titles.length > 0 && (
                    <div>
                        <h3 className="font-semibold">Titles:</h3>
                        <ul className="list-disc list-inside">
                            {house.titles.map((title, index) => (
                                <li key={`house-${index}`}>{title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {house.swornMembers.length > 0
                ? <SwornMembers urls={house.swornMembers} />
                : <div className="bg-amber-100 p-2"><span>This house has no sworn members</span></div>}
        </div>
    );
};