def execution_code(command, input_path)
  cli_code = command
  cli_code = "#{cli_code} <#{input_path}" if File.exist?(input_path)
  `#{cli_code}`
end

def feedback(language, execution, expected)
  if execution == expected
    puts "#{language} is ok!"
  else
    puts "#{language} isn't ok!"
    puts 'Expected: '
    puts expected
    puts 'Receive: '
    puts execution
  end
end

def get_output_data(path)
  file = File.open(path)
  file_data = file.read
  file.close
  file_data
end

def get_output_and_input_path(path, index)
  {
    'output' => "#{path}/#{index}.output",
    'input' => "#{path}/#{index}.input"
  }
end

def check(path, language, commannd_string)
  index_input_and_output = 1
  output_and_input_path = get_output_and_input_path(path, index_input_and_output)

  while File.exist?(output_and_input_path['output'])
    execution_output = execution_code(commannd_string, output_and_input_path['input'])
    feedback(language, execution_output, get_output_data(output_and_input_path['output']))
    index_input_and_output += 1
    output_and_input_path = get_output_and_input_path(path, index_input_and_output)
  end
end
