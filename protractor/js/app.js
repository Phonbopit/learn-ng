"use strict";

var app = angular.module('myApp', []);

function MainCtrl() {
	var vm = this;
	vm.title = 'Hello World';
};

app.controller('MainController', MainCtrl);