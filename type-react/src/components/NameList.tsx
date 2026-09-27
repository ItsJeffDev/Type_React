type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export const NameList = (props: PersonListProps) => {
    return(
        <div> {props.names.map(name => {
            return (
                <div>{name.first} {name.last}</div>
            )
        })} </div>
    )
}