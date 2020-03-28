# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isValidBST(self, root):

        def helper(node, lower, upper):
            if not node:
                return True
            val = node.val
            if val <= lower or val >= upper:
                return False
            if not helper(node.right, val, upper):
                return False
            if not helper(node.left, lower, val):
                return False
            return True

        return helper(root, float('-inf'), float('inf'))


node = TreeNode(5)  # Raiz
node.left = TreeNode(1)  # El izquierdo debe ser menor a la raiz 5
node.right = TreeNode(7)  # El derecho debe ser mayor a la raiz 5
node.right.left = TreeNode(6)  # El izquierdo debe ser menor a la raiz 7
node.right.right = TreeNode(8)  # El derecho debe ser mayor a la raiz 7

# No son arboles balanceados
node1 = TreeNode(5)  # Raiz
node1.left = TreeNode(1)  # El izquierdo debe ser menor a la raiz 5
node1.right = TreeNode(4)  # El derecho debe ser mayor a la raiz 5 --> no
node1.right.left = TreeNode(3)  # El izquierdo debe ser menor a la raiz 4
node1.right.right = TreeNode(6)  # El derecho debe ser mayor a la raiz 4

node2 = TreeNode(5)  # Raiz
node2.left = TreeNode(1)  # El izquierdo debe ser menor a la raiz 5
node2.right = TreeNode(6)  # El derecho debe ser mayor a la raiz 5
# El izquierdo debe ser menor a la raiz 6 (no cumple con la raiz superior 5 siendo menor en su rama derecha)
node2.right.left = TreeNode(4)
node2.right.right = TreeNode(7)  # El derecho debe ser mayor a la raiz 6


node3 = TreeNode(5)  # Raiz
node3.left = TreeNode(1)  # El izquierdo debe ser menor a la raiz 5
node3.right = TreeNode(6)  # El derecho debe ser mayor a la raiz 5
node3.right.left = TreeNode(7)  # El izquierdo debe ser menor a la raiz 6 no
node3.right.right = TreeNode(8)  # El derecho debe ser mayor a la raiz 8

node4 = TreeNode(5)  # Raiz
node4.left = TreeNode(3)  # El izquierdo debe ser menor a la raiz 5
node4.right = TreeNode(6)  # El derecho debe ser mayor a la raiz 5
node4.left.left = TreeNode(2)  # El izquierdo debe ser menor a la raiz 4
node4.left.right = TreeNode(4)  # El derecho debe ser mayor a la raiz 4

print(Solution().isValidBST(node))
print(Solution().isValidBST(node1))
print(Solution().isValidBST(node2))
print(Solution().isValidBST(node3))
print(Solution().isValidBST(node4))
# True
