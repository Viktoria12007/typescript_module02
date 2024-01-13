type numNull = number | null;
type strBoolean = string | boolean;
type numStrArr = Array<number> | Array<string>;
type numBoolStrUndef = strBoolean | number | undefined;
type student = {
    id: number,
    name: string,
}

const arr1: numNull[] = [1, 2, 3, null];
const arr2: Array<strBoolean> = ['safety', '=', true]
const arr3: numStrArr[] = [
    [1, 2, 3, 4, 5],
    ['1', '2', '3', '4', '5'],
]
const arr4: Array<numBoolStrUndef> = [
    1, 2, true, 'str', undefined
]

const arr5: Array<student> = [
    {
        id: 1,
        name: 'Студент',
    },
    {
        id: 2,
        name: 'Наставник',
    }
]
