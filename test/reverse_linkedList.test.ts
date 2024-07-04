/**
 * 
 * 
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 */

// jest 测试用例

import { ListNode, reverseLinkedList } from '../src/指针/reverse_linkedList';

test('reverse linkedList', () => {
  
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  const result = reverseLinkedList(head);
  expect(result.val).toBe(5);
  expect(result.next.val).toBe(4);
  expect(result.next.next.val).toBe(3);
  expect(result.next.next.next.val).toBe(2);
  expect(result.next.next.next.next.val).toBe(1);
})