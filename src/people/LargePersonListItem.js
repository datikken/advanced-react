export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;

    return (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} years</p>
            <p>Hair color: {hairColor}</p>
            <h3>Hobbies:
                <ul>
                    {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
                </ul>
            </h3>
        </>
    );
}