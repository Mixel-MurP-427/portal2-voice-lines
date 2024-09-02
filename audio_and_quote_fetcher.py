import json
from selenium import webdriver
#from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

#TODO this is the adjustable stuff
website = 'https://theportalwiki.com/wiki/Core_voice_lines'
desired_core_position = 10


print('opening website: '+website)
options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
driver = webdriver.Chrome(options=options)
driver.get(website)
print('website opened!')


#get quotes:
output = ''
elements_obj = driver.find_elements(By.XPATH, "//ul[%s]/li/i[1]" % desired_core_position)
for element in elements_obj:
    output += ('<li>"' + element.text + '"</li>')

#for _ in elements_obj: print(_.text)

#save to JSON file:
file_obj = open("Misc_projects/Portal2lines/quotes_lines.json", "w")
json.dump((output,), file_obj, indent='\t')#TODO
file_obj.close()
print('quotes saved to JSON file')


#get audio:
output = []
elements_obj = driver.find_elements(By.XPATH, "//ul[%s]/li/span[1]/a" % desired_core_position)
for element in elements_obj:
    output.append(element.get_attribute('href'))

#save to JSON file:
file_obj = open("Misc_projects/Portal2lines/quotes_audio.json", "w")
json.dump(output, file_obj, indent='\t')#TODO
file_obj.close()
print('audio saved to JSON file')