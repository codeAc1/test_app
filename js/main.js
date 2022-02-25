// // let btn=document.getElementById("Add");
// // let buttons=document.getElementsByClassName("btn-add")
// // let tags=document.getElementsByTagName("button")
// // console.log(tags) 
// // // let btn=document.querySelector(".btn-add")
// // // let btns=document.querySelectorAll(".btn-add")
// // // console.log(btns.length) 

// // // // btn.onclick=function(){
// // //     alert("Salam")
// // // }
// // // btn.addEventListener("click",function(){
// // //     alert("Sagol")
// // // })

// // let str=document.getElementsByTagName("p")
// // str[0].addEventListener("copy",function(){
// //     alert("kopya olmaz")
// // })

// // // let str=document.getElementById("text").innerText;
// // // console.log(str)


// // // let html=document.getElementById("text").innerHTML="<b>yeni text metni</b> salam"

// // // let val=document.querySelector("#num").value;
// // // document.querySelector("#num").value="Serxan"
// // // console.log(val)



// // var video = document.querySelector("#videoElement");

// // if (navigator.mediaDevices.getUserMedia) {
// //   navigator.mediaDevices.getUserMedia({ video: true ||false})
// //     .then(function (stream) {
// //       video.srcObject = stream;
// //     })
// //     .catch(function (err0r) {
// //       console.log("Something went wrong!");
// //     });
// // }

// // if (navigator.mediaDevices.getUserMedia) {
// //     navigator.mediaDevices.getUserMedia({ video: true ||false })
// //       .then(function (stream) {
// //         video.srcObject = stream;
// //       })
// //       .catch(function (err0r) {
// //         console.log("Something went wrong!");
// //       });
// //   }


// var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
// var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
// var session;
// var PRELOADER_URL = "https://github.com/flashphoner/flashphoner_client/raw/wcs_api-2.0/examples/demo/dependencies/media/preloader.mp4";
  
// function init_api() {
//     Flashphoner.init({});
//     //Connect to WCS server over websockets
//     session = Flashphoner.createSession({
//         urlServer: "wss://demo.flashphoner.com" //specify the address of your WCS
//     }).on(SESSION_STATUS.ESTABLISHED, function(session) {
//         console.log("ESTABLISHED");
//     });
 
//     startBtn.onclick = startClick;
// }
 
// //Detect browser
// var Browser = {
//     isSafari: function() {
//         return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//     },
// }
 
// function startClick() {
//     if (Browser.isSafari()) {
//         Flashphoner.playFirstVideo(document.getElementById("play"), true, PRELOADER_URL).then(function() {
//             publishStream();
//             playStream();
//         });
//     } else {
//         publishStream();
//         playStream();
//     }
// }
  
// //Publish local stream
// function publishStream() {
//     session.createStream({
//         name: "stream1",
//         display: document.getElementById("local"),
//     }).publish();
// }
  
// //Play remote stream
// function playStream() {
//     session.createStream({
//         name: "stream2",
//         display: document.getElementById("remote"),
//     }).play();
// }
  

var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
var session;
var PRELOADER_URL = "https://github.com/flashphoner/flashphoner_client/raw/wcs_api-2.0/examples/demo/dependencies/media/preloader.mp4";
 
function init_api() {
    Flashphoner.init({});
    //Connect to WCS server over websockets
    session = Flashphoner.createSession({
        urlServer: "wss://demo.flashphoner.com" //specify the address of your WCS
    }).on(SESSION_STATUS.ESTABLISHED, function(session) {
        console.log("ESTABLISHED");
    });

    startBtn.onclick = startClick;
}

//Detect browser
var Browser = {
    isSafari: function() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    },
}

function startClick() {
    if (Browser.isSafari()) {
        Flashphoner.playFirstVideo(document.getElementById("play"), true, PRELOADER_URL).then(function() {
            publishStream();
        });
    } else {
        publishStream();
    }
}

 
//Publish local stream
function publishStream() {
    session.createStream({
        name: "stream1",
        display: document.getElementById("local"),
    }).publish();
}
 
//Play remote stream
function playStream() {
    session.createStream({
        name: "stream2",
        display: document.getElementById("remote"),
    }).play();
}