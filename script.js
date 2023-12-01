const row = 10;
const col = 10;
const spreadSheetContainer = document.querySelector(".spreadSheetContainer")
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
}

function initSpreadSheet(){

    for(let i=0;i<row;i++){
        let spreadSheetRow = [];
        for(let j=0;j<col;j++){
            let isHeader = false;
            if(i==0 || j==0){
                isHeader = true;
            }
            const cell = new Cell(isHeader, false, i + "-" + j, i, j, false);
            
            spreadSheetRow.push(cell);
        }
        spreadSheet.push(spreadSheetRow);
    }

    console.log(spreadSheet);
}

function focusCell(i, j){
    const currentCell = document.getElementsByClassName('currentCell')[0];

    let rowCell = document.getElementsByClassName('cell'+i+0)[0];
    let colCell = document.getElementsByClassName('cell'+0+j)[0];

    rowCell.style.backgroundColor = "lightgreen";
    colCell.style.backgroundColor = "lightgreen";

    spreadSheet[i][j].data = 
    
    currentCell.innerHTML = String.fromCharCode(64 + Number(j))+i
}

function unfocusCell(i, j){
    let rowCell = document.getElementsByClassName('cell'+i+0)[0];
    let colCell = document.getElementsByClassName('cell'+0+j)[0];

    rowCell.style.backgroundColor = "#eeeeee";
    colCell.style.backgroundColor = "#eeeeee";
}

function createCell(){
    console.log(spreadSheetContainer);
    for(let i=0;i<row;i++){
        for(let j=0;j<row;j++){
            let cell;

            if(i==0 || j==0){
                cell = document.createElement("div");
                
            }
            else{
                cell = document.createElement("input");
            }


            // Style

            cell.className = "cell"+i+j;
            cell.style.border = "1px solid";
            cell.style.borderColor = "lightgrey";
            cell.style.textAlign = "center";

            // Event

            cell.onfocus = function (e) {
                if(e.relatedTarget != null){
                    unfocusCell(e.relatedTarget.className[4],e.relatedTarget.className[5]);    
                }
                focusCell(e.target.className[4],e.target.className[5]);
            }

            // Header 판별

            if(spreadSheet[i][j].isHeader == true){
                cell.style.backgroundColor = "#eeeeee";
            }
            
            // textContent 다루는 부분

            if(i > 0 && j==0){
                cell.textContent = spreadSheet[i][j].data[0];
            }

            else if(i==0 && j > 0){
                cell.textContent = String.fromCharCode(64 + Number(spreadSheet[i][j].data[2]));
            }

            else{
                cell.textContent = "";
            }

            
            spreadSheetContainer.appendChild(cell);
        }
    }

    
}


initSpreadSheet();
createCell();

let currentCellSpan = document.getElementsByClassName('currentCell');
currentCellSpan[0].innerText = "aa";
