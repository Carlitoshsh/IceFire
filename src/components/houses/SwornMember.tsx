import { IceAndFireCharacter } from "@/models/IceAndFireCharacter"

type SwornMemberProps = {
    character: IceAndFireCharacter
}

export default function SwornMember({ character }: SwornMemberProps) {
    return <>
        { character ? <div className={` p-2 ${character.died ? 'text-gray-500 bg-gray-100' : 'border-amber-100 bg-amber-100'}`}>
            <p><strong>{character.name}</strong></p>
            {character.died ? <p><span className="text-2xl">&#9841;</span>{character.died}</p> : <></>}
        </div> : <>No character data!</> }
    </>
}