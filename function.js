

$(document).ready(function(){
	$("button").click(function(){
		$.getJSON("https://jsonplaceholder.typicode.com/posts",function(obj){

			var jsonData = '';
			$.each(obj,function(key,value){
				console.log(value.title);
		
			
				jsonData += '<div class="container">';
				jsonData += '<div class="row">';
				jsonData += '<div class="col-md-1">'+'</div>';
				jsonData += '<div class="col-md-10">';
				jsonData += '<form style="border: 1px solid white; padding: 20px; border-radius: 4px; background-color:transparent;">';
				jsonData += '<h6>'+'<ins style="color:white">'+value.title+'<ins>'+'</h6>';
				jsonData += '<p style="font-size: 12px;color:white">'+value.body+'</p>';
				jsonData += '<button type="button" class="btn btn-danger" style=margin-right:10px;font-weight:bold>Delete</button>';
				jsonData += '<button type="button" class="btn btn-success" style="font-weight:bold">Edit</button>';
				jsonData += '</form>';
				jsonData += '</br>';
				jsonData += '</div>';
				jsonData += '<div class="col-md-1">'+'</div>';
				jsonData += '</div>';
				jsonData += '</div>';
				$("#jsonDisplay").append(jsonData);
			});
			
		});
	});
});







