require '../judge/judge_shared'

def judgeLua(path, name)
  code_path = "#{path}/#{name}.lua"
  check(path, 'Lua', "lua #{code_path}") if File.exist?(code_path)
end
