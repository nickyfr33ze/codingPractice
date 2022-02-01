'''
Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

Example:

Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]

Here is a function signature example:

class Solution: 
  def getRange(self, arr, target):
    # Fill this in.
  
# Test program 
arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8] 
x = 2
print(Solution().getRange(arr, x))
# [1, 4]
'''
class Solution:
    arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8]    # Input
    temp = 0                                # Temp place holder to compare to target 'x'
    x = 2                                   # Target
    #Fill this in
    count = 0
        #def getRange(self, arr, target):
    # We can use the indicy where the target is first found and store that, somewhere and do the same with the final indicy
    while(count <= arr.size):   # The idea is to iterate over the array once and compare each indicy to target
        
            

        #Test the program   this is all currently in the function. Does this need to be outside the function?
        #print(Solution().getRange(arr, x))