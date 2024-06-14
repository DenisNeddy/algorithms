// O( w * h) time | O(w * h) space

// Создаем пустой массив, куда будем класть результат
// Запускаем цикл по длине элемента массива matrix, индекс у нас будет обозначать колонку
// В цикле создаем пустой массив , который будет новой строкой
// Запускаем вложенный цикл по длине входящего массива matrix, индек будет обозначать ряд
// Во вложенном цикле пушим в массив newRow элемент из входящего массива ввиде массив[внутренний итератор][внешний итератор]
// Это позволит нам в newRow сначала положить нулевые элементы из всех элементов массива, далее кладем в новый массив transposedMatrix
// получившийся массив, далее повторяется процедура со следующими элеменитами

function transposeMatrix(matrix) {
  const transposedMatrix = [];
  for(let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for(let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col])
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}