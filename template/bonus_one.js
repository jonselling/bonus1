// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types


	// Magic!
	
var InterestArray = new Array();
var ProgArray = new Array();
var FullArray = new Array();
var MyArray = new Array();
$.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function(my_data){
	InterestArray = my_data.data.interests;
	ProgArray = my_data.data.programming;
	for(var i = 0; i < InterestArray.length; i++)
	{
		FullArray.push(InterestArray[i]);
	}
	for(var i = 0; i < ProgArray.length; i++)
	{
		FullArray.push(ProgArray[i]);
	}
	document.addEventListener("keyup", myfunction);
	MyArray = FullArray;
});

function myfunction(){
	var input;
	var found;
	input = document.getElementById("searchText").value;
	document.getElementById("searchList").innerHTML = "";
	
	var len = input.length;
	for(var i = 0; i < MyArray.length; i++)
	{
		found = false;
		if(MyArray[i].substring(0,len).toLowerCase() == input.toLowerCase() && len != 0)
			found = true;
		else
			found = false;
		
		if(found == true)
		{
			var add = MyArray[i];
			$("#searchList").append('<li><a href="https://www.google.com/#q='+add+'">'+ add + '</a></li>');
		}
	}
}