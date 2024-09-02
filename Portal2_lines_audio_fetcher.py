import re, json
from selenium import webdriver
#from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

desired_lines_html = ''''''

sites_to_search = ('https://theportalwiki.com/wiki/Wheatley_voice_lines','https://theportalwiki.com/wiki/GLaDOS_voice_lines_(Portal_2)')#TODO

quote_regex = re.compile(r'<li>.*?"(.+?)".*?</li>')
desired_lines = quote_regex.findall(desired_lines_html)
#print(desired_lines)

#emove single quotes
line_counter = -1
for line in desired_lines:
    line_counter +=1
    counter = -1
    newline = ''
    for char in line:
        counter += 1
        if char == "'":
            desired_lines[line_counter] = newline
            break
        newline += char

for line in desired_lines: print(line)

output = [''] * len(desired_lines)
#print(output)

for website in sites_to_search:
    print('opening website: '+website)
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    driver.get(website)
    print('website opened!')

    counter = -1
    for line in desired_lines:
        counter += 1
        if output[counter]=='error':continue

        #elements_obj = driver.find_elements(By.XPATH, "//i[text()='%s']/../span[1]/a" % line)#uses exact text match
        elements_obj = driver.find_elements(By.XPATH, "//i[contains(text(), '%s')]/../span[1]/a" % line)#if element contains text
        #print(elements_obj)
        #elements = tuple(lmnt.text for lmnt in elements_obj)
        #print(elements)
        if len(elements_obj) > 1 or (len(elements_obj) == 1 and output[counter] != ''):
            output[counter] = 'error'
            continue
        elif len(elements_obj) == 0:
            continue
        #print(output[counter])
        output[counter] = elements_obj[0].get_attribute('href')


assert len(output) == len(desired_lines)
#print(output)

#save to JSON file:
file_obj = open("Misc_projects/Portal2lines/quotes_audio.json", "w")
json.dump(output, file_obj, indent='\t')
file_obj.close()
print('audio saved to JSON file')