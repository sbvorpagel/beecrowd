require '../judge/judge_shared'

def judgeKotlin(path, name)
  code_path = "#{path}/#{name}.kt"
  jar_path = "#{path}/#{name}.jar"
  if File.exist?(code_path)
    `kotlinc #{code_path} -include-runtime -d #{jar_path}`
    check(path, 'Kotlin', "java -jar #{jar_path}")
    `rm -rf #{jar_path}`
  end
end
