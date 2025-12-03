// // - Créer une variable pour le nom de la boutique
// const shopname= "JE SUIS";
// // - Créer une variable pour la ville
// const city = "Lyon";
// // - Créer une variable booléenne pour savoir si la boutique est ouverte
//  let isOpen = "true";
// // - Créer une variable pour le nombre de produits
// let productCount = "50";
// // - Créer une variable pour le slogan
// const slogan = "Des goodies pour développeurs passionnés"
// // - Créer une variable pour le bienvenue
// const bienvenue = "bienvenue dans notre magasin"
// // - Afficher un message de bienvenue dans la console
// console.log(bienvenue);


// // - Afficher le slogan dans la console
// console.log(slogan);

// // - Selon la variable qui indique si la boutique est ouverte :
// console.log("c'est ouvert");

//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”

//  nouveauté exo 2

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables

// let welcomMessage = bienvenue+" "+ slogan;
// let welcomMessage2 = `${slogan} ${bienvenue}`;
// console.log(welcomMessage+""+ welcomMessage2); 


//   (indice : utiliser l’opérateur pour concaténer des chaînes)

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
// console.log();

//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})

// - Calculer la longueur du slogan
// let tailleslogan = slogan.length;
// console.log(tailleslogan);


// - Créer une version en majuscules du slogan

// - Créer une version du slogan où un mot est remplacé par un autre

//   (indice : il existe une méthode pour remplacer une partie d’un texte)
// let modif = bienvenue.replace ("magasin", "site");

// console.log(modif);


// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console

/*************************************************
 * EXERCICE 3 - Nombres, calculs & TVA
 * Notions : opérations mathématiques, incrémentation
 *************************************************/

/* --- Correction Exercice 1 & 2 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//   taglineElement.textContent =
//     "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//   yearSpan.textContent = new Date().getFullYear();
// }

// let welcomeMessage =
//   "Bienvenue dans " + shopName + " située à " + city + " !";
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

// /* --- Nouveautés Exercice 3 --- */

// // Prix d'exemple et TVA


// let examplePriceHT = 20;
// const TVA = 0.2;

// let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

// console.log("Prix HT exemple :", examplePriceHT);
// console.log("Prix TTC exemple :", examplePriceTTC);

// // Compteur de ventes
// let salesCount = 0;
// salesCount++;
// salesCount++;

// console.log("Nombre de ventes :", salesCount);

// - Définir une fonction (calculatePriceTTC(priceHT)) qui :
//     • reçoit un prix HT en paramètre
//     • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
//     • renvoie le prix TTC



// function calculatePriceTTC(priceHT) {
//     const TVA = 0.2;
//     let priceTTC = priceHT + (priceHT * TVA);
//     console.log("Le prix TTC est de: "+priceTTC);
//     return priceTTC
// }

// let priceProduct = 40;
// calculatePriceTTC(priceProduct);

// console.log(examplePriceHT);


// - Définir une autre fonction (formatPrice(price)) qui :
// function formatPrice(price) {
//     let rounded = price.toFixed(2);
//     let formatted = rounded.replace(".", ",") + "€";
//     return formatted;
// }

// // test
// console.log("prix TTC pour 10€ HT : ", formatPrice(calculatePriceTTC(10)));
// console.log("prixTTC pour 19,99€ HT :  ");

// //     • reçoit un prix ( type :nombre)
// //     • arrondit ce prix à 2 décimales
// //     • ajoute le symbole de la monnaie
// //     • renvoie le résultat sous forme de texte
// //       (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)

// // - Tester ces fonctions :
// //     • appeler la fonction de calcul du TTC avec différents prix HT
// //     • passer le résultat dans la fonction de formatage
// //     • afficher le résultat final dans la console




// /* --- Rendu visuel Exo 3 --- */

// // const cartTotalHeader = document.getElementById("cart-total");
// // const cartTotalAside = document.getElementById("cart-total-aside");

// // if (cartTotalHeader) {
// //   cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
// // }
// // if (cartTotalAside) {
// //   cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
// // }

// // const cartMessageElement = document.getElementById("cart-message");
// // if (cartMessageElement) {
// //   cartMessageElement.textContent =
// //     "Exemple de prix TTC affiché dans le panier (exercice 3).";
// // }

// // console.log("Exercice 3 chargé ✅");

// /*************************************************
//  * EXERCICE 4 - Fonctions de prix
//  * Notions : function, paramètres, return, toFixed
//  *************************************************/

// /* --- Correction Exercice 1, 2 & 3 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//   taglineElement.textContent =
//     "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//   yearSpan.textContent = new Date().getFullYear();
// }

// let welcomeMessage =
//   "Bienvenue dans " + shopName + " située à " + city + " !";
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

// const TVA = 0.2;
// let examplePriceHT = 20;
// let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
// let salesCount = 2;

// /* --- Nouveautés Exercice 4 --- */

// // Fonction qui calcule un prix TTC à partir d'un prix HT
// function calculatePriceTTC(priceHT) {
//   return priceHT + priceHT * TVA;
// }

// // Fonction qui formate un prix en "xx,xx €"
// function formatPrice(price) {
//   return price.toFixed(2).replace(".", ",") + " €";
// }

// // Tests dans la console
// console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
// console.log(
//   "Prix TTC pour 19,99€ HT :",
//   formatPrice(calculatePriceTTC(19.99))
// );

// /* --- Rendu visuel Exo 4 --- */

// const cartMessageElement = document.getElementById("cart-message");
// if (cartMessageElement) {
//   cartMessageElement.textContent =
//     "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
// }

// console.log("Exercice 4 chargé ✅");



function calculatePriceTTC(priceHT) {
    const TVA = 0.2;
    let priceTTC = priceHT + (priceHT * TVA);
    console.log("Le prix TTC est de: "+priceTTC);
    return priceTTC
}
function formatPrice(price) {
    let rounded = price.toFixed(2);
    let formatted = rounded.replace(".", ",") + "€";
    return formatted;
}



// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
let featuredProductName = "couette";
let featuredProductPriceHT = 25;
let featuredProductDescription = "Cette couette avec une qualité supérieur";
let featuredProductImage = "https://images.pexels.com/photos/34989773/pexels-photo-34989773.jpeg"



// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)


// product- list ets dans html PAS OUBLIER
const productList = document.getElementById("product-list"); 
// - Définir une fonction (createFeaturedProductCard()) qui :
function createFeaturedProductCard() {

let article = document.createElement("article");

let image = document.createElement("img");
image.src = featuredProductImage;


let title = document.createElement("h3");
title.textContent = featuredProductName;


let priceTTC = calculatePriceTTC(featuredProductPriceHT);
let formmattedPrice = formatPrice(priceTTC);
let price = document.createElement("p");
price.textContent = formmattedPrice;


let desc = document.createElement("p");
desc.textContent = featuredProductDescription; 

// productlist car mon article dans se trouvera dans productlist dans html
productList.appendChild(article);
article.appendChild(image);
article.appendChild(title);
article.appendChild(desc);
article.appendChild(price);

return article

}

createFeaturedProductCard();
// affichage du produit vedette dans la page
// productList.innerHTML= ""; vid  e

//     • crée un conteneur pour la carte  

//       (indice : il existe une méthode du DOM pour créer un élément HTML)
//     • crée une image :
//         - lui donner la source de l'image

//       (indice : pensez aux propriétés des balises <img>)
//     • crée un titre et lui mettre le nom du produit  
 title = document.createElement("h3");
title.textcontent = createFeaturedProductCard;
//       (indice : une propriété permet d’écrire du texte dans un élément)
//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)

    


//     • crée un paragraphe pour afficher le prix TTC
//     • crée un autre paragraphe pour la description
//     • assemble tous les éléments dans le conteneur

//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)

// - Appeler la fonction pour créer la carte

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)







// - créer tableau (productNames)
let productNames = ["table", "chaussure", "pantalon"];

// - créer tableau (productPricesHT)
let productPricesHT = [30, 20, 20];

// - afficher dans la console la longueur du tableau (le nombre d'éléments à l'intérieur)
productNames.length;
productPricesHT.length;
// - définir fonction (afficherProduitsConsole()):
function afficherProduitsConsole () {
    //   - `Pour chaque nom dans mon tableau productNames:`
//     (indice : il faudra récupérer l'index de chaque nom en plus. Donc on doit récupérer 2 informations.)
//       - récupérer prix HT via `prixHT[index]`

productNames.forEach(element => {
    console.log("Le jeur suivant a ete ajouté dans votre panier : " + element);

});

games.forEach((element, index) => {
    console.log(element + " est en position : " + index);
    
    
});
//       - calculer le prix TTC (avec une fonction créée plus tôt dans nos exercices)
//       - formatter prix (avec une fonction créée plus tôt dans nos exercices)
//       - afficher dans la console la phrase : "Produit : Nom — Prix : XX,XX €"
// - appeler la fonction
}
   