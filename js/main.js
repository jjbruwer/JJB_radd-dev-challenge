// Form session storage
$(document).ready(function () {
    function init() {
        if (localStorage["f-name"]) {
            $('#fName').val(localStorage["f-name"]);
        }
        if (localStorage["l-name"]) {
            $('#fName').val(localStorage["l-name"]);
        }
        if (localStorage["mobile"]) {
            $('#fName').val(localStorage["mobile"]);
        }
        if (localStorage["name"]) {
            $('#fName').val(localStorage["name"]);
        }
    }
    init();
});

$('.stored').keyup(function() {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#clear').click(function() {
  window.localStorage.clear();
  $('#localStorage').get(0).reset();
});