require '../judge/judge_shared'

def judgeClojure(path, name)
  code_path = "#{path}/#{name}.clj"
  check(path, 'Clojure', "clojure #{code_path}") if File.exist?(code_path)
end
