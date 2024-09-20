document.querySelectorAll('.MenuP_Choix').forEach(function(menuItem, index) {
    const images = [
        './IMAGES/HomeAcceuil.jpg', // Image par défaut (index 0)
        './IMAGES/HomeProprietes.jpg', // Image premier choix (index 1)
        './IMAGES/HomeCalcul.jpg', // Image deuxième choix (index 2)
        './IMAGES/HomeContact.jpg' // Image troisième choix (index 3)
    ];

    menuItem.addEventListener('mouseenter', function() {
        document.querySelector('.Home').style.backgroundImage = `url(${images[index + 1]})`;
		if(images[index] == 1){
			document.querySelector('.HH_Titre').style.color = rgba(175,80,44);
		}
    });

    menuItem.addEventListener('mouseleave', function() {
        document.querySelector('.Home').style.backgroundImage = `url(${images[0]})`;
		document.querySelector('.HH_Titre').style.color = rgba(175,80,44);
    });
});
