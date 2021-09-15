"use strict";

var dateDTO = {
    day:null,
    month:null,
    year:null
};

function loadFromDateObject(dateDTO) {
    var dateObj = new Date();

    dateDTO.day= dateObj.getUTCDate();
    dateDTO.month = dateObj.getUTCMonth() + 1; //months from 1-12
    dateDTO.year= dateObj.getUTCFullYear();
};

loadFromDateObject(dateDTO);


$('#mensaje_fotos').prepend(
    '<h2>Aquí están las últimas fotos de ' +
    dateDTO.year +
    ' ¡Os invitamos a verlas!' +
    '</h2>'
);