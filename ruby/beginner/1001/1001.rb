def make_output(sum)
    "X = #{sum}"
end

def calculate_sum(number1, number2)
  number1 + number2
end

def build_solution(number1, number2)
  sum = calculate_sum(number1, number2)
  make_output(sum)
end

if __FILE__ == $0
    number1 = gets.to_i
    number2 = gets.to_i
    solution = build_solution(number1, number2)
    puts solution
end
