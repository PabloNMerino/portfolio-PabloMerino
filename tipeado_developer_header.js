/*const typed = new Typed('.typed', {
    strings: ['developer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    cursorChar: '|',
    showCursor: true
})
*/

document.querySelectorAll('.typed').forEach(function(el) {
    new Typed(el, {
        strings: ['developer'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        cursorChar: '|',
        showCursor: true
    })
});

