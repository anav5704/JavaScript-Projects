// document.addEventListener("mousemove", function(e) {
//     let cursor = document.querySelector(".customCursor");
//     console.log("X: " + e.clientX + ", Y: " + e.clientY);
//     cursor.style.top = e.clientY + "px";
//     cursor.style.left = e.clientX + "px";
// }); 

let div = document.getElementById("thediv");
let newcss = document.getElementsByName ("newcss");

function update() {
    div.style.marginTop = "20px";
    for( i = 0; i < newcss.length; i ++ ) {
        let newProperty = newcss[i].id;
        let newValue =  newcss[i].value;
        div.style[ newProperty ] = [newValue];
    }
}

document.getElementById("make").addEventListener('click', update);

var user = {
    name: "anav" ,
    surname: "chand"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

for (i = 1; i < 6; i++) {
    console.log(i);
}

var array = [1,3,4,5,6,7,8,9,10];
array.forEach( i => {
    if (i % 2 == 0){
        console.log(i);
    }
});

let h = document.getElementById("Height");
let w = document.getElementById("Weight");
let ans = document.getElementById("bmi");

h.addEventListener('input', height); 
h.addEventListener('input', calcBMI); 
w.addEventListener('input', weight); 
w.addEventListener('input', calcBMI); 

function height(){
    document.querySelector('.myheight').innerHTML = h.value + " cm";
};

function weight(){
    document.querySelector('.myweight').innerHTML = w.value + " kg";
};

function calcBMI() {
    var mybmi =  w.value / (Math.pow((h.value / 100), 2));
    ans.innerHTML = "Your BMI is: " + addZero(mybmi.toPrecision(2));
    if (mybmi < 18.5) {
        ans.style.borderColor = "orange";
    }   

    else if( mybmi >= 18.5 && mybmi < 24.9) {
        ans.style.borderColor = "lime";
    }

    else if( mybmi >= 25 && mybmi < 39.9) {
        ans.style.borderColor = "orange";
    }

    else {
        ans.style.borderColor = "red";
    }

}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
setInterval ( () => {
    let date = new Date();
    document.querySelector(".hr").innerHTML = addZero(date.getHours() % 12);
    document.querySelector(".min").innerHTML = addZero(date.getMinutes());
    document.querySelector(".sec").innerHTML = addZero(date.getSeconds());
}, 1000);

let check = document.getElementById("hide-show");
check.addEventListener('click', change);
let password = document.querySelector(".password");

function change() {
    if (password.type === "password") {
        password.type = "text";
        check.innerHTML = "<i class=\"fa-solid fa-eye\"></i>";
      } else {
        password.type = "password";
        check.innerHTML = "<i class=\"fa-solid fa-eye-slash\"></i>";

      }
};

var music = [
    {
        name: "Can't Feel My Face",
        artist: "The Weeknd",
        cover: "image/1.jpg",
        song: "music/1.mp3",
        color: "gold"
    },

    {
        name: "Reminder",
        artist: "The Weeknd",
        cover: "image/2.jpg",
        song: "music/2.mp3",
        color: "teal"
    },

    {
        name: "Starboy",
        artist: "The Weeknd",
        cover: "image/3.jpg",
        song: "music/3.mp3",
        color: "red"
    },

    {
        name: "Never Gonna Give You Up",
        artist: "Rick Astley ",
        cover: "image/5.jpg",
        song: "music/5.mp3",
        color: "white"
    },

    {
        name: "Die For You (remix)",
        artist: "The Weeknd & Ariana Grnade",
        cover: "image/4.jpg",
        song: "music/4.mp3",
        color: "red"
    }

]

let musicPlayer = document.getElementById("song");
let pp = document.querySelector(".playpause");
let tt = document.querySelector("#tracktime");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let border = document.querySelector(".musicborder");
let head = document.getElementById(("musicheader"));

let name = document.getElementById("name");
let artist = document.getElementById("artist");
let image = document.getElementById("image");
let song = document.getElementById("song");

let a = 1;

next.addEventListener("click", () => {
    a++;
    a = a%5;
    updatesong();
})

prev.addEventListener("click", () => {
    a--;
    if (a < 0) {
        a = 4;
    }
   updatesong();
})

function updatesong(){
    name.innerHTML = music[a].name;
    artist.innerHTML = music[a].artist;
    image.src = music[a].cover;
    song.src = music[a].song;
    border.style.borderColor = music[a].color;
    head.style.color = music[a].color;
    pp.innerHTML = "<i class=\"fa-solid fa-pause\"></i>"
    console.log(a)
}

pp.addEventListener("click", playpause);
tt.addEventListener("input", seekTo)

setInterval( () => {
    tt.value = (musicPlayer.currentTime / musicPlayer.duration) * 100;
    if (musicPlayer.currentTime == musicPlayer.duration){
        a++;
        a = a%5;
        updatesong();
    }
},100);

function seekTo(){
    musicPlayer.currentTime = (tt.value / 100) * musicPlayer.duration;
    pp.innerHTML = "<i class=\"fa-solid fa-pause\"></i>"

}

function playpause(){
    if(musicPlayer.paused) {
        musicPlayer.play();
        pp.innerHTML = "<i class=\"fa-solid fa-pause\"></i>"
    }
    else {
        musicPlayer.pause();    
        pp.innerHTML = " <i class=\"fa-solid fa-play\"></i>"
    }
}

let ToDoList = [];
let addToDo = document.getElementById("todo");
let newToDo = document.getElementById("addnew");
let List = document.getElementById("todoItems");

addToDo.addEventListener("click", addToDoItem);

function addToDoItem(){
    List.style.marginTop = "10px";
    ToDoList.push(newToDo.value);
    List.innerHTML = "";
    ToDoList.forEach( i => {
        List.innerHTML += `<li>${i}</li>`;
    });
};

document.getElementById("gen").addEventListener("click", generatePassword)
function generatePassword(length) {
    length = document.querySelector(".length").value;
    // define character sets
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    // combine character sets into one string
    const allChars = upperCaseLetters + lowerCaseLetters + numbers + symbols;
  
    // generate password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    document.getElementById("pass").innerHTML = password;
    return password;

}










