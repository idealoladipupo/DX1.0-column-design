ScrollReveal({ 
    reset: true,  
    distance: '100px', 
    origin: 'left', 
    duration: 2000,
 });

ScrollReveal().reveal('.logotext', {
    origin: 'right', 
    scale: 3, 
    distance: '800px',
});

ScrollReveal().reveal('.heading');

ScrollReveal().reveal('.firstsection-leftdiv p', {
     origin: 'right',   });
ScrollReveal().reveal('.line', {origin: 'bottom',  delay: 1000,});
ScrollReveal().reveal('.secondsection-leftdiv', {
    rotate: {
            y: 180,
         }
});