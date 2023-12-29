function findParallelLines(points) {
   let parallelCountX = 0;
   let parallelCountY = 0;
   let seenLines = new Set();

   for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
         let lineKeyY = `x:${points[i].x}-${points[j].x}`;
         let lineKeyX = `y:${points[i].y}-${points[j].y}`;

         if (points[i].y === points[j].y && !seenLines.has(lineKeyX)) {
            parallelCountX++;
            seenLines.add(lineKeyX);
         }
         if (points[i].x === points[j].x && !seenLines.has(lineKeyY)) {
            parallelCountY++;
            seenLines.add(lineKeyY);
         }
      }
   }

   return { parallelCountX, parallelCountY };
}

// a) (1;2) , (3;7) , (0;6) , (1;1) , (-5,2), (1,5) , (3,-5)........
let points = [
   { x: 1, y: 2 },
   { x: 3, y: 7 },
   { x: 0, y: 6 },
   { x: 1, y: 1 },
   { x: -5, y: 2 },
   { x: 1, y: 5 },
   { x: 3, y: -5 },
];

let parallelLineCount = findParallelLines(points);
points.forEach((element) => {
   console.log('x: ', element.x, 'y: ', element.y);
});

console.log(
   'X eksenine paralel doğru sayısı:',
   parallelLineCount.parallelCountX
);
console.log(
   'Y eksenine paralel doğru sayısı:',
   parallelLineCount.parallelCountY
);
