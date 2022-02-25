// let btn=document.getElementById("Add");
// let buttons=document.getElementsByClassName("btn-add")
// let tags=document.getElementsByTagName("button")
// console.log(tags) 
// // let btn=document.querySelector(".btn-add")
// // let btns=document.querySelectorAll(".btn-add")
// // console.log(btns.length) 

// // // btn.onclick=function(){
// //     alert("Salam")
// // }
// // btn.addEventListener("click",function(){
// //     alert("Sagol")
// // })

// let str=document.getElementsByTagName("p")
// str[0].addEventListener("copy",function(){
//     alert("kopya olmaz")
// })

// // let str=document.getElementById("text").innerText;
// // console.log(str)


// // let html=document.getElementById("text").innerHTML="<b>yeni text metni</b> salam"

// // let val=document.querySelector("#num").value;
// // document.querySelector("#num").value="Serxan"
// // console.log(val)



var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true ||false})
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true ||false })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  