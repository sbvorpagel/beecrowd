require '../judge/judge_shared'

def judgeJava(path, name)
  code_path = "#{path}/#{name}.java"

  if File.exist?(code_path)
    `cp #{code_path} Main.java`
    `javac Main.java`
    check(path, 'Java', 'java Main')
    `rm -rf Main.class Main.java`
  end
end
