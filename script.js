alert("Угадайте число от 1 до 100, которое загадал компьютер")
let min = 1
let max = 100
function getRandomInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomInRange(min, max)
let cqwe = prompt("Введите число:")
while(cqwe != num){
    if(cqwe == num)
    {
        alert('Верно')
        break
    }
    if (cqwe > num)
    {
        alert("Загаданное число меньше")
    }
    if(cqwe < num)
    {
        alert("Загаданное число больше")
    }
    cqwe = prompt("Введите число:")
}
alert("Спасибо за игру!")

