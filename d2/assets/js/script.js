
function generazione(){
    let budget = 1000;
    let compere = 0;
    while(budget > 0) {

    let prezzi = Math.floor(Math.random()*100);
    if(prezzi<=budget){
        compere += 1;
        budget-= prezzi;

        document.getElementById('totale').innerHTML += '<p>Ammontare della spesa: &euro;' + prezzi + '<br>Nuovo budget aggiornato: &euro; ' + budget + '</p>';
        budget++;
    }
  
     if(budget < 200){
    document.getElementById('stop').innerHTML += '<p>Stai spendendo troppo! Il budget è inferiore a 200&euro;!</p>';
    break;
    }
}
}