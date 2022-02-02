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
    arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8] # Input    
    target = 2                           # Target
    #Fill this in
    def getRange(arr, target):
        arr.index(target) # Indexes where the first occurance of the target is found
        arr.count(target) # Looks for how many times the target is found in the array 'arr'
        print("The first occurrence of "+str(target)+" in the array is "+str(arr.index(target)))
        endingIndex = arr.index(target) + arr.count(target) - 1 # This gives us the final occurance of the target
        print("The final occurance of the target is "+str(endingIndex))
    getRange(arr, target)

    '''
    # We can use the indicy where the target is first found and store that, somewhere and do the same with the final indicy
    while(count <= len(arr)):   # The idea is to iterate over the array once and compare each indicy to target
        if(arr[count] == x):
            startingInt = startingInt + arr[count]
            count = count + 1   # Adds 1 to the 'count' parameter
            print("The count is " + str(count))
        elif arr[count] != x:
            # do nothing
            count = count + 1   # Adds 1 to the 'count' parameter
            print("The count is " + str(count))
           
        #Test the program   this is all currently in the function. Does this need to be outside the function?
        #print(Solution().getRange(arr, x))
    
    # This was a test of a function within Python that returns how many occurances of the passed parameter are. this was successful. All we need is the array and the target to look for.
    # This however does not print the indices of which the repeating number was seen as the problem requires of us.

    def test():
        arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8]    # 
        print("This is a test")
        print(arr.count(2))
    test()
    '''