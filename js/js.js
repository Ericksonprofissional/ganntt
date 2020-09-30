var d = new Date();
var dias_da_semana = ["Dom", "Seg", "ter", "Qua", "Qui", "Sex", "Sab"];
var mes = d.getMonth() + 1;
var dia_atual_semana = d.getDay();
var dia_atual = d.getDate();
var dia = document.querySelector(".dia");
var datas = document.querySelector(".container");
var prazo = document.querySelector(".prazo");

var dia_semana = document.querySelector(".dia_semana");
var cont = 0;

var item = {
    nome: "CARD-5563",
    dataInicio: 05,
    dataEntrega: 15,
    dataFimDev: 10,
    dataInicioTest: 10,
    dataFimTest: 14
}

for (var i = 1; i < 31; i++) {
    datas.appendChild(montaDatas(i));
    prazo.appendChild(montaDatas(i));
}

function mardaDiaAtual() {
    alert(dia_atual)
}

function montaDatas(i) {
    var div = document.createElement('div');
    div.classList.add('datas');
    div.appendChild(montaWeek(i));
    div.appendChild(montaDay(i));
    return div;
}

function montaWeek(i) {
    var div = document.createElement('div');
    div.classList.add('week');
    div.innerHTML = dias_da_semana[i + 1];
    if (i > 5) {
        div.innerHTML = dias_da_semana[cont];
        cont += 1;
        cont > 6 ? cont = 0 : cont;
    }
    return div;
}

function montaDay(i) {
    var div = document.createElement('div');
    div.classList.add('dia');
    div.innerHTML = i;
    return div;
}

function marcaDias(diaMarcar, tipo) {
    var datas = prazo.querySelectorAll(".datas")
    for (var i = 0; i < datas.length; i++) {
        var diaAtual = datas[i].querySelector(".dia").textContent;
        if (diaMarcar == parseInt(diaAtual)) {
                datas[i].classList.add(tipo);
        }
    }
}

function marcaEquipe(objeto) {

    if (objeto.dataInicioTest) {
        for (var i = item.dataInicioTest; i <= item.dataFimTest; i++) {
            marcaDias(i, "teste");
        }
    }
    if (objeto.dataInicio) {
        for (var i = item.dataInicio; i < item.dataFimDev; i++) {
            marcaDias(i, "dev");
        }
    }
    marcaDias(objeto.dataEntrega,"fim");
}

function montarLinha(objeto) {

    var div = document.createElement('div');
    div.classList.add('cabecalho');

    var div1 = document.createElement('div');
    div1.classList.add('titulo');
    div1.innerHTML = objeto.nome;
    div.appendChild(div1)

    var div2 = document.createElement('div');
    div2.classList.add('dataInicio');
    div2.innerHTML = objeto.dataInicio;
    div.appendChild(div2)

    var div3 = document.createElement('div');
    div3.classList.add('dataConclusao');
    div3.innerHTML = objeto.dataEntrega;
    div.appendChild(div3);
    return document.querySelector(".head").appendChild(div);
}

mardaDiaAtual()
montarLinha(item);
marcaEquipe(item);