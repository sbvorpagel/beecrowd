input = gets.split(' ')

initial_hour = input[0].to_i
initial_minute = input[1].to_i
final_hour = input[2].to_i
final_minute = input[3].to_i

initial_time = initial_hour * 60 + initial_minute
final_time = final_hour * 60 + final_minute

duration_time = initial_time < final_time ? final_time - initial_time : (60 * 24) - initial_time + final_time

duration_hour = duration_time / 60
duration_minute = duration_time % 60

puts "O JOGO DUROU #{duration_hour} HORA(S) E #{duration_minute} MINUTO(S)"
