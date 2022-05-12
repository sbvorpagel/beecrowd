line = gets.split(' ')

PI = 3.14159

A = line[0].to_f
B = line[1].to_f
C = line[2].to_f

puts format('TRIANGULO: %.3f', (A * C / 2.0))
puts format('CIRCULO: %.3f', PI * (C * C))
puts format('TRAPEZIO: %.3f', ((A + B) * C) / 2.0)
puts format('QUADRADO: %.3f', B * B)
puts format('RETANGULO: %.3f', A * B)
