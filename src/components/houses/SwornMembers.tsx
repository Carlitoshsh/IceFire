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
        <details className="border-2 p-2">
            <summary>
                Show members
            </summary>
            <div className="grid gap-1 rounded">
                {members.map(((member, index) => <SwornMember key={`member-${index}`} character={member} />))}
            </div>
        </details>
    </>
}