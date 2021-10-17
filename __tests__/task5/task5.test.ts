import * as task5 from '../../src/task5/task5';

const hero1 = {
    name: 'Batman',
    address: {
        city: 'Gotham'
    }
};

const hero2 = {
    name: 'Batman',
    address: {
        city: 'Gotham'
    }
};

const mentor = {
    name: 'Dima',
    place: 'Skillbox'
}

describe('task5', () => {
    describe('task5#deepEqual()', () => {
        it('should work with empty arguments', () => {
            const res = task5.deepEqual({}, {})
            expect(res).toEqual(true);
        });

        it('should work with flat arguments', () => {
            const res = task5.deepEqual({...mentor}, {...mentor})
            expect(res).toEqual(true);
        });

        it('should work with deep arguments', () => {
            const res = task5.deepEqual(hero1, hero2)
            expect(res).toEqual(true);
        });
    });
});
