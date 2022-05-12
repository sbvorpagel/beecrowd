name = gets
base = gets.to_f
sales = gets.to_f

new_salary = base + (sales * 0.15)

puts format('TOTAL = R$ %.2f', new_salary)
