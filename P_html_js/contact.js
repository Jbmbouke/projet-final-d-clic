function soumettreFormulaire(e) {
    let form = e.target;

    let lastname = form.elements['lastname'].value ;

    if(lastname==="") {
        alert("Veuillez rentrer un votre nom.");
        e.preventDefault();// Empêcher la soumission ou l'envoie du formulaire
    } else if (lastname.length<3 ){
        alert("Le nom  doit contenir au moins 3 caractères");
        e.preventDefault();// Empêcher la soumission ou l'envoie du formulaire
    }

    alert('Votre nom est: ' + lastname)

    return true ; //Soumettre le formulaire
}
