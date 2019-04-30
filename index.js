function shout(string) {
  return string.toUpperCase()
} // HELLO

function whisper(string) {
  return string.toLowerCase()
} // hello 

function logShout(string) {
  console.log(string.toUpperCase())
} 

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  return "I can't hear you!"
}

<<<<<<< HEAD
function sayHiToGrandma(string) {
 if (string.toLowerCase() === string) {
   return "I can't hear you!";
} if (string.toUpperCase() === string) {
  return "YES INDEED!"
} if (string === 'I love you, Grandma.') {
  return "I love you, too."
}}
=======
function sayHitoGrandma(string) {
  return "YES INDEED!"
}

function sayHitoGrandma(string) {
  return "I love you, too."
}
>>>>>>> b75d1608332c5f3cc94a35d86bda74d2d80898ca
