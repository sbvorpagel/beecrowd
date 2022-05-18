input = gets.split(' ')
a = input[0].to_i
b = input[1].to_i

if (a % b).zero? || (b % a).zero?
  puts 'Sao Multiplos'
else
  puts 'Nao sao Multiplos'
end
