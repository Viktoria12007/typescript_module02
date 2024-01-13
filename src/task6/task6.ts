export type User = {
    name: string,
    age: number,
    occupation: string,
};

export const users: User[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    }
];

export function logPerson(user: User): string {
    return ` - ${user.name}, ${user.age}`;
}

console.log('Users:');
users.forEach((user) => logPerson(user));
