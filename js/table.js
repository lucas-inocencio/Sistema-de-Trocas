var tableBody = document.getElementById("table-body");
var buttonBack = document.getElementById("button-previous");
var buttonNext = document.getElementById("button-next");

data = [{
    team: "Alfa",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 1.5,
    Apply: "",
    Comments: ""
    },{
    team: "Beta",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 3,
    Apply: "",
    Comments: ""
    },{
    team: "Delta",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 2,
    Apply: "",
    Comments: ""
    }, {
    team: "Lambda",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 7,
    Apply: "",
    Comments: ""
        },{
    team: "Gamma",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 5,
    Apply: "",
    Comments: ""
    },{
    team: "Eta",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 1,
    Apply: "",
    Comments: ""
    },{
    team: "Theta",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 12,
    Apply: "",
    Comments: ""
    },{
    team: "Pi",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 8,
    Apply: "",
    Comments: ""
    },{
    team: "Tau",
    date: "4/1/2023",
    status: "Disponivel",
    Description: "", 
    Workload: 6,
    Apply: "",
    Comments: ""
    }];

var html = "";
var count = 0;

function createTable() {
    html = "";
    for (let i = count; i < count+5 && i < data.length; i++) {
        html += "<tr>";
        html += "<td>" + (i+1) + "</td>";
        html += "<td>" + data[i]["team"] + "</td>";
        html += "<td>" + data[i]["date"] + "</td>";
        html += "<td>" + data[i]["status"] + "</td>";
        html += "<td>" + data[i]["Description"] + "</td>";
        html += "<td>" + data[i]["Workload"] + "</td>";
        html += "<td>" + data[i]["Apply"] + "</td>";
        html += "<td>" + data[i]["Comments"] + "</td>";
        html += "</tr>";
    }

    tableBody.innerHTML = html;
}

function updateTable(index) {
    html = "";
    count = index;
    for (let i = count; i < count+5 && i < data.length; i++){
        html += "<tr>";
        html += "<td>" + (i+1) + "</td>";
        html += "<td>" + data[i]["team"] + "</td>";
        html += "<td>" + data[i]["date"] + "</td>";
        html += "<td>" + data[i]["status"] + "</td>";
        html += "<td>" + data[i]["Description"] + "</td>";
        html += "<td>" + data[i]["Workload"] + "</td>";
        html += "<td>" + data[i]["Apply"] + "</td>";
        html += "<td>" + data[i]["Comments"] + "</td>";
        html += "</tr>";
    }

    tableBody.innerHTML = html;
}

createTable();
