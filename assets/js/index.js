
  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 500,  
      delay: (el, i) => 30 * i 
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 500,  
      easing: "easeOutExpo",
      delay: 500  
    });

