def judgeRuby(path, name, verbose = false)
  code_path = "#{path}/#{name}.rb"
  output_path = "#{path}/output"
  input_path = "#{path}/input"

  if File.exist?(code_path) and File.exist?(output_path)
    puts 'Ruby Check' if verbose

    cli_code = "ruby #{code_path}"
    cli_code = "#{cli_code} <#{input_path}" if File.exist?(input_path)
    execution_output = `#{cli_code}`
    puts execution_output if verbose
    file = File.open(output_path)
    file_data = file.read
    file.close

    if file_data == execution_output
      puts 'Ruby is ok!'
    else
      puts "Ruby isn't ok!"
      puts 'Expected: '
      puts file_data
      puts 'Receive: '
      puts execution_output
    end
  end
end
