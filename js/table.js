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

function testCreateTable () {
    createTable();
    let isEqual = "<tr><td>1</td><td>Alfa</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>1.5</td><td></td><td></td></tr><tr><td>2</td><td>Beta</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>3</td><td></td><td></td></tr><tr><td>3</td><td>Delta</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>2</td><td></td><td></td></tr><tr><td>4</td><td>Lambda</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>7</td><td></td><td></td></tr><tr><td>5</td><td>Gamma</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>5</td><td></td><td></td></tr>"
    === tableBody.innerHTML;
    return isEqual
}

function testUpdateTable () {
    createTable();
    updateTable(count);
    let isEqual = "<tr><td>1</td><td>Alfa</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>1.5</td><td></td><td></td></tr><tr><td>2</td><td>Beta</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>3</td><td></td><td></td></tr><tr><td>3</td><td>Delta</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>2</td><td></td><td></td></tr><tr><td>4</td><td>Lambda</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>7</td><td></td><td></td></tr><tr><td>5</td><td>Gamma</td><td>4/1/2023</td><td>Disponivel</td><td></td><td>5</td><td></td><td></td></tr>"
    === tableBody.innerHTML;
    return isEqual
}

console.log(testCreateTable())
console.log(testUpdateTable())
