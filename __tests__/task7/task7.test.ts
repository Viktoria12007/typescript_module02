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
            const res = logPerson(persons[0]);

            expect(res).toEqual(' - Max Mustermann, 25');
        });

        it('should work with admin', () => {
            const res = logPerson(persons[1]);

            expect(res).toEqual(' - Jane Doe, 32');
        });
    });
});
