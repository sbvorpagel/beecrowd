n = gets.to_i

years = (n / 365).to_i
months = ((n - (years * 365)) / 30).to_i
days = (n - (years * 365) - (months * 30)).to_i

puts format('%d ano(s)', years)
puts format('%d mes(es)', months)
puts format('%d dia(s)', days)
