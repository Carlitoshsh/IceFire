import { IceAndFireCharacter } from "@/models/IceAndFireCharacter"

type SwornMemberProps = {
    character: IceAndFireCharacter
}

export default function SwornMember({ character }: SwornMemberProps) {
    return <>
        { character ? <div className={`border-2  p-2 ${character.died ? 'text-gray-600' : 'border-amber-200'}`}>
            <p><strong>{character.name}</strong></p>
            {character.died ? <p><span className="text-2xl">&#9841;</span>{character.died}</p> : <></>}
        </div> : <>No character data!</> }
    </>
}