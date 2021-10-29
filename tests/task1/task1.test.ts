import * as task1 from '../../src/task1/task1';

describe('task1', () => {
  describe('task1#arrayDiff()', () => {
    it('should work with empty arguments', () => {
      const res = task1.arrayDiff([], [])
      expect(res).toEqual([]);
    });

    it('should work with standard arguments', () => {
      const res = task1.arrayDiff([1, 2], [2])
      expect(res).toEqual([1]);
    });

    it('should work with standard arguments', () => {
      const res = task1.arrayDiff([1, 2, 3, 4], [1, 2, 3])
      expect(res).toEqual([4]);
    });

    it('should work with standard arguments', () => {
      const res = task1.arrayDiff([1, 2, 3, 4], [])
      expect(res).toEqual([1, 2, 3, 4]);
    });

    it('should work with standard arguments', () => {
      const res = task1.arrayDiff([], [1, 2, 3, 4])
      expect(res).toEqual([]);
    });
  });
});
