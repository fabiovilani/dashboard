
var barChartData = {
    labels: ["Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys","Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys","Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys"],
    datasets: [{
        label: 'Sev 1',
        backgroundColor: window.chartColors.red,
        stack: 'Stack 0',
        data: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
        ]
    }, {
        label: 'Sev 2',
        backgroundColor: window.chartColors.yellow,
        stack: 'Stack 0',
        data: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
        ]
    }, {
        label: 'Sev 3',
        backgroundColor: window.chartColors.green,
        stack: 'Stack 0',
        data: [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,

        ]
    },{
        label: 'Sev 4',
        backgroundColor: window.chartColors.blue,
        stack: 'Stack 0',
        data: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
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
                text:"Quantidade de chamados por severidade"
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