/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function reverseLinkedList(head: ListNode) {
  let prev = null;
  let curr = head;
  while(curr) {
    // 需要记录下个节点，因为改变当前节点的引用，会造成该节点的丢失
    const temp = curr.next;
    // 改变当前节点方向
    curr.next = prev;
    // go head
    prev = curr;
    curr = temp;
    // 此时 两个指针悬空在没有连接节点的两侧
    // 需要继续，该改变 curr 的指向，继续连接
  }
  return prev;
}

export function reverseLinkedListByRecursive(head: ListNode) {
  if(head === null || head.next == null) {
    return head;
  }

  const reverseHead = reverseLinkedListByRecursive(head.next);
  // @ts-ignore
  head.next.next = head;
  head.next = null;
  return reverseHead;
}