numbers = gets.split(' ').reject(&:empty?).map(&:to_i)
puts numbers.sort
puts ''
puts numbers
