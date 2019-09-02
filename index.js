function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("hello".toUpperCase())
}
function logWhisper(string) {
  console.log("Hello".toLowerCase())
}
function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  var lowercase = "hello!"
  
  if (string.toLowerCase === lowercase) {
    return "I can\'t hear you!"
  }else if (string === "I love you, Grandma."){
  return "I love you, too."
  }
}
