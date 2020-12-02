function openOrClosed() {
    return Math.random() < 0.5;
}
function endRow(){
let row = [];
for (let i = 0; i < mazeModel.size; i++){
    row.push({ isHigh: false, isWide: false, isOpen: false },
        { isHigh: false, isWide: true, isOpen: false },)
}
row.push({ isHigh: false, isWide: false, isOpen: false },)
return row;
}

function wallRow(){
    let row = [];
    for (let i = 0; i < mazeModel.size; i++){
        row.push({isHigh: false, isWide: false, isOpen: false},
            {isHigh: false, isWide: true, isOpen: openOrClosed()},)
    }
    row.push({isHigh: false, isWide: false, isOpen: false},)
    return row;
}

function roomRow(){
    let row = [];
    row.push({isHigh: true, isWide: false, isOpen: false})
    for (let i = 0; i < mazeModel.size; i++){
        row.push({isHigh: true, isWide: true , isOpen: true},
            {isHigh: true, isWide: false, isOpen: openOrClosed()},)
    }
    row.pop();
    row.push({isHigh: true, isWide: false, isOpen: false},)
    return row;

}
function randomOpening(array){
    return Math.floor(Math.random()*array.length)}

function createEntranceExit(){
    let entrance = mazeModel.rows[0].filter(walls=>walls.isWide === true);
    let exit = mazeModel.rows[mazeModel.rows.length-1].filter(walls=>walls.isWide === true);
    entrance[randomOpening(entrance)].isOpen = true;
    exit[randomOpening(exit)].isOpen = true;
}

function toggleWall(r,c) {
if(r===0||r===mazeModel.rows.length-1||c===0||c===mazeModel.rows[r].length-1)return;
     if(mazeModel.rows[r][c].isOpen === false){
        mazeModel.rows[r][c].isOpen =true;
    } 
    else {mazeModel.rows[r][c].isOpen =false;}
}


function createScaleLabyrinth(size){
    mazeModel.size=size;
    let row = [];
    row.push(endRow());
    for (let i = 0; i < size; i++){
        row.push(roomRow(),wallRow(),)
    }
    row.pop();
    row.push(endRow());
    mazeModel.rows = row;
    createEntranceExit();
}