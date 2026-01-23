function afficherContact() {
    // Pemret que les données ne figurents pas dans le code html et qu'elles soient cachées
    const email = ["j","d","z","c","o","n","s","e","i","l","@","g","m","a","i","l",".","f","r"].join("");
    const tel = ["0","6",".","1","2",".","3","4",".","5","6",".","7","8"].join("");
    const tel2 = ["0","2",".","4","1",".","3","0",".","3","5",".","2","4"].join("");

    document.getElementById("contactInfo").innerHTML =
        email + "<br>" + tel + "<br>" + tel2;
}



const burger = document.querySelector('.menu-burger'); // Sélectionne l’icône burger
const menu = document.querySelector('nav ul'); // Sélectionne le menu

burger.addEventListener('click', () => { // Écoute le clic sur le burger
    menu.classList.toggle('menu-ouvert'); // Ouvre ou ferme le menu
});