// Для того, чтобы запустить код выполните "npm run task4"
// Для того, чтобы запустить тесты выполните "npm run test:task4"

export function jadenAndSplice(text: string): string {
    if (!text) {
        return text;
    }
    let firstWordLength = 0;
    const upperWordArr = text.split(' ').map((word, index) => {
        if (index === 0) {
            firstWordLength = word.length;
        }
        return `${word[0]?.toUpperCase()}${word.slice(1)}`;
    });
    upperWordArr.splice(firstWordLength, 1);
    return upperWordArr.join(' ');
}
