cor1 = gets.split(' ')
cor2 = gets.split(' ')

x = cor2[0].to_f - cor1[0].to_f
y = cor2[1].to_f - cor1[1].to_f

puts format('%.4f', Math.sqrt(x**2 + y**2))
