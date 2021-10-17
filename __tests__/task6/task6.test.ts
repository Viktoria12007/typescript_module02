import {IsTypeEqual, typeAssert} from '../type-assertions';
import {User, logPerson, users} from '../../src/task6/task6';

typeAssert<IsTypeEqual<User, {name: string, age: number, occupation: string}>>();
typeAssert<IsTypeEqual<typeof users, {name: string, age: number, occupation: string}[]>>();
typeAssert<IsTypeEqual<typeof logPerson, (user: {name: string, age: number, occupation: string}) => string>>();

describe('task6', () => {
    describe('task6#logPerson()', () => {
        it('should work', () => {
            const res = logPerson(users[0]);

            expect(res).toEqual(' - Max Mustermann, 25');
        });
    });
});
