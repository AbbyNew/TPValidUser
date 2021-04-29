// On s'ocuupe de l'input code
const exprRegex = /^CODE-/; // l'input code doit commencer par CODE-

const codeInput = document.getElementById('code'); // élément HTML associé à l'ID code
const messageCode = document.getElementById('code-validation'); // élément HTML associé à l'ID code-validation
const buttonSubmit = document.getElementById('submit-btn'); // élément HTML associé au bnouton "vérifier"
const champEMail = document.getElementById('inputMail'); // élément HTML associé au champ "Email"

// on change le type du champ email, qui devient de type email
champEMail.setAttribute('type', 'email');
champEMail.setAttribute('pattern', '.+@');
champEMail.setAttribute('title', '');
champEMail.setAttribute('required', true); // pour obliger l'utilisateur à remplir le champ
champEMail.setAttribute('list', ''); // sinon, les messages d'erreurs sont cachés par la liste des emails par défaut du browser (https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/email)
champEMail.autocomplete = 'off'; // pas d'autocomplétion

console.log(champEMail.getAttribute('type'));
console.log(champEMail.getAttribute('pattern'));
console.log(champEMail.getAttribute('title'));
console.log(champEMail.getAttribute('required'));

// Quand l'input est cliqué alors réinitialisation- le message d'erreur 'code-validation' est effacé
codeInput.addEventListener('click', () => {
  // console.log("clicked") ;
  messageCode.innerText = ''; // On supprime le texte du message d'erreur
  buttonSubmit.removeAttribute('disabled'); // On ré-arme le bouton "vérifier"
});

// Quand l'input est rempli, alors le message d'erreur 'code-validation'
// est affiché si le code ne commence pas par "CODE-"
codeInput.addEventListener('change', (codeEvent) => {
  const fillingText = codeEvent.target.value;
  // console.log(fillingText) ;
  if (!fillingText.match(exprRegex)) { // autre option: if (!exprRegex.test(fillingText)) {
    messageCode.innerText = 'CODE INVALIDE';
    buttonSubmit.setAttribute('disabled', true);
  }
});

// si on a re-sélectionné l'input pas correct,
// puis sélectionné un autre élément, il faut revérifier l'input
function messageFocusOut() {
  console.log('NO MORE FOCUS !!');
  console.log(`text : ${codeInput.value}`);

  if (!codeInput.value.match(exprRegex)) { // autre option: if (!exprRegex.test(fillingText)) {
    messageCode.innerText = 'CODE INVALIDE';
    buttonSubmit.setAttribute('disabled', true);
  }
}

// Quand l'email est cliqué, alors réinitialisation :
// le message d'erreur 'code-validation' est effacé
champEMail.addEventListener('click', () => {
  buttonSubmit.removeAttribute('disabled'); // On ré-arme le bouton "vérifier"
});

// check que l'adresse est valide
champEMail.addEventListener('change', (textEvent) => {
  const fillingText = textEvent.target.value;
  console.log(`mail change to ${fillingText}`);

  const validityStateObject = champEMail.validity; // dans champEMail.validity: objet ValidityState

  if (validityStateObject.valueMissing) {
    champEMail.setCustomValidity("Renseigner l'email est obligatoire!"); // définit le message de validation personnalisé de l'élément sélectionné avec le message renseigné
    champEMail.style.border = 'blue solid 3px';
    console.log('champ vide');
  } else if (validityStateObject.typeMismatch) {
    champEMail.setCustomValidity('Un email valide, please'); // définit le message de validation personnalisé de l'élément sélectionné avec le message renseigné
    console.log('champ pas vide');
    champEMail.style.border = 'red solid 3px';
  } else {
    champEMail.setCustomValidity('');
    champEMail.style.border = 'black solid 1px';
    console.log('email looks good');
  }

  champEMail.reportValidity(); // Pour forcer à reporter le message */

  /* champEMail.checkValidity();
    console.log(champEMail.validity) ;
    champEMail.reportValidity(); // Pour forcer à reporter le message */
});

/*
champEMail.addEventListener('valid', () => {
    champEMail.style.border= "black solid 1px" ;
    console.log("email looks good") ;
  });

champEMail.addEventListener('invalid', (invalidEvent) => {

    // dans champEMail.validity : l'objet ValidityState
    var validityState_object = champEMail.validity;

    if(validityState_object.valueMissing) {
        // définit le message de validation personnalisé de
        // l'élément sélectionné avec le message renseigné
        champEMail.setCustomValidity("Renseigner l'email est obligatoire!");
        champEMail.style.border= "blue solid 3px" ;
        console.log("champ vide") ;
    } else if(validityState_object.typeMismatch)
    {
        // définit le message de validation personnalisé de
        // l'élément sélectionné avec le message renseigné
        champEMail.setCustomValidity("Un email valide, please");
        console.log("champ pas vide") ;
        champEMail.style.border= "red solid 3px" ;
    }
    else{
        champEMail.setCustomValidity("");
        champEMail.style.border= "black solid 1px" ;
        console.log("email looks good") ;
    }

  });/ */
