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

  if ("Hello".toLowerCase === string) {
    return "I cant hear you!"
  }else if (string.toUppercase === "HELLO!"){
    return "YES INDEED!"
  }else if (string === 'I love you, Grandma.'){
    return "I love you, too."
}
}
