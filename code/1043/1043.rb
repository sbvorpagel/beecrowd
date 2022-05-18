input = gets.split(' ')

a = input[0].to_f
b = input[1].to_f
c = input[2].to_f

if a + b > c && b + c > a && c + a > b
  puts format('Perimetro = %.1f', a + b + c)
else
  puts format('Area = %.1f', ((a + b) * c) / 2)
end
