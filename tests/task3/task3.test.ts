import * as task3 from '../../src/task3/task3';

describe('task3', () => {
    describe('task3#jaden()', () => {
        it('should work with empty argument', () => {
            const res = task3.jaden('')
            expect(res).toEqual('');
        });

        it('should work with standard argument', () => {
            const res = task3.jaden('раз два')
            expect(res).toEqual('Раз Два');
        });

        it('should work with empty argument', () => {
            const res = task3.jaden('три')
            expect(res).toEqual('Три');
        });

        it('should work with empty argument', () => {
            const res = task3.jaden('!one !two !three')
            expect(res).toEqual('!one !two !three');
        });
    });
});
