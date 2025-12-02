
# Read inputs
n = int(input())
k = int(input())
m = int(input())

# Read the list of lengths
lengths = list(map(int, input().split()))

# Sort the lengths in increasing order
lengths.sort()

total_length = 0
count = 0

# Go through each length
for length in lengths:
    # Check if we can include this length
    if k * (total_length + length) <= m * (count + 1):
        total_length += length
        count += 1

# Print the result
print(count)
