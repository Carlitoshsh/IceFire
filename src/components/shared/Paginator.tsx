type PaginationProps = {
    update: (increase: number) => void,
    page: number
}

export function Paginator({ update, page }: PaginationProps) {
    return <div className="flex items-center justify-between">
        <span>Showing page #{page}</span>
        <div className="flex gap-1">
            {page > 1 ? <button onClick={() => update(-1)}>Prev</button> : <></>}
            <button onClick={() => update(1)}>Next</button>
        </div>
    </div>
}