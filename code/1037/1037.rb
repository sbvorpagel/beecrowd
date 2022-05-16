n = gets.to_f

if n.negative? || n > 100
  puts 'Fora de intervalo'
elsif n <= 25
  puts 'Intervalo [0,25]'
elsif n <= 50
  puts 'Intervalo (25,50]'
elsif n <= 75
  puts 'Intervalo (50,75]'
else
  puts 'Intervalo (75,100]'
end
