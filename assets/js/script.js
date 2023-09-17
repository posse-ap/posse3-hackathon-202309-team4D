
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



// 45行目まで日向担当のjs


// ヘッダー・ボタンの要素を取得
const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

// ボタンをクリックした時の処理
button.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

const FADEIN_ELEM = document.getElementById('fadein-1');

window.addEventListener('scroll',() =>{
    const FADEIN_ELEM_TOP =FADEIN_ELEM.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM.classList.add('con-inner-after');
    }else{
        FADEIN_ELEM.classList.remove('con-inner-after');
    }
});

window.onload = function(){
    const spin = document.getElementById('loading');
    spin.classList.add('loaded');

}

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
    textarea = "<div class='frame'>" + "<p class='problem'>" + textarea + "</p>" +
      "<button type='button' + class='far fa-thumbs-up' id='goodbutton'>" +
      "できた👍" + "</button>" + "<a id='clicks'>" + counter + "</a>" +
      "</div>" + document.getElementById("insert").innerHTML;
    document.getElementById("insert").innerHTML = textarea;
    document.getElementById("goodbutton").onclick = function() {
      counter += 1;
      document.getElementById("clicks").innerHTML = counter;
    }
  }




