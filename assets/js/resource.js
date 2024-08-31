document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data/scienceTechnology.json') 
     .then(response => {
        console.log("JavaScript file loaded successfully!");
       if (!response.ok) {
         throw new Error('Network response was not ok ' + response.statusText);
       }
       return response.json();
     })
     .then(data => {
       const   
     galleryContainer = document.getElementById('gallery-container');
       data.categories.forEach(category => {
         const galleryItem = `
           <div class="col-lg-4 col-md-6 grid-item ${category}  wow fadeInUp ">
             <div class="single-gallery  ">
               <div class="image ">
                 <img src="${category.image}" alt="${category.title} " class="object-fit-md-contain" >
               </div>
               <div class="overlay">
                 <div class="overlay-content">
                   <div class="action">
                     <a href="${category.link}"> <i class="lni lni-link"></i> </a>
                   </div>
                   <div class="info-main">
                     <h5>${category.title}</h5>
                     <p>${category.description}</p>
                   </div>
                 </div>
               </div>
               <div class="info">
                  <h5>${category.title}</h5>
                </div>
             </div>
           </div>
         `;
         galleryContainer.innerHTML += galleryItem;
       });
     })
     .catch(error => {
       console.error('Error loading the gallery data:', error);
      
       galleryContainer.innerHTML = `<p>Error loading gallery data. Please try again later.</p>`;
     });
    });

    function searchGallery() {
        const searchText = document.querySelector('.search-input').value.toLowerCase();
        const galleryFiles = document.querySelectorAll('.card-inner');
      
        galleryFiles.forEach(file => {
          const fileName = file.querySelector('.mg-text span').textContent.toLowerCase();
          if (searchText === '') {
            file.style.display = 'block'; 
          } else if (fileName.includes(searchText)) {
            file.style.display = 'block';
          } else {
            file.style.display = 'none';
          }
        });
      }
      
     
      document.querySelector('.search-input').addEventListener('input', searchGallery);

    