# frozen_string_literal: true

inputs = gets.split(' ')

x = inputs[0].to_f
y = inputs[1].to_f

if x.zero? && y.zero?
  puts 'Origem'
elsif x.zero?
  puts 'Eixo Y'
elsif y.zero?
  puts 'Eixo X'
else
  puts 'Q1' if x.positive? && y.positive?
  puts 'Q2' if x.negative? && y.positive?
  puts 'Q3' if x.negative? && y.negative?
  puts 'Q4' if x.positive? && y.negative?
end
