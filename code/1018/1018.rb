n = gets.to_i

def print_and_return_calc(quant, value)
  puts "#{quant / value} nota(s) de R$ #{value},00"
  quant - (quant / value) * value
end

puts n
n = print_and_return_calc(n, 100)
n = print_and_return_calc(n, 50)
n = print_and_return_calc(n, 20)
n = print_and_return_calc(n, 10)
n = print_and_return_calc(n, 5)
n = print_and_return_calc(n, 2)
print_and_return_calc(n, 1)
