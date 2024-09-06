(async function getApi(){
    var item =await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var names =await item.json();
    var element=names.recipes;
    var myText = "";
    
    for(var i=0; i<element.length; i++){
    
    var cartoona= `
                  <div class="col-md-4  text-center mb-4 pb-2 d-inline" >
                  <img src="${element[i].image_url}"  style="height:250px" class="img-fluid" >
                 <h2>${element[i].title}</h2>
                 <h5>${element[i].publisher}</h5>
                 </div>
                 `;
    
    myText =myText+cartoona;
    }
    document.querySelector(".test").innerHTML = myText;
   })();