require '../judge/judge_shared'

def judgeOCaml(path, name)
  code_path = "#{path}/#{name}.ml"
  check(path, 'OCaml', "ocaml #{code_path}") if File.exist?(code_path)
end
