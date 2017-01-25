(function() {


  var app = angular.module('timeSlotsApp', ['ngResource']);

  app.factory('TimeSlots', ['$resource', function($resource) {
    return $resource('/timeslots/:id', null, {
            'update': { method:'PUT' }
          });
  }]);

  app.controller('TimeSlotsListController', ['TimeSlots', function(TimeSlots) {
    var timeSlotList = this;
    timeSlotList.timeslots = TimeSlots.query();

    timeSlotList.openModal = function(timeslot) {
      timeSlotList.editSlot = timeslot;
      timeSlotList.form = { name: timeslot.name, phone: timeslot.phone }
      $('#edit-timeslot-modal').modal('open');
    };

    timeSlotList.updateTimeSlot = function() {
      timeSlotList.editSlot.name = timeSlotList.form.name;
      timeSlotList.editSlot.phone = timeSlotList.form.phone;
    };

  }]);
})();
