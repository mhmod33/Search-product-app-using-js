const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitem.getElementsByTagName("h2");

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = ""; // Fix: use "style.display" instead of "getElementsByClassName.display"
            } else {
                product[i].style.display = "none"; // Fix: use "style.display" instead of "getElementsByClassName.display"
            }
        }
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     // Add event listener to HTML input element with ID "search-item"
//     document.getElementById("search-item").addEventListener('keyup', search);
// });
let searchitem = document.getElementById("search-item");
let clearbutton=document.getElementById("clear-button");
clearbutton.addEventListener('click',function (){
    searchitem.value = '';
});
