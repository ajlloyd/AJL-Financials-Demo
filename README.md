# AJL Financials - fundemental-stock-analysis
NextJS website parsing data from Alpha Vantage API and Yahoo Finance API to allow a user to compare up to 5 stock tickers of their choice. Follow below steps to install this locally:

1 - Either clone this repository or download the source files

2 - Ensure Node version 16.13.1 or higher is installed (may work with previous versions although untested)

3 - In the home directory (where the node_modules folder is) run the node command "npm install" in a cmd to install node packages

4 - Once packages are installed run the node command "npm run dev"

5 - Server should run at http://localhost:3000

6 - Navigate to local host and UI should appear. Most tickers work (i.e. MSFT, AAPL, ADBE); however, more obscure tickers may give an error

7 - Allow around 20 to 30 seconds per ticker as the API has to fetch the data

8 - Compare and Profit!
