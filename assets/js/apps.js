$(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true, 
    autoplayTimeout:2000,
    autoplayHoverPause: true,
   
    dots:false,
    smartspeed: 1000,
   items:1,
    responsive:{
        0:{
         nav:false
        },
        780:{
         nav:true
        },
        1000:{
          
        }
 
 
    }
}
)
 $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false, 
    smartspeed: 1000,
    dots:true,
     margin: 20,
    
    responsive:{
        0:{
        items:1,
        margin:0,
        },
        780:{
        items:2
        },
        1140:{
          items:2, 
          center: true 
          
        }
 
 
    }
}



)

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 1,
    smartspeed: 800, 

      autoplay: true,
     autoplayTimeout:5000,
    autoplayHoverPause: true,
   
})

})


AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

$(function(message){
 const leadershipmsg = 'Our experienced leadership team drives innovation and fosters collaboration, leading with integrity to achieve sustainable success and lasting impact.'
}
)

document
  .getElementById("donation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById("name").value;
    const donationAmount = document.getElementById("donationAmount").value;

    // Show thank you message
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.innerHTML = `Thank you, ${name}, for your generous donation of $${donationAmount}!`;
    thankYouMessage.style.display = "block";

    // Reset the form
    document.getElementById("donation-form").reset();
  });