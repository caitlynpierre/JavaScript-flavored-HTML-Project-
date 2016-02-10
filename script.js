//An example: 
//set up data
var shoes = [['Jack Erwin',99.99],['UGG',89.99],['Nike',65.99]]; 
//display in HTML w/JQuery: 
for (var i=0; i<shoes.length; i++) {
    $('body').append("<h3>"+shoes[i][0]+"</h3>"+"<p>$"+shoes[i][1]+"</p>"); 
}
//quick explaination of how this works:
//Line 3: 
//var shoes is declared and assigned the value of an array of...3 arrays! Yes arrays can include other arrays. This is also known as a NESTED ARRAY. 
//Each NESTED ARRAY contains two values: a string (the name of a brand) and a number (the price of the item...I'm guessing it's a shoe)
//To access the Nike's price, you say shoes[2][1]. The Nike array is the 3rd item in the array, so it has an index of 2, since we start counting from 0 in arrays--i.e [0,1,2]. Since the third item is also an array, and the price is the second value in the array, we add another pair of square brackets, and ask for the [1] (or second value). So we get the form ARRAY[outside array index][inside array index]. Or in our case, shoes[2][1]. If you want to access the Nike brand name, it's just shoes[2][0]! That gives us the string: 'Nike'

//Line 5-7 sets us up with a for loop. We start from 0, the first thing in our array, and stop when we get to the end of the array (right before we hit shoes.length). We use i++ to go from one item to the next, one by one. 
//Between the {}s (what's known as a BLOCK...don't worry about this too much unless you're curious) is what happens each time through our loop. 

//Line 6: 
//We borrow some helper functions from jQuery. jQuery is a library. Basically, other developers realized there was a easier way to add things to HTML using JavaScript, and wrote some functions, and now many other developers just use their work to save ourselves some time. It's kind of like stealing...but we encourage this kind of stealing in coding and programming. 

//$(selectorName)---Think of this part as if the .html file is a map. When we tell jQuery--> $(selectorName), it means, travel to the part of the html that matches this SELECTOR. Remember, SELECTORS can be html tags, or ids, or classes! And selectorName here is just a placeholder. ***An actual selector should always be a string!*** So $('selectorString') is more like it. 
//In this case, jQuery makes a trip to $('body'), the <body> element, each time our loop runs! Once jQuery is at any element, it can do different things to that element. For example, if you say $('body').hide(), jQuery will basically make your whole webpage disappear! 

//Try it!
$('button').on('click', function() {
  $('body').hide(); 
}); 

//In our case, $('body').append ADDS html to our page. So, knowing what you know now, see if you can figure out how the argument to our .append() method works in our loop!

//Note: You'll often hear the words FUNCTION and METHOD used interchangeably. There are some (important) differences, but for now, think of FUNCTIONS as standalone calls like add(3,4), and METHODS as FUNCTIONS that have another variable/value plus a dot (.) in front of it like: $('body').append(...) or [1,2,3].push(4). All METHODS are FUNCTIONS, but not all FUNCTIONS are METHODS!

