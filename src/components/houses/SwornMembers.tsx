import { useEffect, useState } from "react"
import SwornMember from "./SwornMember"
import api from "@/api/oficeandfire"
import { IceAndFireCharacter } from "@/models/IceAndFireCharacter"

type SwornMembersProps = {
    urls: string[]
}

export function SwornMembers({ urls }: SwornMembersProps) {
    const [members, setMembers] = useState<IceAndFireCharacter[]>([])
    useEffect(() => {
        async function getData() {
            const promises: Promise<IceAndFireCharacter>[] = []
            urls.forEach((x) => {
                promises.push(api.getCharacterByUrl(x))
            })
            const members = await Promise.all(promises)
            setMembers(members)
        }
        getData()
    }, [urls])
    return <>
        <details>
            <summary className="bg-amber-500 p-2">
                Show members
            </summary>
            <div className="bg-amber-50 grid gap-1 p-3">
                {members.map(((member, index) => <SwornMember key={`member-${index}`} character={member} />))}
            </div>
        </details>
    </>
}