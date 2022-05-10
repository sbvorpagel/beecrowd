require '../judge/judge_shared'

def judgePython(path, name)
  code_path = "#{path}/#{name}.py"
  check(path, 'Python', "python3 #{code_path}") if File.exist?(code_path)
end
