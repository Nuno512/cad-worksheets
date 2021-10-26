
var flag = 0;

var app = (function () {
    'use strict';

    var configurarBotao = function (idBotao, idToggle, idIcon, flag) {

        var changeL = function (toggleClass, iconClass, iconS1, iconS2, iconColor1, iconColor2) {
            if (toggleClass.contains('fa-toggle-off')) {
                toggleClass.remove('fa-toggle-off');
                toggleClass.add('fa-toggle-on');
                iconClass.remove(iconS1, iconColor1);
                iconClass.add(iconS2, iconColor2);
            }
            else {
                toggleClass.remove('fa-toggle-on');
                toggleClass.add('fa-toggle-off');
                iconClass.remove(iconS2, iconColor2);
                iconClass.add(iconS1, iconColor1);
            }
        }


        var idBotao = document.getElementById(idBotao);
        var idToggle = document.getElementById(idToggle);
        var idIcon = document.getElementById(idIcon);
        var iconClasses = idToggle.classList;
        var classeBulb = idIcon.classList;

        idBotao.onclick = function () {

            if (flag == 1) {
                changeL(iconClasses, classeBulb, 'far', 'fas', 'text-dark', 'text-warning');
            }
            else if (flag == 2) {
                changeL(iconClasses, classeBulb, 'fa-music', 'fa-volume-mute', 'text-primary', 'text-danger');
            }
        };

    }

    var mudaTemperatura = function () 
    {
        var newKT = 21 + (Math.random() * 2)-1;
        var newLVT = 22 + (Math.random() * 4)-2; 
        newKT = newKT.toFixed(1);
        newLVT = newLVT.toFixed(1);
        var mudaKTemp = idKitchenTemp.innerHTML = newKT + ' ' + 'ºC';
        var mudaLVTemp = idLivingTemp.innerHTML = newLVT + ' ' + 'ºC';
    }

    function timeStamp()
    {
        var date;
        date = new Date();
        timeNow.innerHTML = date.toLocaleTimeString();
        dateNow.innerHTML = date.toLocaleDateString(); 
    }


    var idKitchenTemp = document.getElementById('kitchenTemp');
    var idLivingTemp  = document.getElementById('livingTemp');
    var timeNow = document.getElementById('time');
    var dateNow = document.getElementById('date');

    var intervalID = setInterval(mudaTemperatura, 2000);
    var interval = setInterval(timeStamp, 1000);

    configurarBotao('kitchenLights', 'iconKL', 'bulbIcon', 1);
    configurarBotao('ceilingLights', 'iconCL', 'bulbIcon2', 1);
    configurarBotao('ambientLights', 'iconAL', 'bulbIcon3', 1);
    configurarBotao('ambientMusic', 'iconAM', 'bulbIcon4', 2);


    return {

    }
})();