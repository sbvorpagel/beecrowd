salary = gets.to_f

def increase_to(salary)
  if salary <= 400.00
    15.00
  elsif salary <= 800.00
    12.00
  elsif salary <= 1200.00
    10.00
  elsif salary <= 2000.00
    7.00
  else
    4.00
  end
end

percente = increase_to(salary)

puts format('Novo salario: %.2f', salary * (1 + (percente / 100)))
puts format('Reajuste ganho: %.2f', salary * (percente / 100))
puts format('Em percentual: %.0f %%', percente)
