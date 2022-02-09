'''
Hi, here's your problem today. This problem was recently asked by Apple:

Given an integer k and a binary search tree, find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k. If either does not exist, then print them as None.

Here is the definition of a node for the tree.

class Node:
  def __init__(self, value):
    self.left = None
    self.right = None
    self.value = value

def findCeilingFloor(root_node, k, floor=None, ceil=None):
  # Fill this in.

root = Node(8)              Draw this out. This is where the binary tree is being created
root.left = Node(4) 
root.right = Node(12) 
  
root.left.left = Node(2) 
root.left.right = Node(6) 
  
root.right.left = Node(10) 
root.right.right = Node(14) 

print findCeilingFloor(root, 5)
# (4, 6)
Help : https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/
'''

class Node:
  def __init__(self,value):
    self.left = None
    self.right = None
    self.value = value

def findCeilingFLoor(root_node, k, floor=None, ceil=None):
  if root_node < 0:
        print("Invalid value. Please re-run and enter a positive value.")
  elif root_node >= 1:
        # continue the program
        if root_node > ceil:
              #stop the program as this is would break the program
              print("Stopping program. Invalid entry.")
        elif         

"""
root = Node(8)
root.left.left = Node(2)
root.left.right = Node(12)
"""