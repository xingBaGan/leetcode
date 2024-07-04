class ListNode {
  data: null;
  next: null;
  constructor(data) {
    this.data = data
    this.next = null;
  }
}

class LinkedList {
  head: null;
  size: 0;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 
  // 链表的插入
  insertNode(index: number) {

  }

  // 链表的删除
  deleteNode(index: number) {

  }
  
  append(node: number| ListNode) {
    if(node instanceof ListNode) {
      
    }
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
