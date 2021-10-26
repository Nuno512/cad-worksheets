var app = (function () {
    'use strict';

    var kitchenLight = document.getElementById('KitchenLight');
    var iconKL = document.getElementById('iconKL');
    var iconClasses = iconKL.classList;
    var bulbIcon = document.getElementById('bulbIcon');
    var classeBulb = bulbIcon.classList;

    kitchenLight.onclick = function () {
        change(iconClasses, classeBulb);
    };

    var change = function (toggleClass, iconClass) {
        if (toggleClass.contains('fa-toggle-off')) {
            toggleClass.remove('fa-toggle-off');
            toggleClass.add('fa-toggle-on');
            iconClass.remove('far', 'text-dark');
            iconClass.add('fas', 'text-warning');
        }
        else {
            toggleClass.remove('fa-toggle-on');
            toggleClass.add('fa-toggle-off');
            iconClass.remove('fas', 'text-warning');
            iconClass.add('far', 'text-dark');
        }
    }


    return {

    }
})();