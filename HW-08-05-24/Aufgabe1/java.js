test.addEventListener("input", function reverse() {
    let text = test.value;
    let reverseText = text.split('').reverse().join('');


    console.log(reverseText);
});