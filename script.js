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

function createCell(){
    console.log(spreadSheetContainer);
    for(let i=0;i<row;i++){
        for(let j=0;j<row;j++){
            const cell = document.createElement("div");
            

            // if(spreadSheet[i][j].disabled == false){
            //     cell.setAttribute("style", cell.getAttribute("style") + "; pointer-events:none");
            // }



            // Header 판별

            if(spreadSheet[i][j].isHeader == true){
                cell.setAttribute("style", "background-color: lightgray");
            }
            
            // textContent 다루는 부분

            if(j==0 && i > 0){
                cell.textContent = spreadSheet[i][j].data[0];
            }

            else if(i==0 && j==0){
                cell.textContent = "";
            }

            else if(i==0){
                cell.textContent = String.fromCharCode(64 + Number(spreadSheet[i][j].data[2]));
            }

            else{
                cell.textContent = spreadSheet[i][j].data;
            }

            cell.setAttribute("style", cell.getAttribute("style") + ";border:1px solid; border-color:lightgrey");
            
            spreadSheetContainer.appendChild(cell);
        }
    }

    
}


initSpreadSheet();
createCell();

let currentCellSpan = document.getElementsByClassName('currentCell');
currentCellSpan[0].innerText = "aa";

// let exportBtns = document.getElementsByClassName('export-btn');
// exportBtns[0].addEventListener(onclick => (event){
//     console.log(event);
// })


// lists = Array.from(lists)
// lists.forEach((list, idx) => {
//     if(idx % 2 == 0){
//         list.style.color = "red"
//     }
//     else{
//         list.style.color = "blue"
//     }
    
//     list.innerHTML = `<span>${idx}.     List</span>`
    
// })

// console.log(lists)
// console.log(lists[0])


// let list2 = document.querySelector('li:nth-child(odd)').parentNode
// console.log(list2)


// for (let node of list2.childNodes){
//     console.log(node);
// }