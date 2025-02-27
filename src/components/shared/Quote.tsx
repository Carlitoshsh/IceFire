export interface QuoteProps {
    quote: string
}

export default function Quote({ quote }: QuoteProps) {
    return <>
        <div className="border-l-2 border-l-amber-600 bg-amber-50 font-bold p-2 rounded">
            <em>{quote}</em>
        </div>
    </>
}