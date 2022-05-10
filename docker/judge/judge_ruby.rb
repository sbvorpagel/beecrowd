require '../judge/judge_shared'

def judgeRuby(path, name)
  code_path = "#{path}/#{name}.rb"
  check(path, 'Ruby', "ruby #{code_path}") if File.exist?(code_path)
end
