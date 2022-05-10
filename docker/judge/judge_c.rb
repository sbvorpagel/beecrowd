def judgeC(path, name, verbose = false)
  code_path = "#{path}/#{name}.c"
  output_path = "#{path}/output"
  input_path = "#{path}/input"

  if File.exist?(code_path) and File.exist?(output_path)
    puts 'C Check' if verbose

    `gcc #{code_path} -o #{path}/#{name}`

    cli_code = "./#{path}/#{name}"
    cli_code = "#{cli_code} <#{input_path}" if File.exist?(input_path)
    execution_output = `#{cli_code}`
    `rm -rf #{path}/#{name}`
    puts execution_output if verbose
    file = File.open(output_path)
    file_data = file.read
    file.close

    if file_data == execution_output
      puts 'C is ok!'
    else
      puts "C isn't ok!"
      puts 'Expected: '
      puts file_data
      puts 'Receive: '
      puts execution_output
    end
  end
end
