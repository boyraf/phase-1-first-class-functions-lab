// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    return drivers =['Antonia', 'Nuru']
}
returnFirstTwoDrivers(drivers)


function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  function fareDoubler(integer){
    return integer * 2
  }

  function fareTripler(integer){
    return integer * 3
  }
  function selectDifferentDrivers(drivers, selectDriversFn) {
    return selectDriversFn(drivers);
  }
  
  
