const row = 10;
const col = 10;
const spreadSheetContainer = document.querySelector("spreadSheetContainer")
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
            const cell = new Cell(false, false, i + "-" + j, i, j, false);
            spreadSheetRow.push(cell);
        }
        spreadSheet.push(spreadSheetRow);
    }

    console.log(spreadSheet);
}

function


initSpreadSheet();

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