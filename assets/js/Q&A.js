function textcopy() {
    var textarea = document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    textarea = "<div class='frame'>" + "<p class='memo'>" + textarea + "</p>" +
    "<form>"+"<input id='answer' rows='4' cols='40' placeholder='アドバイス'>"+"</input>"+"<button type='button' onclick='copy()' id='button'>"+"投稿"+"</button>"+"</form>"+
    "</div>"+ document.getElementById("insert").innerHTML;
    document.getElementById("insert").innerHTML = textarea ;

    function copy() {
        let answer = document.getElementById("answer").value;
        document.getElementById("answer").value = "";
        answer = "<div class='frame'>" + "<p class='memo'>" + answer + "</p>" +
        "</div>"+document.getElementById("output").innerHTML ;
        document.getElementById("output").innerHTML = answer ;
        }
        document.getElementById("button").onclick=function(){
            document.getElementById("answer").innerHTML=answer
        }
    }