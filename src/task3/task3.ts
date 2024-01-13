// Для того, чтобы запустить код выполните "npm run task3"
// Для того, чтобы запустить тесты выполните "npm run test:task3"

export function jaden(text: string): string {
    if (!text) {
        return text;
    }
    return text.split(' ').map((word) => `${word[0]?.toUpperCase()}${word.slice(1)}`).join(' ');
}
