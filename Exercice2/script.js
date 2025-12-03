// - Créer une variable pour le nom de la boutique
const shopname= "JE SUIS";
// - Créer une variable pour la ville
const city = "Lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
 let isOpen = "true";
// - Créer une variable pour le nombre de produits
let productCount = "50";
// - Créer une variable pour le slogan
const slogan = "Des goodies pour développeurs passionnés"
// - Créer une variable pour le bienvenue
const bienvenue = "bienvenue dans notre magasin"
// - Afficher un message de bienvenue dans la console
console.log(bienvenue);


// - Afficher le slogan dans la console
console.log(slogan);

// - Selon la variable qui indique si la boutique est ouverte :
console.log("c'est ouvert");

//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”

//  nouveauté exo 2

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables

let welcomMessage = bienvenue+" "+ slogan;
let welcomMessage2 = `${slogan} ${bienvenue}`;
console.log(welcomMessage+""+ welcomMessage2); 


//   (indice : utiliser l’opérateur pour concaténer des chaînes)

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
console.log();

//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})

// - Calculer la longueur du slogan
let tailleslogan = slogan.length;
console.log(tailleslogan);


// - Créer une version en majuscules du slogan

// - Créer une version du slogan où un mot est remplacé par un autre

//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let modif = bienvenue.replace ("magasin", "site");

console.log(modif);


// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console

