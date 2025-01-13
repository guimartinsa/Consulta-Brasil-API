$(document).ready(function(){
    // Mostrar o formulário correspondente à opção selecionada
    $("#consulta-tipo").on("change", function() {
        const tipo = $(this).val();
        $(".consulta-form").hide(); // Esconde todos os formulários
        if (tipo === "cep") {
            $("#cep-form").show();
        } else if (tipo === "cnpj") {
            $("#cnpj-form").show();
        } else if (tipo === "feriados") {
            $("#feriado-form").show();
        } else if (tipo === "dominio") {
            $("#dominio-form").show();
        } else if (tipo === "bank") {
            $("#bank-form").show();
        } else if (tipo === "ddd") {
            $("#ddd-form").show();
        }
    });

    // Consulta CEP
    $("#cep-form").on("submit", function(event) {
        event.preventDefault();
        const cep = $("#cep").val();
        $.post("/consulta/cep", { cep: cep }, function(data) {
            console.log(data)
            $("#consulta-resultado").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        }).fail(function() {
            $("#consulta-resultado").html("<p>Não foi possível realizar a consulta do CEP.</p>");
        });
    });

    // Consulta CNPJ
    $("#cnpj-form").on("submit", function(event) {
        event.preventDefault();
        const cnpj = $("#cnpj").val();
        $.post("/consulta/cnpj", { cnpj: cnpj }, function(data) {
            $("#consulta-resultado").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        }).fail(function() {
            $("#consulta-resultado").html("<p>Não foi possível realizar a consulta do CNPJ.</p>");
        });
    });

    // Consulta Feriados
    $("#feriado-form").on("submit", function(event) {
        event.preventDefault();
        const ano = $("#ano").val();
        $.post("/consulta/feriados", { ano: ano }, function(data) {
            $("#consulta-resultado").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        }).fail(function() {
            $("#consulta-resultado").html("<p>Não foi possível realizar a consulta de feriados.</p>");
        });
    });

    // Consulta Domínio
    $("#dominio-form").on("submit", function(event) {
        event.preventDefault();
        const dominio = $("#dominio").val();
        $.post("/consulta/dominio", { dominio: dominio }, function(data) {
            $("#consulta-resultado").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        }).fail(function() {
            $("#consulta-resultado").html("<p>Não foi possível realizar a consulta do domínio.</p>");
        });
    });

    // Consulta Banco
    $("#bank-form").on("submit", function(event) {
        event.preventDefault();
        const codigo = $("#codigo").val();
        $.post("/consulta/banco", { codigo: codigo }, function(data) {
            $("#consulta-resultado").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        }).fail(function() {
            $("#consulta-resultado").html("<p>Não foi possível realizar a consulta do banco.</p>");
        });
    });

    // Consulta DDD 
    $("#ddd-form").on("submit", function(event) {
        event.preventDefault();
        const ddd = $("#ddd").val();
        $.post("/consulta/ddd", { ddd: ddd }, function(data) {
            $("#consulta-resultado").html(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        }).fail(function() {
            $("#consulta-resultado").html("<p>Não foi possível realizar a consulta do DDD.</p>");
        });
    });
});
