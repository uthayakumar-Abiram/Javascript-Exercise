var x="Learn Javascript";
console.log(x.length);
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.substr(0,6)) 
console.log(x.split( ));
var y="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(y.split(","));
console.log(x.replace("learn Javascript","30 Days Of Python"));
console.log(x.charAt(15));
console.log(x.charCodeAt("J"));
console.log(x.indexOf('a'));
console.log(x.lastIndexOf('a'));
var c='You cannot end a sentence with because because because is a conjunction'
console.log(c.indexOf('because'));
console.log(c.lastIndexOf('because'));
console.log(c.search('because'));
//trim is remove the space
console.log(x.trim());
//Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
console.log(x.startsWith());
console.log(x.endsWith());
console.log(x.match('a'))
var k='30 Days of';
console.log(k.concat(x));
console.log(x.repeat(999));


