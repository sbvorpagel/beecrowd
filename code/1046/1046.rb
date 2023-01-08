input = gets.split(' ')
a = input[0].to_i
b = input[1].to_i

puts "O JOGO DUROU #{a < b ? b - a : 24 - a + b} HORA(S)"
