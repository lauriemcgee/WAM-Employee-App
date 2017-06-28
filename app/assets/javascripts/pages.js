/* global Vue, $ */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      employees: []
    },
    mounted: function() {
      $.get('http://localhost:3000/api/employeedata', function(responseEmployeeData) {
        console.log(responseEmployeeData);
        this.employees = responseEmployeeData;
      }.bind(this));
    }
  });
});