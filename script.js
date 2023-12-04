const row = 10;
const col = 10;
const spreadSheetContainer = document.querySelector(".spreadSheetContainer");
const exportButton = document.querySelector(".export-btn");
const spreadSheet = [];

class Cell {
    constructor(isHeader, disabled, data, row, column, active){
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.active = active;
    }


    changeData(data){
        this.data = data;
    }
}

function initSpreadSheet(){

    for(let i=0;i<row;i++){
        let spreadSheetRow = [];
        for(let j=0;j<col;j++){
            let isHeader = false;
            if(i==0 || j==0){
                isHeader = true;
            }
            const cell = new Cell(isHeader, false, "", i, j, false);
            spreadSheetRow.push(cell);
        }
        spreadSheet.push(spreadSheetRow);
    }
}


function createCell(){
    for(let i=0;i<row;i++){
        const containerRow = document.createElement("div");
        containerRow.className = "cell-row";
        for(let j=0;j<row;j++){
            let cell;

            if(i==0 || j==0){
                cell = document.createElement("div");
                
            }
            else{
                cell = document.createElement("input");
                // Event Handler

                cell.onfocus = function (e) {
                    focusCell(e.target.id[4],e.target.id[5]);
                }

                cell.onblur = function (e) {
                    blurCell(e.target.id[4],e.target.id[5]);
                }

                cell.onchange = (e) => {
                    spreadSheet[i][j].changeData(e.target.value);
                    
                }
            }


            // cell attribute

            cell.className = "cell";
            cell.id = "cell"+i+j;
            cell.value = spreadSheet[i][j].data;

            // Header 판별

            if(spreadSheet[i][j].isHeader === true){
                cell.classList.add("header");
            }

            
            // textContent 

            if(i > 0 && j==0){
                cell.textContent = i;
            }

            else if(i==0 && j > 0){
                cell.textContent = String.fromCharCode(64 + Number(j));
            }

            else if(i==0){
                cell.textContent = String.fromCharCode(64 + Number(spreadSheet[i][j].data[2]));
            }

            else{
                cell.textContent = spreadSheet[i][j].data;
            }
            
            containerRow.append(cell);
        }
        spreadSheetContainer.append(containerRow);
    }

}

function focusCell(i, j){
    const currentCell = document.getElementsByClassName('currentCell')[0];
    

    const rowCell = document.getElementById('cell'+i+0);
    const colCell = document.getElementById('cell'+0+j);

    rowCell.style.backgroundColor = "lightgreen";
    colCell.style.backgroundColor = "lightgreen";
    
    currentCell.innerHTML = String.fromCharCode(64 + Number(j))+i
}

function blurCell(i, j){
    const currentCell = document.getElementsByClassName('currentCell')[0];

    const rowCell = document.getElementById('cell'+i+'0');
    const colCell = document.getElementById('cell'+'0'+j);

    rowCell.style.backgroundColor = "grey";
    colCell.style.backgroundColor = "grey";


    currentCell.innerHTML = "";

}


exportButton.onclick = function(e) {
    let csv = "";

    for(let i=0;i<row;i++){
        if(i===0) continue;
        csv += spreadSheet[i]
            .filter((item) => !item.isHeader)
            .map((item) => item.data)
            .join(",") + "\r\n";
    }

    const csvObj = new Blob([csv]);
    const csvURL = URL.createObjectURL(csvObj);

    const a = document.createElement("a");
    a.href = csvURL;
    a.download = "SpreadSheet.csv";
    a.click();

}

initSpreadSheet();
createCell();

