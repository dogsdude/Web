<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title> Practice ES6! </title>
  <script>
  //I am unsure if any of these acutally work as I was unable to get the es6 console to even function
  //after creating a new "lab11" object and trying to log to console... no luck... I think they are correct though!
  export class lab11{
   testDefaultParameters(first, second=100){
     retObj = { "one":first, "two":second };
     //console.log(retObj);
     return retObj;
   }

    testTemplateLiterals(firstName, middleName, lastName){
      var nameTemplate = `${firstName} ${','} ${middleName} ${','} ${lastName}`;
      return nameTemplate;
    }

    testMultilineStrings(){
      var longBoi = `   This
      goes
 	 	across
 					multiple
 lines!!
  									!!!!!!
  :)
 				!!!!!!`
    }

    testSortWithArrowFunction(numArray){
      numArray.sort(sortArray => sortArray);
    }

    testSortWihtoutArrowFunction(numArr){
      numArr.sort(function(a,b) {return (b-a)});
    }
  }
 // let myLab = new Lab11;
 //
 // console.log(myLab.testDefaultParameters (10));
 //
 // console.log(myLab.testTemplateLiterals ('Sam','Joseph','Lindsey'));
 //
 // console.log(myLab.testMultilineStrings());
 //
 // let numAr = [2,6,1,5];
 // console.log(myLab.testSortWithArrowFunction(numAr));
 // console.log(myLab.testSortWithoutArrowFunction(numAr));
</script>
</head>
</html>

//import {test} from './class';
// export class blah

// export (addsum, multsum)
// import
// ?*class.js */
// export class test {
//    getSum(a,b){
//    return sum(a,b);
//    }
// }

//write it in es6 console
//don't do EXPORT until you turn it inspect

//export Lab11 {
//foo(){
//return "bar";
//}
//}
//let myLab = new Lab11
//console.log(myLab.foo)

//argument =100

//console.log('${foo}${bar}``')

//console.log(`I am a multilin string.
//so great`)
