//api logic
//Рекомендации
axios.get(`https://ancient-reef-27707.herokuapp.com/api/personRecomendation/user1`) //Выполняем гет запрос на адрес предполагаемого сервера
    .then(function (response) {  //Ответ сервера при удачном выполнении запроса
        const data = response.data;  //Заносим полученные данные в массив data
        
        let recChoose;
        if (data.chooseTheDifferent.recommendation != "There is no data."){
            recChoose = data.chooseTheDifferent.recommendation

            const recommendationChoose = document.querySelectorAll('.rec_choose') 
            Array.from(recommendationChoose).forEach(div => div.innerHTML = `Choose The Different:</br>` + recChoose) //Заносим название любимой игры в дом дерево
        }

        let recSpell;
        if (data.spellShooting.recommendation != "There is no data."){
            recSpell = data.spellShooting.recommendation

            const recommendationSpell = document.querySelectorAll('.rec_spell') 
            Array.from(recommendationSpell).forEach(div => div.innerHTML = `Spell Shooting:</br> ${recSpell}`) //Заносим название любимой игры в дом дерево
        }

        let recLogical;
        if (data.logicalLinks.recommendation != "There is no data."){
            recLogical = data.logicalLinks.recommendation

            const recommendationLogic = document.querySelectorAll('.rec_logic') 
            Array.from(recommendationLogic).forEach(div => div.innerHTML = `Logical Links: ${recLogical}`) //Заносим название любимой игры в дом дерево
        }

        let recTrue;
        if (data.trueOrFalse.recommendation != "There is no data."){
            recTrue = data.trueOrFalse.recommendation

            const recommendationTrue = document.querySelectorAll('.rec_true') 
            Array.from(recommendationTrue).forEach(div => div.innerHTML = `True or False: ${recTrue}`) //Заносим название любимой игры в дом дерево
        }

        let recWords;
        if (data.wordsPronunciation.recommendation != "There is no data."){
            recWords = data.wordsPronunciation.recommendation

            const recommendationWords = document.querySelectorAll('.rec_words') 
            Array.from(recommendationWords).forEach(div => div.innerHTML = `Words Pronunciation: ${recWords}`) //Заносим название любимой игры в дом дерево
        }

        let recLine;
        if (data.lineOfNumbers.recommendation != "There is no data."){
            recLine = data.lineOfNumbers.recommendation

            const recommendationLine = document.querySelectorAll('.rec_line') 
            Array.from(recommendationLine).forEach(div => div.innerHTML = `Line of Numbers: ${recLine}`) //Заносим название любимой игры в дом дерево
        }

        let recCombi;
        if (data.combinatoricsPuzzle.recommendation != "There is no data."){
            recCombi = data.combinatoricsPuzzle.recommendation

            const recommendationCombi = document.querySelectorAll('.rec_combi') 
            Array.from(recommendationCombi).forEach(div => div.innerHTML = `Combinatorics Puzzle: ${recCombi}`) //Заносим название любимой игры в дом дерево
        }

    })
    .catch(function (error) { //Захват ошибки при неудачной попытке гет запроса, либо не рабочем сервере
        // handle error
        console.log(error);
    })