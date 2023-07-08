def execution_code(command, input_path)
  cli_code = command
  cli_code = "#{cli_code} <#{input_path}" if File.exist?(input_path)
  `#{cli_code}`
end

def wrong_test(number, language, execution, expected)
  puts "Test #{number} for #{language} failed"
  puts 'Expected: '
  puts expected
  puts 'Receive: '
  puts execution
end

def correct_test(number, language)
  puts "Test #{number} for #{language} passed"
end

def compare_results(execution, expected)
  execution == expected
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

  all_very_well = true

  while File.exist?(output_and_input_path['output'])
    execution_output = execution_code(commannd_string, output_and_input_path['input'])
    if !compare_results(execution_output, get_output_data(output_and_input_path['output']))
      all_very_well = false
      wrong_test(path, language, execution_output, get_output_data(output_and_input_path['output']))
    end
    index_input_and_output += 1
    output_and_input_path = get_output_and_input_path(path, index_input_and_output)
  end

  if all_very_well
    correct_test(path, language)
    return 0
  end
  return 1
end
