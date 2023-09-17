<<<<<<< HEAD
function textcopy() {
    var textarea = document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    var counter = 0;
    textarea = "<div class='frame'>" + "<p class='problem'>" + textarea + "</p>" +
      "<button type='button' + class='far-fa-thumbs-up' id='goodbutton'>" +
      "できた👍" + "</button>" + "<a id='clicks'>" + counter + "</a>" +
      "</div>" + document.getElementById("insert").innerHTML;
    document.getElementById("insert").innerHTML = textarea;
    document.getElementById("goodbutton").onclick = function() {
      counter += 1;
      document.getElementById("clicks").innerHTML = counter;
    }
  }


=======
// Q&AのためのJS
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

// クイズのためのJS
function textcopy() {
    var textarea = document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    var counter = 0;
    var moji ="testID"
    var tmp =document.getElementByClassName("frame");
    for(var i=0;i<tpm.length-1;i++){
        tmp[i].setAttribute("id",moji+i);
    }
    textarea = "<div class='frame'>" + "<p class='problem'>" + textarea + "</p>" +
      "<button type='button' + class='far fa-thumbs-up' id='testID'>" +
      "できた👍" + "</button>" + "<a id='clicks'>" + counter + "</a>" +
      "</div>" + document.getElementById("insert").innerHTML;
    document.getElementById("insert").innerHTML = textarea;

    document.getElementById("testID").onclick = function() {
      counter += 1;
      document.getElementById("clicks").innerHTML = counter;
    }
  }

