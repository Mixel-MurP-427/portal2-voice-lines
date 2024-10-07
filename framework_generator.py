import json
from audios import all_sounds
from lines import some_lines

output = {}

def make_frame():
    global all_sounds, output
    for bigName in all_sounds:
        output[bigName] = {}
        for littleName in all_sounds[bigName]:
            output[bigName][littleName] = []

    js_file = open("Misc_projects/Portal2/framework.json", 'w')
    json.dump(output, js_file, indent='    ')
    js_file.close()

#note that some weird unicode characters might be escaped by JSON


def reorder():
    global some_lines, output

    for bigName in some_lines:
        for littleName in some_lines[bigName]:
                output[bigName][littleName] = some_lines[bigName][littleName]

    js_file = open("Misc_projects/Portal2/framework.json", 'w')
    json.dump(output, js_file, indent='    ')
    js_file.close()




#main code:
make_frame()
reorder()