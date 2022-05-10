input = gets

n = 3.14159
r = input.to_f

a = (n * (r * r)).round(4)

puts "A=#{'%.4f' % a}"
