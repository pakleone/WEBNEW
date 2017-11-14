;(function($) {
	$.fn.plugin = function(parametros) {

		$(this).on("click", ".close", function() {
			var $obj = $(this).parent();
			$obj.hide(800);
			setTimeout(function() {
				$obj.remove();
			}, 900);
		});

		inicioArray = parametros.horaInicio.split(":");
		fimArray = parametros.horaFim.split(":");
		var horas = parseInt(fimArray[0] - inicioArray[0]);


		$(this)
			.append($("<div/>")
				.addClass("calendario-header")
				.append($("<div/>").text("Horário"))
				.append($("<div/>").text("Segunda-feira")))
			.append($("<div/>")
				.addClass("calendario-body")
				.append($("<div/>")
					.addClass("calendario-hour"))
				.append($("<div/>")
					.addClass("calendario-grid")));

		
		for(var i = 0; i <= horas; i++){
			
			$(".calendario-grid")
				.append($("<div/>")
					.addClass("calendario-grid-strip"));


			if (i == horas) {
				$(".calendario-hour")
					.append($("<div/>")
						.text(inicioArray[0] + ":" + fimArray[1]));
			}
			else{
				$(".calendario-hour")
				.append($("<div/>")
					.text(inicioArray[0] + ":" + inicioArray[1]));
			}

			inicioArray[0]++;
		}

		inicioArray = parametros.horaInicio.split(":");

		$.each(parametros.eventos, function(indice, event) {

			var horaArray = event.inicio.split(":");
			var inicio = parseInt(horaArray[0] - inicioArray[0]) * 60 + parseInt(horaArray[1] - inicioArray[1]);

			$(".calendario-grid")
			.append($("<div/>")
				.addClass("event")
				.addClass(event.tipo)
				.text(event.evento)
				.css({"height":event.duracao,"line-height":event.duracao + "px","top":inicio})
				.append($("<div/>").addClass("close")
					.append($("<img/>").attr("src", "./img/xbutton.png"))));
		});
	};

})(jQuery);
