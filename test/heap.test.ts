import { buildMinHeapByInsert } from '../src/数据结构/Heap';
import { buildMinHeap, printAsBinaryTree } from '../src/数据结构/Heap_cp';
import generateArr from '../src/utils/getRandomArray';
const array = [4, 10, 3, 5, 1, 6, 18];
let randomArr = generateArr(100, 200);

// test('heap sort', () => {
//   console.log(buildMinHeap(array));
//   console.log(buildMinHeapByInsert(array));
// });

test('heap sort2', () => {
  console.log(buildMinHeap([...randomArr]));
  console.log(buildMinHeapByInsert([...randomArr]));
  let minHeap = buildMinHeap([...randomArr]);
  // let minHeap2 = buildMinHeapByInsert([...randomArr]);
  // expect(minHeap).toEqual(minHeap2);
  printAsBinaryTree(minHeap);
});