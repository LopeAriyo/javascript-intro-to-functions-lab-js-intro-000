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
  var lowercase = 'hello!'
  var uppercase = "HELLO!"
  var mixedcase = 'Hi there!'

  if (string.toLowerCase === lowercase) {
    return "I can't hear you!"
  }else if (string.toUppercase === uppercase){
    return "YES INDEED!"
  }else if (string === 'I love you, Grandma.'){
    return "I love you, too."
}
}
