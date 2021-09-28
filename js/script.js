// WEB303 Assignment 2
// Name:- Parita Vipulbhai Amin
// Id:- 0773902 

$(document).on("click", '#vprospect', function(event) 
{ 
	var firstlink = new XMLHttpRequest;
    firstlink.open('GET', 'prospect.html', true);
    $('#vprospect').load('prospect.html #vprospect');
});
$(document).on("click", '#vconvert', function(event) 
{ 
	var secondlink = new XMLHttpRequest;
    secondlink.open('GET', 'convert.html', true);
    $('#vconvert').load('convert.html #vconvert');
});
$(document).on("click", '#vretain', function(event) 
{ 
	var thirdlink = new XMLHttpRequest;
    thirdlink.open('GET', 'retain.html', true);
    $('#vretain').load('retain.html #vretain');
});

