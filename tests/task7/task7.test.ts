// @ts-ignore
import {IsTypeEqual, FirstArgument, typeAssert} from '../type-assertions';
import {Person, logPerson, persons} from '../../src/task7/task7';

describe('task7', () => {
    it('should pass tests if no errors in file', () => {
        console.log('Для этой задачи существуют только тесты типов. Если в терминале нет ошибок - задача выполнена правильно.')
        expect(true).toBe(true);
    })
});

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
