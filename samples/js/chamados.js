var barChartData = {
labels: [
"Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys",
"Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys",
"Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal"],
datasets: [{
    label: 'Chamados',
    backgroundColor: window.chartColors.blue,
    stack: 'Stack 0',
    data: [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
    ]
}]

};
window.onload = function() {
var ctx = document.getElementById("canvas").getContext("2d");
window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        title:{
            display:true,
            text: "Quantidade de chamados"
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
};