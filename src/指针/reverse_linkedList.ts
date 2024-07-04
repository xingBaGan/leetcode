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
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
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