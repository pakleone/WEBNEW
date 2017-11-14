$(function() {
	var servico = "http://botanicapp.com.br/receitas_teste.php";
	$.get(servico)
		.done(function(data) {
			var receitasArray = JSON.parse(data);

			$.each(receitasArray, function(indice, receita) {
				$(".cardapio")
					.append($("<h1/>").text(receita.nome))
					.append($("<img/>").attr("src", receita.foto))
					.append($("<p/>").text(receita.descricao));
				
				var $ingredientes = $("<ul/>").addClass("ingredientes").text("Ingredientes:");
				var $preparo = $("<ol/>").attr("type", "I").addClass("preparo").text("Modo de preparo:");
				
				$.each(receita.ingredientes, function(indice, ingrediente) {
					$ingredientes.append($("<li/>").text(ingrediente));
						
				});

				$.each(receita.preparo, function(indice, prepar) {
					$preparo.append($("<li/>").text(prepar));
				});

				$(".cardapio")
					.append($("<div/>")
						.append($ingredientes)
						.append($preparo));
			});
		})
})