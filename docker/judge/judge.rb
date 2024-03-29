#!/bin/ruby
require '../judge/judge_c'
require '../judge/judge_clojure'
require '../judge/judge_cpp'
require '../judge/judge_csharp'
require '../judge/judge_dart'
require '../judge/judge_haskell'
require '../judge/judge_java'
require '../judge/judge_js'
require '../judge/judge_kotlin'
require '../judge/judge_lua'
require '../judge/judge_ocaml'
require '../judge/judge_pascal'
require '../judge/judge_python'
require '../judge/judge_r'
require '../judge/judge_ruby'
require '../judge/judge_rust'
require '../judge/judge_swift'

puts 'Judge start'

CODE = ARGV[0]
FOLDER_PATH = "../code/#{CODE}"

judgeC(FOLDER_PATH, CODE)
judgeClojure(FOLDER_PATH, CODE)
judgeCPP(FOLDER_PATH, CODE)
judgeCSharp(FOLDER_PATH, CODE)
judgeDart(FOLDER_PATH, CODE)
judgeHaskell(FOLDER_PATH, CODE)
judgeJava(FOLDER_PATH, CODE)
judgeJS(FOLDER_PATH, CODE)
judgeKotlin(FOLDER_PATH, CODE)
judgeLua(FOLDER_PATH, CODE)
judgeOCaml(FOLDER_PATH, CODE)
judgePascal(FOLDER_PATH, CODE)
judgePython(FOLDER_PATH, CODE)
judgeR(FOLDER_PATH, CODE)
judgeRuby(FOLDER_PATH, CODE)
judgeRust(FOLDER_PATH, CODE)
judgeSwift(FOLDER_PATH, CODE)
