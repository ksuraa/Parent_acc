//api logic
axios.get(`https://ancient-reef-27707.herokuapp.com/api/taskStatistic`) //Выполняем гет запрос на адрес предполагаемого сервера
    .then(function (response) { //Ответ сервера при удачном выполнении запроса
        const data = response.data; //Заносим полученные данные в массив data

        const favouriteGame = data.filter(task => task.taskAge === 'age_5_6').sort((a, b) => b.taskNumberOfAttempts - a.taskNumberOfAttempts); //Сортируем массив с данными по количеству использованных попыток
        let gameName; //Объявляем переменную для любимой игры
        switch(favouriteGame[0].taskCategory) { //Используем Switch Case для динамического определения любимой игры
            case 'spellShooting': gameName = 'Spell Shooting'; break;
            case 'chooseTheDifferent': gameName = 'Choose the Different'; break;
            case 'logicalLinks': gameName = 'Logical Links'; break;
            case 'trueOrFalse': gameName = 'True or False'; break;
            case 'wordsPronunciation': gameName = 'Words Pronunciation'; break;
            case 'lineOfNumbers': gameName = 'Line of Numbers'; break;
            case 'combinatoricsPuzzle': gameName = 'Combinatorics Puzzle'; break;
        }
        const favourite = document.querySelectorAll('.favourite_game_game') 
        Array.from(favourite).forEach(div => div.innerHTML = gameName) //Заносим название любимой игры в дом дерево
        //Array.from(favourite).forEach(div => div.innerHTML = favouriteGame[0].taskNumberOfAttempts)

        //Фильтруем данные по требуемым нам параметрам
        const spellShooting = data.filter(task => task.taskCategory === 'spellShooting' && task.taskAge === 'age_5_6')
        const chooseTheDifferent = data.filter(task => task.taskCategory === 'chooseTheDifferent' && task.taskAge === 'age_5_6')
        const logicalLinks = data.filter(task => task.taskCategory === 'logicalLinks' && task.taskAge === 'age_5_6')
        const trueOrFalse = data.filter(task => task.taskCategory === 'trueOrFalse' && task.taskAge === 'age_5_6')
        const wordsPronunciation = data.filter(task => task.taskCategory === 'wordsPronunciation' && task.taskAge === 'age_5_6')
        const lineOfNumbers = data.filter(task => task.taskCategory === 'lineOfNumbers' && task.taskAge === 'age_5_6')
        const combinatoricsPuzzle = data.filter(task => task.taskCategory === 'combinatoricsPuzzle' && task.taskAge === 'age_5_6')

        //Высчитываем потраченное время в минутах
        // const gameTime = spellShooting[0].taskSpentTime +
        //     chooseTheDifferent[0].taskSpentTime +
        //     logicalLinks[0].taskSpentTime +
        //     trueOrFalse[0].taskSpentTime +
        //     wordsPronunciation[0].taskSpentTime +
        //     lineOfNumbers[0].taskSpentTime +
        //     combinatoricsPuzzle[0].taskSpentTime

        //Переводим количество минут в часы/минуты
        function toHoursAndMinutes(totalMinutes) {
            const minutes = totalMinutes % 60;
            const hours = Math.floor(totalMinutes / 60);
          
            return `${padTo2Digits(hours)} hours ${padTo2Digits(minutes)} minutes`;
          }
          
          function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }


        //Получаем данные для прогресс баров
        //chooseTheDifferent logic
        const timeChoose = document.querySelectorAll('.time_choose')
        Array.from(timeChoose).forEach(div => div.innerHTML = `Spent Time: ${chooseTheDifferent[0].taskSpentTime} minutes`) //Заносим полученные данные в дом дерево
        const statusChoose = document.querySelectorAll('.status_choose')
        Array.from(statusChoose).forEach(div => div.innerHTML = `Status: ${chooseTheDifferent[0].taskStatus}`) //Заносим полученные данные в дом дерево
        //spellShooting logic
        const timeSpell = document.querySelectorAll('.time_spell')
        Array.from(timeSpell).forEach(div => div.innerHTML = `Spent Time: ${spellShooting[0].taskSpentTime} minutes`) //Заносим полученные данные в дом дерево
        const statusSpell = document.querySelectorAll('.status_spell')
        Array.from(statusSpell).forEach(div => div.innerHTML = `Status: ${spellShooting[0].taskStatus}`) //Заносим полученные данные в дом дерево
        // //logicalLinks logic
        // const timeLogic = document.querySelectorAll('.time_logic')
        // Array.from(timeLogic).forEach(div => div.innerHTML = `Spent Time: ${logicalLinks[0].taskSpentTime} minutes`)
        // const statusLogic = document.querySelectorAll('.status_logic')
        // Array.from(statusLogic).forEach(div => div.innerHTML = `Status: ${logicalLinks[0].taskStatus}`)
        // //trueOrFalse logic
        // const timeTrue = document.querySelectorAll('.time_true')
        // Array.from(timeTrue).forEach(div => div.innerHTML = `Spent Time: ${trueOrFalse[0].taskSpentTime} minutes`)
        // const statusTrue = document.querySelectorAll('.status_true')
        // Array.from(statusTrue).forEach(div => div.innerHTML = `Status: ${trueOrFalse[0].taskStatus}`)
        // //wordsPronunciation logic
        // const timeWords = document.querySelectorAll('.time_words')
        // Array.from(timeWords).forEach(div => div.innerHTML = `Spent Time: ${wordsPronunciation[0].taskSpentTime} minutes`)
        // const statusWords = document.querySelectorAll('.status_words')
        // Array.from(statusWords).forEach(div => div.innerHTML = `Status: ${wordsPronunciation[0].taskStatus}`)
        // //lineOfNumbers logic
        // const timeLine = document.querySelectorAll('.time_line')
        // Array.from(timeLine).forEach(div => div.innerHTML = `Spent Time: ${lineOfNumbers[0].taskSpentTime} minutes`)
        // const statusLine = document.querySelectorAll('.status_line')
        // Array.from(statusLine).forEach(div => div.innerHTML = `Status: ${lineOfNumbers[0].taskStatus}`)
        // //combinatoricsPuzzle logic
        // const timeCombi = document.querySelectorAll('.time_combi')
        // Array.from(timeCombi).forEach(div => div.innerHTML = `Spent Time: ${combinatoricsPuzzle[0].taskSpentTime} minutes`)
        // const statusCombi = document.querySelectorAll('.status_combi')
        // Array.from(statusCombi).forEach(div => div.innerHTML = `Status: ${combinatoricsPuzzle[0].taskStatus}`)
    })
    .catch(function (error) { //Захват ошибки при неудачной попытке гет запроса, либо не рабочем сервере
        console.log(error);
    })

//spent time api logic
//Делаем заглушку на случай нерабочего бэкенда
const spentTime = document.querySelectorAll('.mini_game_time');
const spentArray = Array.from(spentTime);
const timers = '15 minutes';
spentArray.forEach(item => item.innerHTML = `Spent Time: ${timers}`);

//status api logic
//Делаем заглушку на случай нерабочего бэкенда
const statusX = document.querySelectorAll('.mini_game_status')
const statusArray = Array.from(statusX)
const time = 'Status: Passed'
statusArray.forEach(item => item.innerHTML = time);



// progress bars logic
//Выполняем логику для отображения прогресс баров с помощью библиотеки PROGRESS
const progress = document.querySelectorAll('.progress')
const fromBackEnd = [1, 1, 0.72, 0.34, 0.55, 0.99, 0.21, 1, 1, 0.72, 0.34, 0.55, 0.99, 0.21]
//Проходимся в массиве по всем прогресс барам и присваиваем им стили и необходимые настройки
progress.forEach((item, index) => {
    const bar = new ProgressBar.Circle(item, {
        color: '#F7BE11',
        strokeWidth: 7,
        trailColor: '#cacaca',
        trailWidth: 7,
        easing: 'easeInOut',
        duration: 2500,
        text: {
            autoStyleContainer: false,
            style: {
                color: '#F7BE11',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }

            },
        },
        from: {
            color: '#F7BE11',
            width: 7
        },
        to: {
            color: '#F7BE11',
            width: 7
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            let value = Math.round(circle.value() * 100);
            //Логика оторабежния процентов
            if (value === 0) {
                circle.setText('0' + '%');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar.text.style.fontFamily = 'Roboto';
    bar.text.style.fontSize = '1rem';
    bar.text.style.fontWeight = '700';

    bar.animate(fromBackEnd[index]); // Значение от 0.0 до 1.0
})