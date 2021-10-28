import {IsTypeEqual, FirstArgument, typeAssert} from '../type-assertions';
import {Person, logPerson, persons} from '../../src/task7/task7';

typeAssert<
    IsTypeEqual<
        Person,
        {name: string; age: number} & ({occupation: string} | {role: string})
        >
    >();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({name: string; age: number} & ({occupation: string} | {role: string}))[]
        >
    >();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        {name: string; age: number} & ({occupation: string} | {role: string})
        >
    >();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        string
        >
    >();

describe('task7', () => {
    describe('task7#logPerson()', () => {
        it('should work with user', () => {
            const res = persons[0] ? logPerson(persons[0]) : null;

            expect(res).toEqual(' - Max Mustermann, 25');
        });

        it('should work with admin', () => {
            const res = persons[1] ? logPerson(persons[1]) : null;

            expect(res).toEqual(' - Jane Doe, 32');
        });
    });
});
