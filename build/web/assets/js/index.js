function  indexOnloadFuntions(){
    checkSessionCart();
    loadProductData();
    
}

async function  checkSessionCart(){
    const  popup = new Notification();
    const response = await fetch("checkSessionCart");
    if (response.ok) {
        
        popup.error({
            message:"Something went wrong! Try again shortly"
        });
        
    }else{
        popup.error({
            message:"Something went wrong! Try again shortly"
        });
    }
}
async function  loadProductData(){
  const popup = new Notification();
const response = await fetch("LoadHomeData");
if (response.ok) {
    const json = await response.json();
    if (json.status) {
        console.log(json);
            loadBrands(json);
      
    } else {
        popup.error({
            message: "Something went wrong! Try again shortly"
        });
    }
}
}
function  loadBrands(json){
      console.log(json);
        const product_brand_container = document.getElementById("product-brand-container");
        let product_brand_card = document.getElementById("product-brand-card");
        product_brand_container.innerHTML = "";
        
        let card_delay = 200;

        json.brandList.forEach(item => {
            let product_brand_card_clone = product_brand_card.cloneNode(true);
            product_brand_card_clone.querySelector("#product-brand-mini-card")
                .setAttribute("data-sal-delay", "200");
            product_brand_card_clone.querySelector("#product-brand-a")
                .href = "search.html";
            product_brand_card_clone.querySelector("#product-brand-title")
                .innerHTML = item.name;
            product_brand_container.appendChild(product_brand_card_clone);
            card_delay+=100;
        });
}

function loadNewArrivals(json){
    
    
} 