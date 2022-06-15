//api logic
axios.get(`http://ancient-reef-27707.herokuapp.com/api/taskStatistic`) //Выполняем гет запрос на адрес предполагаемого сервера
    .then(function (response) { //Ответ сервера при удачном выполнении запроса
        const data = response.data; //Заносим полученные данные в массив data
        const spellShooting = data.filter(task => task.taskCategory === 'spellShooting' && task.taskAge === 'age_5_6'); //Фильтруем массив data по необходимым для игры параметрам
        const block = document.querySelectorAll('.star_img'); //Выделяем в дом дереве элемент с классом .star_img
        const image = document.createElement('img'); //Создам изображение в дом дереве
        document.getElementById('nostar').remove(); //Удаляем находящееся изображение в дом дереве, для исключения дублирования

        const x = spellShooting[0].taskReward //Получаем с бэкенда данные по успеваемости клиента, они могут быть 0, 5, 15, 25
        switch (x) {
            case 0: //При кейсе 0 делаем изображение с нулем звезд
                image.src = 'assets/images/star0.png';
                break;
            case 5: //При кейсе 5 делаем изображение с одной звездой 
                image.src = 'assets/images/star1.png';
                break;
            case 15: //При кейсе 15 делаем изображение с двумя звездами 
                image.src = 'assets/images/star2.png';
                break;
            case 25: //При кейсе 25 делаем изображение с тремя звездами
                image.src = 'assets/images/star3.png';
                break;
        }

        //Изображение для десктоп и мобильной версии сайта
        if (document.documentElement.clientWidth > 768) { //Если ширина вьюпорта больше 768, используем десктоп настройки, в ином случае мобильные
            block[0].appendChild(image)
        } else {
            block[1].appendChild(image)
        }
        //Добавляем слушатель на ресайз окна, чтобы мы могли видеть смену изображения в реальном времени, даже в Developer Tools
        window.addEventListener('resize', function () {
            if (document.documentElement.clientWidth > 768) {
                block[0].appendChild(image)
            } else {
                block[1].appendChild(image)
            }
        });
        //Получаем данные по количеству попыток:
        const attempts = document.querySelectorAll('.attempts')
        Array.from(attempts).forEach(div => div.innerHTML = spellShooting[0].taskNumberOfAttempts) //Меняем данные в дом дереве на полученные нами с сервера
        //Получаем данные по статусу:
        const status = document.querySelectorAll('.status')
        Array.from(status).forEach(div => div.innerHTML = spellShooting[0].taskStatus) //Меняем данные в дом дереве на полученные нами с сервера
        //Получаем данные по использованию подсказок:
        const hints = document.querySelectorAll('.hints')
        Array.from(hints).forEach(div => div.innerHTML = spellShooting[0].taskNumberOfUsedHints) //Меняем данные в дом дереве на полученные нами с сервера
        //Получаем данные по затраченному времени:
        const spent = document.querySelectorAll('.spent')
        Array.from(spent).forEach(div => div.innerHTML = `${spellShooting[0].taskSpentTime} minutes`) //Меняем данные в дом дереве на полученные нами с сервера

    })
    .catch(function (error) { //Захват ошибки при неудачной попытке гет запроса, либо не рабочем сервере
        // handle error
        console.log(error);
    })