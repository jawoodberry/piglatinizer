$("document").ready(function() {
function PL(string){
    // check for vowels
if (string.charAt(0) === "a" ||string.charAt(0) === "e" ||
string.charAt(0) === "i" ||string.charAt(0) === "o" ||
string.charAt(0) === "u"){
word = string.slice(1);
first = string.charAt(0);
word = word + first + "way";
return(word);
   // return("");
}
else {
    // stanard
word = string.slice(1);
first = string.charAt(0);
word = word + first + "ay";
return(word);
}}

$("button").click(function(){
    $(".output").text(PL($("input").val()));

});

// end
});