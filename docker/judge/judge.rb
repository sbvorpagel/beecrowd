#!/bin/ruby
require '../judge/judge_js'
require '../judge/judge_ruby'
require '../judge/judge_c'
require '../judge/judge_python'
require '../judge/judge_lua'

puts 'Judge start'

CODE = ARGV[0]
FOLDER_PATH = "../code/#{CODE}"

judgeC(FOLDER_PATH, CODE)
judgeJS(FOLDER_PATH, CODE)
judgeLua(FOLDER_PATH, CODE)
judgePython(FOLDER_PATH, CODE)
judgeRuby(FOLDER_PATH, CODE)
