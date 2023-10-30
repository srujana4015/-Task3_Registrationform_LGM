var name = document.querySelector("#name");
var email = document.querySelector("#email");
var url = document.querySelector("#url");
var imgurl = document.querySelector("#url2");
var gender = document.getElementsByName("gender");
var check = document.getElementsByName("check");

var checkbox = document.querySelector(".b");
var submit = document.querySelector("#red");
var clear = document.querySelector("#green");
var card = document.querySelector(".card");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");
var p5 = document.querySelector("#p5");
var btn = document.querySelector("#red");
var enroll = document.querySelector("#enroll");

function now() {
  btn.addEventListener("click", function () {
    if (document.querySelector("input").value.length == 0) {
      alert("Fill all the Fileds");
    } else {
      for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
          var result = (document.querySelector("#p4").innerHTML =
            gender[i].value);
      }

      document.querySelector("#right-box").innerHTML += `<div class="card">
         <div class="photo"><img src="${
           document.querySelector("#url2").value
         }" alt=""></div>
         <p class="para" id="p1">Name: ${
           document.querySelector("#name").value
         }</p>
         <p class="para" id="p2">Email: ${
           document.querySelector("#email").value
         }</p>
         <p class="para" id="p3">Website: ${
           document.querySelector("#url").value
         }</p>
         <p class="para" id="p4">Gender:  ${result}</p>
         <p class="para" id="p5">Skills:  ${
           document.querySelector("#enroll").value
         }</p>
     </div>`;

      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#url").value = "";
      document.querySelector("#url2").value = "";
      document.getElementsByName("gender").value = "";
      document.querySelector("#enroll").value = "";
    }
  });
}

function clearfun(){
    clear.addEventListener("click", function(){
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#url").value = "";
        document.querySelector("#url2").value = "";
        document.getElementsByName("gender").value = "";
        document.querySelector("#enroll").value = "";
    })
}

now();
clearfun();