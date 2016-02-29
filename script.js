var personone = ["Hey",
                    "I think your beautiful and I would like to get to know you",
                    "Thanks can we go on a date",
];
var persontwo=["Hey"," Thanks I'd like to get to know you a little better too" ,"A date would be lovely. what time and where?"];


// A $( document ).ready() block.
$( document ).ready(function() {
    //console.log( "ready!" );
    
    for (var i=0; i < personone.length; i++  ) {
        $( "#chat" ).append( "<p class='person1'>"+ personone[i]+"</p>" );
        $( "#chat" ).append( "<p class='person2'>"+ persontwo[i]+"</p>");
    }
    
    
    
    
});