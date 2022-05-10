require '../judge/judge_shared'

def judgeCPP(path, name)
  code_path = "#{path}/#{name}.cpp"

  if File.exist?(code_path)
    `g++ #{code_path} -o #{path}/#{name}`
    check(path, 'C++', "./#{path}/#{name}")
    `rm -rf #{path}/#{name}`
  end
end
