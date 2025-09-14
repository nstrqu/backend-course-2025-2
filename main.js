// Константи для варіанту 2
const date = '202408';          // серпень 2024 року
const time_period = 'm';        // період - місяць

// Створення базового URL
const baseUrl = new URL('https://bank.gov.ua/');

// Додавання шляху до API
baseUrl.pathname = 'NBUStatService/v1/statdirectory/res';

// Додавання параметрів
baseUrl.searchParams.append('json', '');
baseUrl.searchParams.append('date', date);
baseUrl.searchParams.append('period', time_period);

// Виведення URL
console.log(baseUrl.toString());