const spendingInput = document.querySelector("#spending-input")
const priceInput = document.querySelector("#price-input")
const formBtn = document.querySelector(".btn")
const list = document.querySelector(".list")
const totalInfo =document.querySelector("#total-info")
const statusCheck =document.querySelector("#status-input")
const selectFilter = document.querySelector("#filter-select")




formBtn.addEventListener("click", addExpense);
list.addEventListener("click", handleClick);
selectFilter.addEventListener("change",handleFilter)


let total =0;




function harcamaEklendi(){
    console.log("Harcama eklendi!")
    sesiOynat();
}


function updateTotal(price){
      total+= Number (price);


      totalInfo.textContent = total;
}


function addExpense(e){
    e.preventDefault()
   // console.log('tiklandi')

   //console.log(spendingInput.value , priceInput.value)

   if(!priceInput.value || !spendingInput.value){
    alert("Bos gider Eklenemez")
    //fonksiyonu durdruru
    return;
   }

   const spendingDiv =  document.createElement("div");
   
   //class ekleme

   spendingDiv.classList.add("spending")


   if(statusCheck.checked){
    spendingDiv.classList.add("payed")
   }
   
   

   //icerik ayarlama

   spendingDiv.innerHTML =`<h2>${spendingInput.value} = </h2>
   <h2 id="value">${priceInput.value}</h2>
   <div class="buttons">
        <img id="payment"src="images/payment.png" alt="" width="50px" height="50px">
        <img id="remove" src="images/delete.png" alt="" width="50px" height="50px">
   </div>`

      

   //listeye elaman eklemek

    list.appendChild(spendingDiv);

    updateTotal(priceInput.value)
    harcamaEklendi();

    spendingInput.value = "";
    priceInput.value = "";


}


function handleClick(e){
    const element = e.target;

    if(element.id === "remove"){
        const wrapper = (element.parentElement.parentElement)

     const deletedPrice =   wrapper.querySelector('#value').innerText;
      Number(deletedPrice.innerText);


      updateTotal (- Number(deletedPrice));

        wrapper.remove();
    }

    //console.dir(element)
}

//filtreleem islemleri 

function handleFilter(e){
    console.log(e.target.value);

    //child nodees : parent elementin tersine kapsayiciya dogru degilde elemana dogru ilerleme

    const items = list.childNodes;
    items.forEach((item) => {
      switch (e.target.value) {
        case "all":
          item.style.display = "flex";
          break;
  
        case "payed":
          // yalnızca classında "payed" olanlar silinsin
          if (!item.classList.contains("payed")) {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
          break;
  
        case "not-payed":
          if (item.classList.contains("payed")) {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
          break;
      }
    });
  }   
     


