let name = 'Alex'

let account = 7777

let money = 10000

let a = prompt('Как вас зовут?')

if( a === name){
    let b = +prompt('Номер счета?')
    if(b === account){
        let c = prompt('Сколько обналичить?')

        if(money - c > 0){
            console.log('Все отлично');
            console.log(+c);
            console.log(money - c);
        } else {
            console.log('Недостаточно средств');
        }

    } else{
        console.log('Пользователь не найден,досвидули.');
    }
} else{
    console.log('Пользователь не найден,досвидули.');
}