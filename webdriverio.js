const webdriverio = require('webdriverio');

(async () => {
  // Open a web browser and navigate to the Google homepage
  const client = await webdriverio.remote({
    capabilities: {
      browserName: 'chrome'
    }
  });
  await client.url('https://www.google.com');

  // Locate the search input field and enter a search term
  await client.setValue('input[name=q]', 'WebdriverIO automation');

  // Locate the search button and click it to initiate the search
  await client.click('button[name=btnK]');

  // Wait for the search results to load
  await client.waitForExist('#search');

  // Close the web browser
  await client.deleteSession();
})();
