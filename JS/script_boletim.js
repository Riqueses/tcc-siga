document.addEventListener("DOMContentLoaded", function() {
    const anoSelect = document.getElementById("ANO_ALUNO");
    const boletimBody = document.getElementById("boletim-body");

    // Dados de exemplo para cada ano
    const boletinsPorAno = {
        2024: [
            { componente: "Matemática", ch: 80, freq: "90%", sint1: 8.5, sint2: 9.0, sint3: 7.5, sint4: 8.0, sintf: 8.3, anCons: 8.5, recons: 9.0, reclas: "-", resf: "Aprovado" }
            // Adicione mais disciplinas para o ano de 2024
        ],
        2023: [
            { componente: "Matemática", ch: 80, freq: "85%", sint1: 7.5, sint2: 8.0, sint3: 7.0, sint4: 7.8, sintf: 7.5, anCons: 7.7, recons: 8.2, reclas: "-", resf: "Aprovado" }
            // Adicione mais disciplinas para o ano de 2023
        ],
        // Adicione mais anos e seus respectivos boletins
    };

    // Função para atualizar o boletim com base no ano selecionado
    function atualizarBoletim(ano) {
        const boletimAtual = boletinsPorAno[ano] || [];

        // Limpar tabela
        boletimBody.innerHTML = "";

        // Preencher nova tabela com os dados do ano selecionado
        boletimAtual.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.componente}</td>
                <td>${item.ch}</td>
                <td>${item.freq}</td>
                <td>${item.sint1}</td>
                <td>${item.sint2}</td>
                <td>${item.sint3}</td>
                <td>${item.sint4}</td>
                <td>${item.sintf}</td>
                <td>${item.anCons}</td>
                <td>${item.recons}</td>
                <td>${item.reclas}</td>
                <td>${item.resf}</td>
            `;

            boletimBody.appendChild(row);
        });
    }

    // Escutar a mudança no seletor de ano e atualizar o boletim
    anoSelect.addEventListener("change", function() {
        const anoSelecionado = anoSelect.value;
        atualizarBoletim(anoSelecionado);
    });

    // Atualizar boletim ao carregar a página com o ano padrão
    atualizarBoletim(anoSelect.value);
});
