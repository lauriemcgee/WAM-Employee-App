/* global Vue, $ */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      employees: [],
      searchFilter: ""
    },
    mounted: function() {
      $.get('http://localhost:3000/api/employeedata', function(responseEmployeeData) {
        console.log(responseEmployeeData);
        this.employees = responseEmployeeData;
      }.bind(this));
    },
    computed: {
      filteredEmployees: function() {
        var lowerNameFilter = this.searchFilter.toLowerCase();
        var filtered = this.employees.filter(function(employee) {
          var lowerName = employee.first_name.toLowerCase() + employee.last_name.toLowerCase() + employee.job_title.toLowerCase();
          return lowerName.indexOf(lowerNameFilter) !== -1;
        });
        return filtered;
      }
    }
  });
});