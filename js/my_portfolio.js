// const h2 = document.querySelector('.top-row h2');

// h2.style.color = 'red';

// h2.innerHTML = 'something else';

// var my_text = 'this is my string of text';

// console.log(my_text);


var age = 42; // number or integer
var name = 'JD'; // string

// css, text, 


// $('body').html('<div>blah</div>');

// $('.top-row h2').text('something different').css('color', 'red');

// $('p').text(`some text`);

// // Notice how I didn't use a # - id css selector. Since we only had one button on the page, I just selected it using the css selector "button"
// $('button').click(function () {
//   // $(this).css('color', 'purple');
//   // $('.my-paragraph').siblings('p').css('background', 'red');
//   $('.my-paragraph').parent().css('background', 'red');
// });

/**
* For comparison, this vanilla javascript code is the same as the code from lines 25-29. Much simpler and condensed. 
*/
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const p = document.querySelector('.my-paragraph');
//   const p_parent = p.parentNode;
//   const p_siblings = p_parent.children;

//   for (var i = 0; i < p_siblings.length; i++) {
//     const current_sib = p_siblings[i];
   
//     if (current_sib !== p && current_sib.tagName === 'P') {
//       current_sib.style.background = 'red';
//     }
//   }
// });


// We create functions using the function keyword and a custom name, followed by 
// opening/closing parens and opening/closing curly braces

// function myFunc(somethingThatWasPassedIn) {
  // the param or variable above is used to reference the value we passed in when calling the function
  // console.log(somethingThatWasPassedIn);
// }

// We call a function using it's name, followed by opening/closing parens
// We can also pass values into functions when we call them. The values can be used in the function as you see above
// myFunc('hey, print this string!');
// myFunc('different');
// myFunc('new string!');