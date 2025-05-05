/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function () {
    const telefoon = '+31' + '633996547'; // Obfuscated format
    const belKnop = document.createElement('a');
    belKnop.href = 'tel:' + telefoon;
    belKnop.className = 'btn btn-light btn-lg';
    belKnop.innerText = 'Bel ons nu';

    const knopContainer = document.getElementById('telefoon-knop');
    if (knopContainer) {
        knopContainer.appendChild(belKnop);
    }
});
