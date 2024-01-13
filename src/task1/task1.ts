// Для того, чтобы запустить код выполните "npm run task1"
// Для того, чтобы запустить тесты выполните "npm run test:task1"

export function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter((item) => !b.includes(item));
}
