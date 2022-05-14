n = gets.to_f

def print_values(number_to_print, value_to_print)
  if value_to_print > 1
    puts format('%d nota(s) de R$ %.2f', number_to_print, value_to_print)
  else
    puts format('%d moeda(s) de R$ %.2f', number_to_print, value_to_print)
  end
end

def print_and_return_calc(quant, value)
  number_of_coins = (quant.round(2) / value).to_i
  print_values(number_of_coins, value)
  quant - number_of_coins * value
end

puts 'NOTAS:'
n = print_and_return_calc(n, 100)
n = print_and_return_calc(n, 50)
n = print_and_return_calc(n, 20)
n = print_and_return_calc(n, 10)
n = print_and_return_calc(n, 5)
n = print_and_return_calc(n, 2)
puts 'MOEDAS:'
n = print_and_return_calc(n, 1)
n = print_and_return_calc(n, 0.5)
n = print_and_return_calc(n, 0.25)
n = print_and_return_calc(n, 0.10)
n = print_and_return_calc(n, 0.05)
print_and_return_calc(n, 0.01)
