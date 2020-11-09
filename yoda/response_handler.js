// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

// Execute a function when the user releases a key on the keyboard

function respond() {
    // Your Code Here
    //console.log("Hello World!");
    var input = document.getElementById("textbox").value;
    var old_img = document.getElementById("pic_yoda");
    var old_text = document.getElementById("quote");
    console.log(input); // print value of the textbox

    var isbaby = false;
    var type;

    var allImages = ["img/cute-std.jpg", "img/cute-force.jpg", "img/cute-dark.jpg", "img/regular-dark.jpg", "img/regular-force.jpg", "img/regular-std.jpg"];
    var img;

    if (input.includes("cute") || input.includes("baby")) {
      isbaby = true;
      if (input.includes("force")){
        if (input.includes("dark")){
          img = 2;
        }
        else {
          img = 1;
          //console.log("force");
        }
      }
      else{
        img = Math.floor(Math.random() * 3);
        //console.log(allImages[img])
     }
  }
  // if not cute yoda
  else{
    if (input.includes("force")){
      if (input.includes("dark")){
        img = 3;
        type = "dark";
      }
      else {
        img = 4;
        type = "force";
      }
    }
    else{
      img = Math.floor(Math.random() * 3) + 3;
      type = "std"
      //console.log(allImages[img])
   }
  }

  old_img.setAttribute("src", allImages[img]);
  // use innerHTML to change content of an HTML element
  old_text.innerHTML = getQuote(isbaby, type);
  // input = '' does not clear the textbox [why?]
  document.getElementById("textbox").value = '';

}


function getQuote(isbaby, type){
  var quote;
  m = "m";
  if (isbaby){
    quote = "h" + m.repeat((Math.random()*30)+1);
  }
  else {
    var quoteNum = Math.floor(Math.random()*5);
    if (type === 'dark'){
      quote = dark_quotes[quoteNum];
    }
    else if (type === "force"){
      quote = dark_quotes[quoteNum];
    }
    else {
      quote = std_quotes[quoteNum];
    }
  }
  return quote;
}
