var numbers = [];

var standartVoltage = '1.5 V'
var batery = {
    aa : standartVoltage,
    aaa : standartVoltage,
    aaaa : standartVoltage,
}
console.log('Упражнение 5.6: ')
console.log('Batery voltage')
console.log(batery)

var books = {
    'Темная башня': 'Кинг',
    'Хоббит': 'Толкин',
    'Опочтарение': 'Пратчетт',

}
console.log('Упражнение 5.7: ')
console.log('My books: ',books)
console.log('I\'m read "Хоббит"',books['Хоббит'])

document.getElementById('ok').onclick = function (){
    var person = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value 
    };
    
    numbers.push(person);
    console.log(numbers)
}