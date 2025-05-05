/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function () {
    const encoded = [43, 51, 49, 54, 51, 51, 57, 57, 54, 53, 52, 55];
    const knopContainer = document.getElementById('telefoon-knop');

    if (knopContainer) {
        const revealBtn = document.createElement('button');
        revealBtn.className = 'btn btn-light btn-lg';
        revealBtn.innerText = 'Toon Telefoonnummer';

        revealBtn.addEventListener('click', function () {
            const telefoon = String.fromCharCode(...encoded);
            const belKnop = document.createElement('a');
            belKnop.href = 'tel:' + telefoon;
            belKnop.className = 'btn btn-light btn-lg ms-2';
            belKnop.innerText = 'Bel ons nu';

            knopContainer.innerHTML = '';
            knopContainer.appendChild(belKnop);
        });

        knopContainer.appendChild(revealBtn);
    }
});
