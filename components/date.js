import { parse, format } from 'date-fns'

export default function Date({dateString}) {
    //const date = parseISO(dateString)
    const date = parse(dateString, 'dd-MM-yyyy', 0)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
