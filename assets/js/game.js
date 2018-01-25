$(document).ready(function(){
	$('#main-form').hide();
	$('#rock').hide();
	$('#paper').hide();
	$('Scissors').hide();
});
$('#login').on("click", function(event){
	event.preventDefault();
	$('#main-form').show('500')
});


$(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('user info', $('#user-name').val());
      $('#game-info').text($('#user-name').val());
      $('#user-name').val('');
      return false;
    });
});