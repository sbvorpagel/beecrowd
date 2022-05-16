inputs = gets.split(' ')

n1 = inputs[0].to_f * 2
n2 = inputs[1].to_f * 3
n3 = inputs[2].to_f * 4
n4 = inputs[3].to_f

average = (n1 + n2 + n3 + n4) / 10

puts format('Media: %.1f', average)

if average < 5
  puts 'Aluno reprovado.'
elsif average > 7
  puts 'Aluno aprovado.'
else
  puts 'Aluno em exame.'
  exam = gets.to_f
  puts format('Nota do exame: %.1f', exam)
  average_f = (average + exam) / 2
  if average_f < 5
    puts 'Aluno reprovado.'
  else
    puts 'Aluno aprovado.'
  end
  puts format('Media final: %.1f', average_f)
end
