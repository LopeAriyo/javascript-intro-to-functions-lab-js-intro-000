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
 if (string.toLowerCase() === string) {
   return "I can\'t hear you!"
 }
 if (string.toUpperCase() === string) {
   return "YES INDEED!"
 }
 if ("I love you, Grandma" === string) {
   return "I love you, too."
 }


}
