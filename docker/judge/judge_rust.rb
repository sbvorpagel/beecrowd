require '../judge/judge_shared'

def judgeRust(path, name)
  code_path = "#{path}/#{name}.rs"

  if File.exist?(code_path)
    `rustc #{code_path} -o #{path}/#{name}`
    check(path, 'Rust', "./#{path}/#{name}")
    `rm -rf #{path}/#{name}`
  end
end
