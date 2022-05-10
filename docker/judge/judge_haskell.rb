require '../judge/judge_shared'

def judgeHaskell(path, name)
  code_path = "#{path}/#{name}.hs"
  check(path, 'Haskell', "runhaskell #{code_path}") if File.exist?(code_path)
end
