import { IceAndFireCharacter } from "@/models/IceAndFireCharacter"

type SwornMemberProps = {
    character: IceAndFireCharacter
}

export default function SwornMember({ character }: SwornMemberProps) {
    return <>
        { character ? <div className="bg-amber-50">
            <p>{character.name}</p>
            {character.died ?? <p>&#10014;{character.died}</p>}
        </div> : <>No character data!</> }
    </>
}