$(function(){

    var configurarBotao = function (idBotao, idToggle, idIcon, flag) {

        var changeL = function (toggleClass, iconClass, iconS1, iconS2, iconColor1, iconColor2) {
           
            iconClass.toggleClass('fa-toggle-off fa-toggle-on');
            toggleClass.toggleClass(iconS1+' '+iconS2);
            toggleClass.toggleClass(iconColor1+' '+iconColor2);

        }

        var idBotao = $("#" + idBotao);
        var idToggle = $("#" + idToggle);
        var idIcon = $("#" + idIcon);

        idBotao.click(function (e) {

            console.log("Here");

            if (flag == 1) {

                changeL(idIcon, idToggle, 'far', 'fas', 'text-dark', 'text-warning');
            
            }
            else if (flag == 2) {
                changeL(idIcon, idToggle, 'fa-music', 'fa-volume-mute', 'text-primary', 'text-danger');
            }
        });

    }

    var mudaTemperatura = function () 
    {
        var newKT = 21 + (Math.random() * 2)-1;
        var newLVT = 22 + (Math.random() * 4)-2; 
        newKT = newKT.toFixed(1);
        newLVT = newLVT.toFixed(1);
        idKitchenTemp.html(newKT + ' ' + 'ºC');
        idLivingTemp.html(newLVT + ' ' + 'ºC');
    }

    function timeStamp()
    {
        var date;
        date = new Date();
        var time = date.getHours() + ":" + date.getMinutes(); + ":" + date.getSeconds();
        var day = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
        timeNow.html(time);
        dateNow.html(day);
    }


    var idKitchenTemp = $('#kitchenTemp');
    var idLivingTemp  = $('#livingTemp');
    var timeNow = $('#time');
    var dateNow = $('#date');

    var intervalID = setInterval(mudaTemperatura, 2000);
    var interval = setInterval(timeStamp, 1000);

    configurarBotao('kitchenLights', 'iconKL', 'bulbIcon', 1);
    configurarBotao('ceilingLights', 'iconCL', 'bulbIcon2', 1);
    configurarBotao('ambientLights', 'iconAL', 'bulbIcon3', 1);
    configurarBotao('ambientMusic', 'iconAM', 'bulbIcon4', 2);

});