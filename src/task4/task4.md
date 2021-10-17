## Цель задания:

Наработать практику использования массивов в TypeScript. Успешно решить задачу.

## Что нужно сделать:

Доработать код с предыдущего шага согласно условию.

```tsx
Шаг 1: Необходимо написать функцию, которая принимает строку, содержащую
предложение на русском языке. Необходимо капитализировать каждое слово в
строке, сохраняя общий порядок слов.

Шаг 2: Далее необходимо посчитать количество букв в первом слове и удалить
элемент с индексом равным количеству букв первого слова.

Пример:
"Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."
->
"Не Волнуйтесь, Если Что-то Не Работает. Если Бы Всё Работало, Вас Бы Уволили."
^^^ 2
->
"Не Волнуйтесь, Если Что-то Не Работает. Если Бы Всё Работало, Вас Бы Уволили."
 0      1       ^2^
->
"Не Волнуйтесь, Что-то Не Работает. Если Бы Всё Работало, Вас Бы Уволили."
```

Сейчас вы столкнулись с типичной ситуацией, когда существующий код необходимо модифицировать. Подумайте, легко ли вам модифицировать ваш код. Если да - то это отлично, а если нет - обратите внимание, в чем именно возникали сложности.

## Советы и рекомендации

Для выполнения заданий рекомендуем скачать репозиторий и работать в нем. Это будет полезно для отработки навыков в реальном проекте. Ссылку на репозиторий можно найти в описании домашнего задания.

## **Формат сдачи:**

Код, отправленный в чат с проверяющим наставником.

## **Критерии оценки:**

- **"Зачет":**
    - Код выполняет техническое задание
    - В ходе решения использована типизация массивов
    - Остальные сущности, которые возможно типизировать, типизированы
- **"Незачет":**
    - Не выполнен один из пунктов выше