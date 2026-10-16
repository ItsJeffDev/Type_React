type StatusType = {
    status: {
        first: string;
        status: number;
    }[];
};

export const Status = (props: StatusType) => {
    return (
        <div>{props.status.map((person) => (
            <div key={person.first}>
                    {person.first} : {person.status}
            </div>
        ))}
        </div>
    )
}