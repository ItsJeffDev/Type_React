type NameProps = {
    name: string;
    age: number;
    isloggedIn: boolean;
};


export const Name = (props: NameProps) => {
    return (
        <>
            {
                props.isloggedIn ? `Welcome ${props.name}, you are ${props.age} years old` : "Please log in"
            }
        </>
    )
}  