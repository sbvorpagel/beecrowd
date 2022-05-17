number_of_lines = gets.to_i

def mdc(num1, num2)
  return num1 if num2.zero?

  mdc(num2, num1 % num2)
end

def sum_fractions(fraction1, fraction2)
  denominator = fraction1[1] * fraction2[1]
  numerator =
    (denominator / fraction1[1]) * fraction1[0] +
    (denominator / fraction2[1]) * fraction2[0]

  [numerator, denominator]
end

def sub_fractions(fraction1, fraction2)
  denominator = fraction1[1] * fraction2[1]
  numerator =
    (denominator / fraction1[1]) * fraction1[0] -
    (denominator / fraction2[1]) * fraction2[0]

  [numerator, denominator]
end

def mul_fractions(fraction1, fraction2)
  denominator = fraction1[1] * fraction2[1]
  numerator = fraction1[0] * fraction2[0]

  [numerator, denominator]
end

def div_fractions(fraction1, fraction2)
  denominator = fraction1[1] * fraction2[0]
  numerator = fraction1[0] * fraction2[1]

  [numerator, denominator]
end

def simplify_fractions(num1, num2)
  div = mdc(num1.abs, num2)
  [num1 / div, num2 / div]
end

def print_fractions(fraction, simplify_fraction)
  puts "#{fraction[0]}/#{fraction[1]} = #{simplify_fraction[0]}/#{simplify_fraction[1]}"
end

[*1..number_of_lines].each do
  entry = gets.split(' ')
  fraction = []

  if entry[3] == '+'
    fraction = sum_fractions(
      [entry[0].to_i, entry[2].to_i],
      [entry[4].to_i, entry[6].to_i]
    )
  end
  if entry[3] == '-'
    fraction = sub_fractions(
      [entry[0].to_i, entry[2].to_i],
      [entry[4].to_i, entry[6].to_i]
    )
  end
  if entry[3] == '/'
    fraction = div_fractions(
      [entry[0].to_i, entry[2].to_i],
      [entry[4].to_i, entry[6].to_i]
    )
  end
  if entry[3] == '*'
    fraction = mul_fractions(
      [entry[0].to_i, entry[2].to_i],
      [entry[4].to_i, entry[6].to_i]
    )
  end

  simplified_fraction = simplify_fractions(fraction[0], fraction[1])

  print_fractions(fraction, simplified_fraction)
end
