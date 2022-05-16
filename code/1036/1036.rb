lines = gets.split(' ')

A = lines[0].to_f
B = lines[1].to_f
C = lines[2].to_f

delta = B * B - 4 * A * C

if delta.negative? || A.zero?
  puts 'Impossivel calcular'
else
  r1 = (-B + Math.sqrt(delta)) / (2 * A)
  r2 = (-B - Math.sqrt(delta)) / (2 * A)

  puts format('R1 = %.5f', r1)
  puts format('R2 = %.5f', r2)
end
