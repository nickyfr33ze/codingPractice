"""
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

Example:

Input: [1, 2, 3, 8, 9, 10]
Output: 7

Numbers 1 to 6 can all be summed by a subset of the list of numbers, but 7 cannot.
"""
def findSmallest(nums):
    print("The numbers we are working with are printed below:")
    print(nums)
    print("-----------------------------")
    count = 0
    num1 = 0
    num2 = 0
    tempSum = 0
    while nums.length > 0 & count < nums.length: # This will continue looping until we reach the end of the length of numbers
        nums[count] += num1
        nums[count + 1] += num2
        tempSum = num1 + num2
        # Now we need a way to compare the tempSum to the rest of the sums of all the other numbers in the array passed in
        # There has to be a more effective way to do this...
        # Do some research on algorithms to best find this solution in an effective amount of time


print(findSmallest([1, 2, 3, 8, 9, 10]))
# 7

