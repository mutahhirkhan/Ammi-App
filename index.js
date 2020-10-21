console.log("connected");

//gloal variables
var price = document.querySelector("#todaysPrice");
var date = document.querySelector("#currentDate");
var doneBtn = document.querySelector("#doneBtn");
var totalPrice = document.querySelector("#totalPrice");
var resetBtn = document.querySelector("#resetBtn");

//function
var inputPrice = (e) => {
  var currentPrice = Number(price.value);
  var currentDate = date.value;

  if (currentPrice === "" || currentDate === "") {
    alert("پہلے لکھیں !!!");
    e.preventDefault();
  } else {
    e.preventDefault();
    
    Number(localStorage.getItem(currentPrice));
    localStorage.setItem(currentDate, currentPrice);
    doit();
  }
};

doit();

//total Price
function doit() {
  let num = 0;
  for (let i = 0; i < localStorage.length; i++) {
    num += Number(localStorage.getItem(localStorage.key(i)));
  }
  totalPrice.innerHTML = num;
  console.log(num);
}

//event listeners
doneBtn.addEventListener("click", inputPrice);
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  alert("حساب برابر");
});

console.table(localStorage)