//An example: 
//set up data
var shoes = [['Jack Erwin',99.99],['UGG',89.99],['Nike',65.99]]; 
//display in HTML w/JQuery: 
for (var i=0; i<shoes.length; i++) {
    $('body').append("<h3>"+shoes[i][0]+"</h3>"+"<p>$"+shoes[i][1]+"</p>"); 
}

