var montant;
var taux;
var dureeRbs;

function RAZ() {
    document.getElementById("formCalcul").reset();
	document.getElementById("resultat").style.display = "none";
	document.getElementById("champ").style.display = "block";
}

function calcul(event) {
	event.preventDefault();
	
    montant = parseFloat(document.querySelector('input[name="montantEmprunt"]').value);
    tauxMensuel = parseFloat(document.querySelector('input[name="taux"]').value) / 100 / 12;
    dureeRbs = parseFloat(document.querySelector('input[name="dureeRbs"]').value) * 12;
    
	if(isNaN(montant) || isNaN(tauxMensuel) || isNaN(dureeRbs)){
		alert("Les champ Montant, Taux et Durée sont obligatoire et exprimé en nombres.");
	}else{
		let confirmationMessage = `\nCONFIRMER INFO:\n\nMontant à emprunter: ${montant}$\nTaux d'intêret annuel: ${tauxMensuel * 100 * 12}%\nDurée du remboursement: ${dureeRbs / 12} ans`;
		if (confirm(confirmationMessage)) {
			
			document.querySelector('input[name="resultat"]').value = mensualite(montant, tauxMensuel, dureeRbs).toFixed(2) + "$/mois (Total: " 
			+ (mensualite(montant, tauxMensuel, dureeRbs) * dureeRbs).toFixed(2) + "$ payé sur " + dureeRbs / 12 + " ans)";
			
			document.getElementById("resultat").style.display = "block";
			document.getElementById("champ").style.display = "none";
			
			// document.getElementById("formCalcul").submit();
		}
	}
}

function mensualite(montant, taux, dureeRbs) {
	return (montant * taux) / (1 - Math.pow(1 + taux, -dureeRbs));
}

// Math.pow(BASE, EXPOSANT)
// Autre méthode pour calculer l'exposant: BASE ** EXPOSANT
// JS ne reconnais pas '^' comme opérateur d'EXPOSANT
