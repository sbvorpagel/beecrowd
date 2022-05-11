input_num1 = gets
input_num2 = gets

num1 = input_num1.to_f
num2 = input_num2.to_f

num1_weight = 3.5
num2_weight = 7.5

average = (num1 * num1_weight + num2 * num2_weight) / (num1_weight + num2_weight)

puts "MEDIA = #{'%.5f' % average.round(5)}"
