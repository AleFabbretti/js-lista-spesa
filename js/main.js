/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
  gli elementi della lista individualmente con un ciclo while.
  */

  "use strict"

  const listShopping = ["acqua", "pane", "pasta", "frutta", "vino"];

  const listContainer = document.getElementById("shopping-list");

 //creo il ciclo while
  let currentIndex = 0;
  while( currentIndex <= listShopping.length -1){
    let item = document.createElement("li");

    item.innerHTML = listShopping[currentIndex];

    listContainer.append(item);

    currentIndex++;
 } 