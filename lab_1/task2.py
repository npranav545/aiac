def largest_of_three(a, b, c):
    """Returns the largest of three numbers."""
    return max(a, b, c)

# Input the numbers from the user
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
c = float(input("Enter third number: "))

print("The largest number is:", largest_of_three(a, b, c))