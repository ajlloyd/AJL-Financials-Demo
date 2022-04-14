# fundemental-stock-analysis
NextJS website parsing data from Alpha Vantage API and Yahoo Finance API to allow a user to compare upto 5 stock tickers of their choice. Follow below steps to install this locally:

1 - Either clone this repository or download the source files
2 - Ensure Node version 16.13.1 or higher is installed (may work with previous versions although untested)
3 - In the install directory run the node command "npm install" to install node packages
4 - Once packages are installed run the node command "npm run dev"
5 - Server should run at http://localhost:3000
6 - Navigate to local host and UI should appear. Most tickers work (i.e. MSFT, AAPL, ADBE); however, more obscure tickers may give an error
7 - Allow around 20 to 30 seconds per ticker as the API has to fetch the data 
8 - Profit!
