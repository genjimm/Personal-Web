//sound
const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"};

//
//let key1 = document.querySelector(".key1");

const keys = document.querySelectorAll('.key_style');

function MouseEnter() {
  for (const key of keys) {
    key.style.opacity = 1;
    key.style.transitionDuration = "1s";
  }
}

function MouseOut() {
  for (const key of keys) {
    key.style.opacity = 0;
    key.style.transitionDuration = "1s";
  }
}

document.querySelector('.container_keys').addEventListener("mouseover", MouseEnter);
document.querySelector('.container_keys').addEventListener("mouseout", MouseOut);


let keys_pressed = [];
const wcu_code = [87, 69, 83, 69, 69, 89, 79, 85];
let play = true;

function End(event) {
  console.log(event.target.style.transform);
  event.target.style.transform = "scale(1)";
}

document.addEventListener("keydown",KeyDown);
document.addEventListener("transitionend", End);

function KeyDown(event) {
    if (!play) return;
    
    if (event.keyCode in sound) {
      keys_pressed.push(event.keyCode);
      
      let key = document.getElementById(event.keyCode);
      key.style.transform = "scale(1)";
      key.style.transitionDuration = "1s";
      
      let audio = new Audio(sound[event.keyCode]);
      audio.play();
    }
    
    if (keys_pressed.length === 8) {
      if (keys_pressed.join() === wcu_code.join()) {
        console.log("we see you");
        document.querySelector(".container_keys").style.opacity = 0;
        document.querySelector(".title").style.opacity = 0;
        let img_Cthulhu = document.querySelector(".img_Cthulhu");
        img_Cthulhu.style.opacity = 1;
        img_Cthulhu.style.transitionDuration = "4s";
        img_Cthulhu.style.zIndex = 4;

        let string = document.querySelector(".string_awoken");
        string.style.opacity = 1;
        string.style.transitionDuration = "10s";
        string.style.zIndex = 5;

        let audio = new Audio("https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1");
        audio.play();
        play = false;
      }
      
      keys_pressed.shift();
    }
  }