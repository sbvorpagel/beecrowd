require '../judge/judge_shared'

def judgeJS(path, name)
  code_path = "#{path}/#{name}.js"
  check(path, 'JS', "node #{code_path}") if File.exist?(code_path)
end
