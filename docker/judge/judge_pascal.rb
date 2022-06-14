require '../judge/judge_shared'

def judgePascal(path, name)
  code_path = "#{path}/#{name}.pas"

  if File.exist?(code_path)
    `fpc #{code_path}`
    check(path, 'Pascal', "./#{path}/#{name}")
    `rm -rf #{path}/#{name} #{path}/#{name}.o`
  end
end
