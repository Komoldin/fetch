function fetchFunction() {
  fetch(`http://46.101.146.101:8081/categories/`)
    .then(Response => Response.json())
    .then(data => {
      var ret;
      console.log(data);
      Array.from(data).forEach(item => {
        ret += `
           <div class="fetch-card">
               <p class="fetch-p">${item.id}</p>
               <div class="fetch-text">
                   <span>${item.title}</span>
                   <img src="${item.category_image_url}">
               </div>
           </div>
         `;
      });
      document.getElementById("fetch").innerHTML = ret;
    });
}
fetchFunction();
