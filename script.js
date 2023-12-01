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

            // Event Handler

            cell.onfocus = function (e) {
                focusCell(e.target.className[4],e.target.className[5]);
            }

            cell.onblur = function (e) {
                blurCell(e.target.className[4],e.target.className[5]);
            }

            // Header 판별

            if(spreadSheet[i][j].isHeader == true){
                cell.style.backgroundColor = "#eeeeee";
            }
            
            // textContent 다루는 부분

            if(i > 0 && j==0){
                cell.textContent = i;
            }

            else if(i==0 && j > 0){
                cell.textContent = String.fromCharCode(64 + Number(j));
            }
            
            spreadSheetContainer.appendChild(cell);
        }
    }

    
}

function focusCell(i, j){
    const currentCell = document.getElementsByClassName('currentCell')[0];
    

    let rowCell = document.getElementsByClassName('cell'+i+0)[0];
    let colCell = document.getElementsByClassName('cell'+0+j)[0];

    rowCell.style.backgroundColor = "lightgreen";
    colCell.style.backgroundColor = "lightgreen";
    
    currentCell.innerHTML = String.fromCharCode(64 + Number(j))+i
}

function blurCell(i, j){
    const currentCell = document.getElementsByClassName('currentCell')[0];

    const rowCell = document.getElementsByClassName('cell'+i+0)[0];
    const colCell = document.getElementsByClassName('cell'+0+j)[0];
    const ijCell = document.getElementsByClassName('cell'+i+j)[0];

    rowCell.style.backgroundColor = "#eeeeee";
    colCell.style.backgroundColor = "#eeeeee";
    spreadSheet[i][j].data = ijCell.value;

    currentCell.innerHTML = "";
}


initSpreadSheet();
createCell();

let currentCellSpan = document.getElementsByClassName('currentCell');
currentCellSpan[0].innerText = "aa";
