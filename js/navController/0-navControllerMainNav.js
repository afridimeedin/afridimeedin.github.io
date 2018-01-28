$(document).ready(function(){
	$('li#navItemDashboard a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/0-mainNav/'+page+'.html');
		return false;
	});
});

