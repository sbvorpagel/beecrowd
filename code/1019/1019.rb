n = gets.to_i

hours = (n / 3600).to_i
minutes = ((n - (hours * 3600)) / 60).to_i
seconds = (n - (hours * 3600) - (minutes * 60)).to_i

puts format('%d:%d:%d', hours, minutes, seconds)
