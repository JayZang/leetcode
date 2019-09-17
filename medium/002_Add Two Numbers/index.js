/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 計算兩個 Node 相加後之進位以及餘數
 * 餘數為對應結果 Node 之值
 * 進位為對應結果 Node 下一個 Node 值
 * 回圈執行直到沒有進位以及無 Nodes
 * 
 * m：l1 之長度，n：l2 之長度
 * 時間複雜度：O[max(m, n)]
 * 空間複雜度：O[max(m, n)]
 * 
 * @param  {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let first = buf = new ListNode(null)

  while (true) {
    const total = (l1.val || 0) + (l2.val || 0) + carry

    buf.val = total % 10
    carry = Math.floor(total / 10)

    if (carry === 0 && l1.next === null && l2.next === null)
      return first
    else {
      l1 = l1.next !== null ? l1.next : new ListNode(0)
      l2 = l2.next !== null ? l2.next : new ListNode(0)
      buf.next = new ListNode(null)
      buf = buf.next
    }
  }
}