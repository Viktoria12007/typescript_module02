export function deepEqual(a: object, b: object): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}
