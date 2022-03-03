import sys

N = int(sys.stdin.readline())
nodeParents = list(map(int, sys.stdin.readline().split()))
toDelete = int(sys.stdin.readline())

if toDelete == 0:
  print(0)
  exit(0)

class Node:
  def __init__(self, item):
    self.item = item
    self.right = None
    self.left = None

class BinaryTree:
  def __init__(self):
    self.root = None
    self.leafs = 0

  def travel(self, n):
    if n != None:
      #print(n.item, "", end = '')
      if not(n.left or n.right):
        self.leafs += 1
      if n.left:
        self.travel(n.left)
      if n.right:
        self.travel(n.right)

  def delete(self, target, parentNode):
    if parentNode.left and parentNode.left.item == target:
      parentNode.left = None
      return
    if parentNode.right and parentNode.right.item == target:
      parentNode.right = None

  def printLeaf(self):
    print(self.leafs)
3
nodes = []
tree = BinaryTree()

for i in range(N):
  node = Node(i)
  nodes.append(node)

  if nodeParents[i] == -1:
    tree.root = node
  else:
    if not(nodes[nodeParents[i]].left):
      nodes[nodeParents[i]].left = node
      continue
    if not(nodes[nodeParents[i]].right):
      nodes[nodeParents[i]].right = node
      continue

tree.delete(toDelete, nodes[nodeParents[toDelete]])
tree.travel(nodes[0])
tree.printLeaf()
