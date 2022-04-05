import random

min_len = 6
max_len = 12
lines = 10000
lpl = int(lines / (max_len - min_len + 1)) + 1  # lines/length
arr = []

for len in range(min_len, max_len + 1):
    min = 10 ** (len - 1)
    max = (10 ** len) - 1
    arr += random.sample(range(min, max), lpl)

random.shuffle(arr)

with open('data_s.txt', 'w+') as writer:
    for number in arr[:lines]:
        writer.write(f'{number}\n')
