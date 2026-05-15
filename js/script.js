console.log("script.js is geladen");

document.addEventListener("DOMContentLoaded", function () {
   emailjs.init({
        publicKey: "gqS_sY7NZPVI5ggpg"
    });

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        console.log("Contactformulier gevonden");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

             emailjs.sendForm("service_qv2bp9f", "template_kyi1za5", contactForm)
                .then(function () {
            alert("Je bericht is verzonden!");
            contactForm.reset();
        })
          .catch(function (error) {
                    alert("Er ging iets mis. Probeer opnieuw.");
                    console.log("EmailJS error:", error);
                });
            });
    } else {
        console.log("Geen contactformulier gevonden");
    }
});


