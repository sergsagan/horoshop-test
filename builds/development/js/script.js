$(function() {
	
    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");



});

(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("tabs__content_active")
                .eq($(this).index())
                .addClass("tabs__content_active");
        });
    });

    $('.add-comment').click(function (e) {
        e.preventDefault();

        $(this).addClass('hidden');
        $('.form-comment').toggle();
    });

    var Select2={init:function(){!function() {
        $("#delivery, #delivery-new").select2({placeholder: "выберите способ доставки", minimumResultsForSearch:1/0});
        $("#address, #address-new").select2({placeholder: "выберите адрес склада", minimumResultsForSearch:1/0});
        $("#payment, #payment-new").select2({placeholder: "способ оплаты", minimumResultsForSearch:1/0});
    }()}};

    Select2.init();


})(jQuery);
