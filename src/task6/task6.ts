
export type User = unknown;

export const users: unknown[] = [
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

export function logPerson(user: unknown): string {
    return ` - ${user.name}, ${user.age}`;
}

console.log('Users:');
users.forEach((user) => logPerson(user));
