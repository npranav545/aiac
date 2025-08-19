# Python program to convert a number to binary digits

# Take input from the user
num = int(input("Enter an integer: "))

# Convert to binary using bin() and remove the '0b' prefix
binary = bin(num)[2:]

print(f"Binary representation of {num} is {binary}")