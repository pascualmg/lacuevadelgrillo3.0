"use strict"
// http://programacion.net/articulo/introduccion_a_web_sql_1305

var miDDBBWEB = openDatabase('midb','1.0','Base de datos de pruebas en el lado del cliente', 2 * 1024 * 1024);

miDDBBWEB.transaction(function (tran) {
    tran.executeSql('create table if not exists Prueba(id unique, nombre , apellidos)');
    console.log('creando tablilla.');
});