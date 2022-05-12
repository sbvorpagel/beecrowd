values = gets.split(' ')

def get_bigger(num1, num2)
  (num1 + num2 + (num1 - num2).abs) / 2
end

puts "#{get_bigger(get_bigger(values[0].to_i, values[1].to_i), values[2].to_i)} eh o maior"
