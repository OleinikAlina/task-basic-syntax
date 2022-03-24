export function romanToInteger(str) {
    let result = 0;
    let prev = 0;
    let value = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let current = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                current++;
                break;
                break;
            case 'V':
                current += 5;
                break;
            case 'X':
                current += 10;
                break;
            case 'L':
                current += 50;
                break;
            case 'C':
                current += 100;
                break;
            case 'D':
                current += 500;
                break;
            case 'M':
                current += 1000;
                break;
            default:
                current = -1;
                break;
        }
        if (current > prev) {
            result -= 2 * value;
        }
        if (current !== prev) {
            value = 0;
        }
        value += current;
        result += current;
        prev = current;
        current = 0;
    }
    return result;
}
