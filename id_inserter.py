#this code is probably useless since no attributes will be added to all the li elements

import re, json

js_file = open("Misc_projects/Portal2/Portal2_lines/lines.js", 'r')
js_str = js_file.read()
js_file.close()

li_regex = re.compile(r'<li>')

number = -1
def counter(match_Obj):
    global number
    number += 1
    #print(number)
    return '<li id="li#' + str(number) + '">'

"""
js_file = open("Misc_projects/Portal2/lines_copy.js", 'w')
js_file.write(li_regex.sub(counter, js_str))
js_file.close()
"""
'''
js_file = open("Misc_projects/Portal2/Portal2_lines/lines_copy.json", 'w')
json.dump(output, js_file)
js_file.close()
'''