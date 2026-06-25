
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive:{
                    0:{ items: 1 },
                    600:{ items: 2 },
                    1000:{ items: 3 }
                }
            });
        });
    

   $(document).ready(function() {
    $(".botao-card-sec8-mob").click(function(e) {
        e.preventDefault();  // Previne o comportamento padrão do botão
        var parentItem = $(this).closest(".accordion-item");
        var button = $(this);  // Botão que foi clicado

        // Fechar todos os outros
        $(".accordion-item").not(parentItem).removeClass("active");
        $(".accordion-item").not(parentItem).find(".accordion-content").slideUp();
        $(".accordion-item").not(parentItem).find(".botao-card-sec8-mob").text("Saiba mais");

        // Toggle o card clicado
        if (parentItem.hasClass("active")) {
            parentItem.removeClass("active");
            parentItem.find(".accordion-content").slideUp();
            button.text("Saiba mais");  // Alterar o texto de volta para "Saiba mais"
        } else {
            parentItem.addClass("active");
            parentItem.find(".accordion-content").slideDown();
            button.text("Ocultar");  // Alterar o texto para "Ocultar"
        }
    });
});
