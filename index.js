function isPalindrome(str) {
  var rev="";
  for(var i=str.length-1; i>=0; i--){
      rev+= str[i];
  }
  if(rev==str){
      return true
  } else{
      return false;
  }
}

var str1 = "abba";
var str2 = "racecar";
var str3 = "robot";
var str4 = "a";