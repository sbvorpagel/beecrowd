require '../judge/judge_shared'

def judgeC(path, name)
  code_path = "#{path}/#{name}.c"

  if File.exist?(code_path)
    `gcc #{code_path} -o #{path}/#{name} -lm`
    check(path, 'C', "./#{path}/#{name}")
    `rm -rf #{path}/#{name}`
  end
end
