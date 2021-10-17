import * as task4 from '../../src/task4/task4';

describe('task4', () => {
    describe('task4#jadenAndSplice()', () => {
        it('should work with empty argument', () => {
            const res = task4.jadenAndSplice('')
            expect(res).toEqual('');
        });

        it('should work with empty argument', () => {
            const res = task4.jadenAndSplice('Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.')
            expect(res).toEqual('Не Волнуйтесь, Что-то Не Работает. Если Бы Всё Работало, Вас Бы Уволили.');
        });

        it('should work with empty argument', () => {
            const res = task4.jadenAndSplice('Раз Два Три Четыре Пять')
            expect(res).toEqual('Раз Два Три Пять');
        });

        it('should work with empty argument', () => {
            const res = task4.jadenAndSplice('Раз')
            expect(res).toEqual('Раз');
        });
    });
});
