const dateString = '21-Jul-86';

// Função para converter a data
function convertToDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('-');
    const monthIndex = new Date(Date.parse(month + " 1, 2012")).getMonth();
    const fullYear = parseInt(year) < 50 ? '20' + year : '19' + year; // Ajuste para anos 2000 e 1900
    return new Date(parseInt(fullYear), monthIndex, parseInt(day));
}

const date = convertToDate(dateString);
console.log(date); // Saída: 1986-07-21T00:00:00.000Z