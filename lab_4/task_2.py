import statistics

# Take input from user
data = input("Enter numbers separated by spaces: ")
numbers = list(map(float, data.split()))

# Calculate mean, median, and mode
mean = statistics.mean(numbers)
median = statistics.median(numbers)
try:
    mode = statistics.mode(numbers)
except statistics.StatisticsError:
    mode = "No unique mode found"

print(f"Mean: {mean}")
print(f"Median: {median}")
print(f"Mode: {mode}")