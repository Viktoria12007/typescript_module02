export function deepEqual(a: object, b: object): boolean {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
        return false;
    }
    for (const key of aKeys) {
        if (!bKeys.includes(key)) {
            return false;
        }
        if (typeof a[key as keyof typeof a] === 'object' && typeof b[key as keyof typeof b] === 'object') {
            return deepEqual(a[key as keyof typeof a], b[key as keyof typeof b]);
        }
        if (a[key as keyof typeof a] !== b[key as keyof typeof b]) {
            return false;
        }
    }

    return true;
}
