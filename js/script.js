$( "document" ).ready(function() {

function PL(string){
var vowels = ["a","A","e","E","i","I","o","O","u","O"]

for (i = 0; i < vowels.length; i++) {
    if(string.charAt(0) == vowels[i].numero)
        {
            string = word + "ay";
            return(word);
            //return true;
            console.log("vowel");
        }
    else{
        word = string.slice(1);
        word = word + "ay";
        return(word);
            console.log("not");

    }


}

}

$("button").onClick(function(){
        $(".output").text("");
        $(".output").text(PL($("input").val()));
    });

});