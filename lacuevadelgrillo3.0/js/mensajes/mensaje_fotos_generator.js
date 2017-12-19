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

var ultimasOrPrimeras = (2017 == dateDTO.year) ? "últimas" : "primeras";

$('#mensaje_fotos').prepend(
    '<h2>Aquí están las ' +
    ultimasOrPrimeras +
    ' fotos de ' +
    dateDTO.year +
    ' tras las recientes reformas , esperamos que os gusten!' +
    '</h2>'
);