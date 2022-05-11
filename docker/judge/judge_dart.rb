require '../judge/judge_shared'

def judgeDart(path, name)
  code_path = "#{path}/#{name}.dart"
  check(path, 'Dart', "dart run #{code_path}") if File.exist?(code_path)
end
