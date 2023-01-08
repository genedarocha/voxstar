from selenium import webdriver

# Open a web browser and navigate to the Google homepage
driver = webdriver.Chrome()
driver.get("<https://www.google.com>")

# Locate the search input field and enter a search term
search_input = driver.find_element_by_name("q")
search_input.send_keys("Selenium automation")

# Locate the search button and click it to initiate the search
search_button = driver.find_element_by_name("btnK")
search_button.click()

# Close the web browser
driver.quit()
