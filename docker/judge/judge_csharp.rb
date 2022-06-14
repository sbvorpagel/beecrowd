require '../judge/judge_shared'

def judgeCSharp(path, name)
  code_path = "#{path}/#{name}.cs"

  if File.exist?(code_path)
    `mcs #{code_path}`
    check(path, 'C#', "mono ./#{path}/#{name}.exe")
    `rm -rf #{path}/#{name}.exe`
  end
end
