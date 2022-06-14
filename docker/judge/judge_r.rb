require '../judge/judge_shared'

def judgeR(path, name)
  code_path = "#{path}/#{name}.r"
  check(path, 'R', "Rscript #{code_path}") if File.exist?(code_path)
end
