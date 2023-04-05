
// Navbar Scroll
$(function(){
   $(window).on('scroll', function() {
    if($(window).scrollTop()>10){
        $('.navbar').addClass('active');

    }else{
        $('.navbar').removeClass('active');
    }
   });
});


// Add smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior :'smooth'
        });

    });
});






//Random Movement
// const dog = document.querySelector('#dog');

// setInterval(() => {
//     let left = Math.random() * window.innerWidth;
//     let top = Math.random() * window.innerHeight;
//     dog.style.left = `${left}px`;
//     dog.style.top = `${top}px`;
// }, 1000);
