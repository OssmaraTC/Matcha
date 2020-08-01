var date = new Date();
var registros = [];
var namelist;
var precioClientes = 22;
var precioInversores = 20;
var precioEmpleados = 17;
var descuento1 = 0.03;
var descuento2 = 0.05;

var Cliente = function(nombre, correo, telefono){
    this.id= crearUUID();
    this.nombre = nombre;
    this.correo = correo; 
    this.telefono = telefono; 
}

function crearUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

var Compra = function(nombre, correo, telefono, numCuenta, tipoCliente, numAcciones){
    Cliente.call(this, nombre, correo, telefono);
    this.activo = true;
    this.numCuenta = numCuenta;
    this.tipoCliente = tipoCliente; 
    this.numAcciones = numAcciones;
}

var Precios = function(tipoCliente, numAcciones, precio, descuento){
    Compra.call(tipoCliente,numAcciones);
    this.precio = function(){
        if (tipoCliente = "Regular"){
            precio = precioClientes;
        }
        if (tipoCliente = "Inversores"){
            precio = precioInversores;
        }
        if (tipoCliente = "Empleados"){
            precio = precioEmpleados;
        }
    }
    this.descuento = function(){
        if (numAcciones >= 1000 && numAcciones < 2000){
            descuento = descuento1
        } else if (numAcciones >= 2000) {
            descuento = descuento2
        } else {
            descuento = 0;
        }
    };

var PrecioTotal = function(nombre,precio,descuento,precioFinal) {
    Cliente.call(this, nombre);
    Precios.call(this, precio, descuento);
    this.precioFinal = function()
    {
    var calcPrecio = precio* (1- descuento);
    precioFinal=calcPrecio
    };
}
PrecioTotal.prototype.toString = function registroToString(){
    var valorFinal=  this.nombre + " - "+ this.precio + " -  " + this.descuento + " - " + this.precioFinal;
    return valorFinal;
}

function registrarNuevoCliente(){
    document.getElementById("name").innerHTL ="";
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var numCuenta = document.getElementById("numCuenta").value;
    var tipoCliente = document.getElementById("tipoCliente").value;
    var numAcciones = document.getElementById("numAcciones").value;
    event.preventDefault();
    registros.push(new Compra(nombre, correo, telefono,numCuenta, tipoCliente, numAcciones));

    for (var I = 0; I < registros.length; I++){
       nameList = "<li>" + registros[I] + "</li>";
       document.getElementById("name").innerHTML += nameList;
    }
}
const form = document.getElementById('registro');
const log = document.getElementById('log');
form.addEventListener('submit', registrarNuevoCliente);
}