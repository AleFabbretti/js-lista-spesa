/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
  gli elementi della lista individualmente con un ciclo while.
  */

  "use strict"

  const listShopping = ["acqua", "pane", "pasta", "frutta", "vino"];

  const listContainer = document.getElementById("shopping-list");

 //creo il ciclo while
  let currentIndex = 0;
  while( currentIndex <= listShopping.length -1){

    //creo un elemento 
    let item = document.createElement("li");

    //vado ad impostare il contenuto dell'item
    item.innerHTML = listShopping[currentIndex];

    //inserisco l'elemento appena creato nella lista html
    listContainer.append(item);

    //inserisco istruzioni per terminare il ciclo
    currentIndex++;
 } 