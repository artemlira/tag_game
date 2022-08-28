
let cells = [...document.querySelectorAll('.cell')];

cells.sort(() => Math.random() - 0.5);

function moveToEmptyPlace(cell) {
   const newX = emptyX;
   const newY = emptyY;

   emptyX = cell.x;
   emptyY = cell.y;

   cell.x = newX;
   cell.y = newY;

   cell.style.top = `${newY * 25}%`;
   cell.style.left = `${newX * 25}%`;
}

let emptyX = 3;
let emptyY = 3;

let x = 0;
let y = 0;

for (let cell of cells) {
   cell.x = x;
   cell.y = y;

   moveToEmptyPlace(cell);

   x++;

   if (x === 4) {
      y += 1;
      x = 0;
   }

   cell.onclick = () => {
      let dX = Math.abs(cell.x - emptyX);
      let dy = Math.abs(cell.y - emptyY);

      let distance = dX + dy;

      if (distance < 2) {
         moveToEmptyPlace(cell);
      }
   };
}


function getSuccessRate(statistic) {
   // write code here
   let count = 0;
   for (let item of statistic) {
      if (item === '1') {
         count++;
      }
   }
}

getSuccessRate(' ');