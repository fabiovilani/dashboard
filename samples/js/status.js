var barChartData = {
labels: [
"Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys",
"Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal", "Tsys",
"Canais","Clearsale","Credito","Financeiro", "Plataforma", "Portal"],
datasets: [{
    label: 'Pending Customer',
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
    label: 'Pending Vendor',
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
    label: 'Work in progress',
    backgroundColor: window.chartColors.green,
    stack: 'Stack 1',
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
},{
    label: 'Accepted',
    backgroundColor: window.chartColors.blue,
    stack: 'Stack 1',
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
},{
    label: 'Open',
    backgroundColor: 'black',
    stack: 'Stack 2',
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
            text:"Quantidade de chamados por status"
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