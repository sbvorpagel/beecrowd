#!/bin/ruby
require '../judge/judge_js'
require '../judge/judge_ruby'
require '../judge/judge_c'
require '../judge/judge_python'

puts 'Judge start'

CODE = ARGV[0]
FOLDER_PATH = "../code/#{CODE}"
VERBOSE = !!ARGV[1]

puts 'Verbose mode' if VERBOSE

judgeC(FOLDER_PATH, CODE, VERBOSE)
judgeJS(FOLDER_PATH, CODE, VERBOSE)
judgeRuby(FOLDER_PATH, CODE, VERBOSE)
judgePython(FOLDER_PATH, CODE, VERBOSE)
