jQuery(function($){

    function closePusk(){
        if($('.startMenu').css('display') == 'block'){                       //если открыто
            $('.startMenu').css('display', 'none'); //закрыть
        }
    }

     $('.pusk').on('click', function() {            //При клике на кнопку пуска
        let state = $('.startMenu').css('display'); //в переменную записываем состояние свойства css: display
        if(state == 'none'){                        //если закрыто
            $('.startMenu').css('display', 'block');//открыть
        }
        if(state == 'block'){                       //если открыто
            $('.startMenu').css('display', 'none'); //закрыть
        }
    })

    $('#closeAbout').on('click', function() {       //та же функция, но на закрытие окна обо мне
        let closeAboutState = $('#about').css('display');
        if(closeAboutState == 'block'){
            $('#about').css('display', 'none');
            $('#topWindowAbout').css('display', 'none');  
            closePusk();          
        }
    })

    $('#closeWork').on('click', function() {        //на закрытие окна мои работы
        let closeWorkState = $('#work').css('display');
        if(closeWorkState == 'block'){
            $('#work').css('display', 'none');
            $('#topWindowWork').css('display', 'none');
            closePusk();
        }
    })

    $('.myComp').on('click', function() {        //на открытие окна обо мне
        let openAboutState = $('#about').css('display');
        if(openAboutState == 'none'){
            $('#about').css('display', 'block');
            $('#topWindowAbout').css('display', 'block');
            closePusk();
        }
    })

    $('.myDocs').on('click', function() {        //на открытие окна мои работы
        let openWorkState = $('#work').css('display');
        if(openWorkState == 'none'){
            $('#work').css('display', 'block');
            $('#topWindowWork').css('display', 'block');
            closePusk();
        }
    })

    $('.powerOffButton').on('click', function() {        //выключить компьютер...
        closePusk();
        $('.waiting').css('display', 'block');
        function awt(){
            $('.bye').css('display', 'block');
        }
        setTimeout(awt, 3000);
        
    })
})