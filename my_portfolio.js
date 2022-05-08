// const h2 = document.querySelector('.top-row h2');

// h2.style.color = 'red';

// h2.innerHTML = 'something else';

// var my_text = 'this is my string of text';

// console.log(my_text);


var age = 42; // number or integer
var name = 'JD'; // string

// css, text, 


// $('body').html('<div>blah</div>');

$('.top-row h2').text('something different').css('color', 'red');

$('p').text(`some text`);

$('button').click(function () {
  // $(this).css('color', 'purple');
  // $('.my-paragraph').siblings('p').css('background', 'red');
  $('.my-paragraph').parent().css('background', 'red');
});

// function myFunc(somethingThatWasPassedIn) {
//   console.log(somethingThatWasPassedIn);
// }

// myFunc('hey, print this string!');
// myFunc('different');
// myFunc('new string!');