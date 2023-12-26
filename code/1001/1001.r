input = file('stdin', 'r')

number_one = as.integer(readLines(input, n=1))

number_two = as.integer(readLines(input, n=1))

write(paste("X =", (number_one + number_two)), '')