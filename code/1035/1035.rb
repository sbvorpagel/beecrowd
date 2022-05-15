line = gets.split(' ')

A = line[0].to_i
B = line[1].to_i
C = line[2].to_i
D = line[3].to_i

if B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A.even?
  puts 'Valores aceitos'
else
  puts 'Valores nao aceitos'
end
