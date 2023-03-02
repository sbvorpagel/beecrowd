require '../judge/judge_shared'

def judgeSwift(path, name)
  code_path = "#{path}/#{name}.swift"
  check(path, 'Swift', "swift #{code_path}") if File.exist?(code_path)
end
