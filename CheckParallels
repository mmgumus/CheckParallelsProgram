// Aşağıda istenilen bilgilere göre yazılımsal olarak bir çözüm çıkartmanız beklenmektedir? Teknoloji olarak kıstas yoktur, istenilen platformda yapılabilir
// Doğrusal denklem sistemimizde noktalarımız var;
// a) (1;2) , (3;7) , (0;6) , (1;1) , (-5,2), (1,5) , (3,-5)........
// Bu kümede kaç tane doğru y eksenine paraleldir, kaç tane doğru x eksenine paraleldir? ( Aynı noktalardan geçen doğrular tek olarak değerlendirilecek )

// Verilen n sayısı kadar x ve y koordinatlarına sahip rastgele nokta oluşturuyorum.
function generateRandomPoints(numberOfPoints) {
   let points = [];
   for (let i = 0; i < numberOfPoints; i++) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      points.push({ x, y });
   }
   return points;
}

function checkLineParallels(points) {
   let parallelToXCount = 0;
   let parallelToYCount = 0;
   let seenLines = new Set();

   for (let i = 0; i < points.length - 1; i++) {
      let lineKeyX = `x:${points[i].x}-${points[i + 1].x}`;
      let lineKeyY = `y:${points[i].y}-${points[i + 1].y}`;

      if (points[i].y === points[i + 1].y && !seenLines.has(lineKeyY)) {
         parallelToXCount++;
         seenLines.add(lineKeyY);
      }
      if (points[i].x === points[i + 1].x && !seenLines.has(lineKeyX)) {
         parallelToYCount++;
         seenLines.add(lineKeyX);
      }
   }

   return { parallelToXCount, parallelToYCount };
}

let numberOfPoints = 10; // n tane kordinat girilebilir

let points = generateRandomPoints(numberOfPoints);
console.log('Oluşturulan Noktalar:');
points.forEach((point) => console.log(`x: ${point.x}, y: ${point.y}`));

let { parallelToXCount, parallelToYCount } = checkLineParallels(points);
console.log('X eksenine paralel benzersiz doğru sayısı:', parallelToXCount);
console.log('Y eksenine paralel benzersiz doğru sayısı:', parallelToYCount);
