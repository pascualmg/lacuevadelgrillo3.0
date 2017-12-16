"use strict";

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var terminandoAnio = (2017 == year)?"últimas":"primeras";

$('#mensaje_fotos').prepend(
    '<h2>Aquí están las ' +
    terminandoAnio +
    ' fotos de ' +
    year +
    ' tras las últimas reformas , esperamos que os gusten!' +
    '</h2>'
);