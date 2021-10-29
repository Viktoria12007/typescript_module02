// @ts-ignore
import {IsTypeEqual, typeAssert} from '../type-assertions';
import {User, logPerson, users} from '../../src/task6/task6';

describe('task6', () => {
    it('should pass tests if no errors in file', () => {
        console.log('Для этой задачи существуют только тесты типов. Если в терминале нет ошибок - задача выполнена правильно.')
        expect(true).toBe(true);
    })
});

typeAssert<IsTypeEqual<User, {name: string, age: number, occupation: string}>>();
typeAssert<IsTypeEqual<typeof users, {name: string, age: number, occupation: string}[]>>();
typeAssert<IsTypeEqual<typeof logPerson, (user: {name: string, age: number, occupation: string}) => string>>();
