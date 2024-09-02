import json
from selenium import webdriver
#from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

#TODO this is the adjustable stuff
website = 'https://theportalwiki.com/wiki/Core_voice_lines'
desired_core_position = 'position() >= 3 and position() <= 4'


print('opening website: '+website)
options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)
driver.get(website)
print('website opened!')


#get quotes and audio:
output = ''
output2 = []
elements_obj = driver.find_elements(By.XPATH, "//ul[%s]/li/a" % desired_core_position)
for element in elements_obj:
    output += ('<li>"' + element.text + '"</li>')
    output2.append(element.get_attribute('href'))


#save to JSON file:
file_obj = open("Misc_projects/Portal2/quotes_lines.json", "w")
json.dump((output,), file_obj, indent='\t')#TODO
file_obj.close()
print('quotes saved to JSON file')


#save to JSON file:
file_obj = open("Misc_projects/Portal2/quotes_audio.json", "w")
json.dump(output2, file_obj, indent='\t')#TODO
file_obj.close()
print('audio saved to JSON file')