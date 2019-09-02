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
  var lowercase = "hello!"
  var uppercase = "HELLO!"
  
  if (string.toLowerCase === lowercase) {
    return "I can't hear you!"
  }else if (string.toUppercase === uppercase){
  return "YES INDEED"
  }
}
