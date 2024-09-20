function resetForm() {
    document.getElementById("formContact").reset();
}

function submitForm(event) {
	event.preventDefault();
	
	// contrairement à var, la portée de let est limité au {} de la fonction
    let nom = document.querySelector('input[name="nom"]').value;
    let prenom = document.querySelector('input[name="prenom"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let adresse = document.querySelector('input[name="adresse"]').value;
    let dateNaissance = document.querySelector('input[name="dateNaissance"]').value;
    
	if(!nom || !prenom || !email){
		alert("Les champ Nom, Prenom et E-Mail sont obligatoire.");
	}else{
		let confirmationMessage = `Nom: ${nom}\nPrénom: ${prenom}\nE-mail: ${email}\nAdresse: ${adresse}\nDate de naissance: ${dateNaissance}`;
		if (confirm(confirmationMessage)) {
			alert("Merci pour votre interet." + "\nNous vous contacterons sous peu.");
			document.getElementById("formContact").submit();
		}
	}
}
