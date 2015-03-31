"use strict";

var app = angular.module('myApp', []);

function MainCtrl() {
	var vm = this;
	vm.message = 'Hello World';
};

app.controller('MainController', MainCtrl);