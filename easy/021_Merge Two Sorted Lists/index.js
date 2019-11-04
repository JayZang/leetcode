/**
 * 使用遞迴方式依序比較 l1 & l2 節點間之大小
 * 將節點值較小者先放前面
 * 再將該節點之下一個節點與剛剛較大之節點做比較
 * 直到 l1 & l2 皆無下個節點為止
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2)
        return null

    let node = null
    let nextNode = null

    if (!l2 || (l1 && l1.val <= l2.val)) {
        node = new ListNode(l1.val)
        nextNode = mergeTwoLists(l1.next, l2)
    } else {
        node = new ListNode(l2.val)
        nextNode = mergeTwoLists(l1, l2.next)
    }

    if (nextNode)
        node.next = nextNode

    return node
};