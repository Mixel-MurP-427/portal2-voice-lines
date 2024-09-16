import re

js_file = open("Portal2_lines/index.js", 'r')
js_str = js_file.read()
js_file.close()

li_regex = 