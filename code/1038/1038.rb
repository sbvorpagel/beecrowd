input = gets.split(' ')

prices = [4, 4.5, 5, 2, 1.5]

product_code = input[0].to_i
quantity = input[1].to_i

puts format('Total: R$ %.2f', prices[product_code - 1] * quantity)
