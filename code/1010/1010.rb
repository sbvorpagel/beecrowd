line1 = gets.split(' ')
line2 = gets.split(' ')

quant1 = line1[1].to_i
value1 = line1[2].to_f
quant2 = line2[1].to_i
value2 = line2[2].to_f

puts format('VALOR A PAGAR: R$ %.2f', quant1 * value1 + quant2 * value2)
