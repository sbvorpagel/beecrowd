emp = gets.to_i
hours = gets.to_i
salary = gets.to_f

puts "NUMBER = #{emp}"
puts "SALARY = U$ #{'%.2f' % (hours * salary).round(2)}"
