input_num1 = gets
input_num2 = gets
input_num3 = gets

num1 = input_num1.to_f
num2 = input_num2.to_f
num3 = input_num3.to_f

num1_weight = 2
num2_weight = 3
num3_weight = 5

average = (num1 * num1_weight + num2 * num2_weight + num3 * num3_weight) / (num1_weight + num2_weight + num3_weight)

puts "MEDIA = #{'%.1f' % average.round(1)}"
