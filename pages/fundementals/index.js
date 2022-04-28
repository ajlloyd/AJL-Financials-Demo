import React, {useEffect, useState} from 'react'
import { GetServerSideProps } from 'next'
//import fetch from 'node-fetch'
import styles from "../../styles/StockTable.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'
import {BsArrowUp, BsArrowDown, BsBackspace} from "react-icons/bs"
import Button from 'react-bootstrap/Button'
import OverlayStockTable from '../../components/OverlayStockTable'
import Graphy from '../../components/Graphy'




const Index = (props, {income}) => {

    const router = useRouter();
    const tickerPayloadObject = router.query;
    const tickerPayloadArray = Object.values(tickerPayloadObject)
    console.log(tickerPayloadArray)


    const grossProfitProps = props.grossProfitAll
    const netProfitProps = props.netProfitAll
    const profitMarginProps = props.netProfitMarginAll


    const dataSet = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}






    





    //displays stock tickers in query:
    //console.log(ticketPayloadArray)
    //console.log(tickerPayloadLength)


    //displays api query
    //console.log(props.priceData[0]["Global Quote"]["05. price"])
    //console.log(props.incomeData[1]["50DayMovingAverage"])
    //console.log(props.router.query.name);
    //console.log(props.incomeData[1]["annualReports"])
    //console.log(props.balanceData[0]["annualReports"])




    return (
        <div>

            <Button className={styles.homeButton} variant="danger" href='/'> <BsBackspace/> Home </Button>
            <div className={styles.container}>
                <table>
                    <tbody>

                        {/* Header -------------------------------------------------------------------------------------------------------------------------------------------*/}
                        <tr id={styles.headerRow}><td>Stock Ticker:</td>
                        {tickerPayloadArray.map((x, i) => {
                        return (
                        <td key={`dynamicTickerHeader${i}`}>{x}</td>)
                        })}</tr>

                        <Graphy/>


                        



                        {/* 1 - Stock Name Row */}
                        <tr><td>Name</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`name${i}`}>{props.priceData[i]["shortName"]}</td>)
                        })}</tr>

                        {/* 1 - Stock Name Row */}
                        <tr><td>Sector</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`sector${i}`}>{props.overviewData[i]["Sector"]}</td>)
                        })}</tr>


                        {/* 2 - Analyst Rating  */}
                        <tr><td>Average Analyst Rating</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`Rating${i}`}>{props.priceData[i]["averageAnalystRating"]}</td>)
                        })}</tr>    


                        {/* Current Info Header (black) -----------------------------------------------------------------------------------------------------------------------*/}
                        <tr id={styles.headerRow}><td>Current Stock Info</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`CurrentStockInfo${i}`}></td>)
                        })}</tr>

                        {/* 3 - Realtime Stock Price Row */}
                        <tr><td>Price</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`price${i}`}>{props.priceData[i]["regularMarketPrice"] + " " + props.priceData[i]["currency"]}</td>)
                        })}</tr>

                        {/* 4 - Market Change Since Open */}
                        <tr><td>Change Since Close</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`change${i}`}>{props.priceData[i]["regularMarketChange"].toFixed(2) + " " + props.priceData[i]["currency"] + "  (" + props.priceData[i]["regularMarketChangePercent"].toFixed(2) + " %)"}</td>
                                )
                        })}</tr>


                        {/* 6 - Fifty Day MA */}
                        <tr><td>50 Day MA</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`50dayMA${i}`}>{props.priceData[i]["fiftyDayAverage"].toFixed(2)}</td>)
                        })}</tr>

                        {/* 6 - Two hundred Day MA */}
                        <tr><td>200 Day MA</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`200dayMA${i}`}>{props.priceData[i]["twoHundredDayAverage"].toFixed(2)}</td>)
                        })}</tr>

                        {/* 7 - 52 Week High */}
                        <tr><td>52 Week High</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`52wkHigh${i}`}>{props.priceData[i]["fiftyTwoWeekHigh"].toFixed(2)}</td>)
                        })}</tr>

                        {/* 52 Week Low */}
                        <tr><td>52 Week Low</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`52wkLow${i}`}>{props.priceData[i]["fiftyTwoWeekLow"].toFixed(2)}</td>)
                        })}</tr>


                        {/* 52 Week High Discount Percentage */}
                        <tr><td>52 Week High Discount (%)</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`pctChange${i}`}>{(props.priceData[i]["fiftyTwoWeekHighChangePercent"]*100).toFixed(2) + " %"}</td>)
                        })}</tr>


                        {/* Earnings --------------------------------------------------------------------------------------------------------------------------------*/}
                        <tr id={styles.headerRow}><td>Earnings</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`EIG${i}`}></td>)
                        })}</tr>

                        {/* Earnings Per Share */}
                        <tr><td>
                            <div className={styles.analysisType}>
                                <OverlayStockTable
                                overlayHeader="Earnings Per Share (EPS)"
                                overlayBody=
                                "EPS indicates how much money a company makes for each share of its stock. A higher EPS indicates greater value."/>
                                Earnings Per Share (EPS) <BsArrowUp/>
                            </div></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`EPS${i}`}>{props.priceData[i]["epsTrailingTwelveMonths"]}</td>)
                        })}</tr>


                        {/* Earnings Per Share Forecast */}
                        <tr><td>
                            <div className={styles.analysisType}>
                                <OverlayStockTable
                                overlayHeader="Earnings Per Share Forecast"
                                overlayBody="Forecast of the EPS metric above for the coming year."/>
                                Earnings Per Share Forecast <BsArrowUp/>
                            </div></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`EPSforecast${i}`}>{props.priceData[i]["epsForward"]}</td>)
                        })}</tr>


                        {/* Earnings Yield (per share) */}
                        <tr><td>
                            <div className={styles.analysisType}>
                                <OverlayStockTable
                                overlayHeader="Earnings Yield (per share)"
                                overlayBody="Earnings yield is one indication of value; a low ratio may indicate an overvalued stock, 
                                or a high value may indicate an undervalued stock."/>
                                Earnings Yield (per share) <BsArrowUp/>
                            </div></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`EPS${i}`}>{parseFloat((1/props.priceData[i]["epsTrailingTwelveMonths"])*100).toFixed(2)+" %"}</td>)
                        })}</tr>

                        {/* P/E Ratio */}
                        <tr><td>
                            <div className={styles.analysisType}>
                                <OverlayStockTable
                                overlayHeader="P/E Ratio (20 or lower)"
                                overlayBody="The price-to-earnings (P/E) ratio relates a company's share price to its earnings per share.
                                Ideally the PE should be lower than 20 but this can vary between different industries."/>
                                P/E Ratio (20 or lower) <BsArrowDown/>
                            </div></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`PE${i}`}>{( props.priceData[i]["regularMarketPrice"] / props.priceData[i]["epsTrailingTwelveMonths"] ).toFixed(2)}</td>)
                        })}</tr>


                        {/* PEG Ratio */}
                        <tr><td>
                            <div className={styles.analysisType}>
                                <OverlayStockTable
                                overlayHeader="PEG Ratio"
                                overlayBody="The price-to-earnings (P/E) ratio relates a company's share price to its earnings per share.
                                Ideally the PE should be lower than 20 but this can vary between different industries."/>
                                PEG Ratio <BsArrowDown/>
                            </div></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`PEG${i}`}>{ props.overviewData[i]["PEGRatio"]}</td>)
                        })}</tr>


                        {/* Book Value */}
                        <tr><td>
                            <div className={styles.analysisType}>
                                <OverlayStockTable
                                overlayHeader="Book Value"
                                overlayBody="bbb"/>
                                Book Value
                            </div></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`pbRatio${i}`}>{ props.priceData[i]["bookValue"] }</td>)
                        })}</tr>

                        {/* Price to Book ratio (<1 ideal) */}
                        <tr><td> Price to Book ratio <BsArrowDown/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`pbRatio${i}`}>{ (props.priceData[i]["regularMarketPrice"] / props.priceData[i]["bookValue"]).toFixed(2) }</td>)
                        })}</tr>






                        {/* Gross Profit Growth Header */}
                        <tr id={styles.yoyHeader}><td>Gross Profit Growth (YoY) <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`grossProfit${i}`}></td>)
                        })}</tr>
                                                            
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 1} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr1-${i}`}> { grossProfitProps[i][0] } </td>)})}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 2} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr2-${i}`}> { grossProfitProps[i][1] } </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 3} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr3-${i}`}> { grossProfitProps[i][2] } </td>)})}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 4} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr4-${i}`}> { grossProfitProps[i][3] } </td>)})}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 5} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr5-${i}`}> { grossProfitProps[i][4] } </td>)})}</tr>


                        {/* Gross Profit Growth Header */}
                        <tr id={styles.yoyHeader}><td>Net Profit Growth (YoY) <BsArrowUp/></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`netProfit${i}`}></td>)
                        })}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 1} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr1-${i}`}> { netProfitProps[i][0] } </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 2} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr2-${i}`}> { netProfitProps[i][1] } </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 3} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr3-${i}`}> { netProfitProps[i][2] } </td>)})}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 4} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr4-${i}`}> { netProfitProps[i][3] } </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 5} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr5-${i}`}> { netProfitProps[i][4] } </td>)})}</tr>        



                        {/* Net Profit Margin Header */}
                        <tr id={styles.yoyHeader}><td>Net Profit Margin (YoY) <BsArrowUp/></td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`netProfitMargin${i}`}></td>)
                        })}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 1} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr1-${i}`}> {profitMarginProps[i][0]} </td>)})}</tr>

                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 2} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr2-${i}`}> {profitMarginProps[i][1]} </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 3} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr3-${i}`}> { profitMarginProps[i][2]} </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 4} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr4-${i}`}> { profitMarginProps[i][3]} </td>)})}</tr>
                        
                        <tr id={styles.yoyRow}><td id={styles.year}> {new Date().getFullYear() - 5} </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`yr5-${i}`}> { profitMarginProps[i][4]} </td>)})}</tr>


                        {/* Return on Equity */}
                        <tr><td> Return on Equity (ROE) <BsArrowUp/> (14%+) </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`roe${i}`}> {((props.incomeData[i]["netIncome"] / props.balanceData[i]["totalShareholderEquity"])*100).toFixed(2) + " %"} </td>)
                        })}</tr>

                         {/* Free Cash Flow Yield */}
                         <tr><td> Free Cash Flow Yield <BsArrowUp/> (5%+) </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`fcfy${i}`}> insertDataHere</td>)
                        })}</tr>      

                        {/* Total Shareholder Yield */}
                        <tr><td> Total Shareholder Yield <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`shareholderYield${i}`}> insertDataHere</td>)
                        })}</tr>                 



                        {/* Dividends Header (black) ------------------------------------------------------------------------------------------------------------------- */}
                        <tr id={styles.headerRow}><td>Dividend Information</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`dividends${i}`}></td>)
                        })}</tr>

                        {/* Dividend per share */}
                        <tr><td> Dividend Per Share</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`divPerShare${i}`}> {props.overviewData[i]["DividendPerShare"]}</td>)
                        })}</tr>

                        {/* Dividend Yield */}
                        <tr><td> Dividend Yield</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`divYield${i}`}> {(props.overviewData[i]["DividendYield"]*100) + " %"}</td>)
                        })}</tr>                    

                        {/* Financials Header (black) ------------------------------------------------------------------------------------------------------------------ */}
                        <tr id={styles.headerRow}><td>Financials</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`financials${i}`}></td>)
                        })}</tr>

                        {/* Total Revenue */}
                        <tr><td> Total Revenue (TTM) </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`totalRevenue${i}`}> {((props.incomeData[i]["annualReports"][0]["totalRevenue"]/10000000|0).toLocaleString())} </td>)
                        })}</tr>   

                        {/* Cost of Goods */}
                        <tr><td> Cost of Goods (TTM) </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`costOfGoods${i}`}> {((props.incomeData[i]["annualReports"][0]["costofGoodsAndServicesSold"]/10000000|0).toLocaleString())} </td>)
                        })}</tr>


                        {/* Operating Income/Loss (TTM) */}
                        <tr><td> Operating Income/Loss (TTM) </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`opIncomeAndLoss${i}`}> {((props.incomeData[i]["annualReports"][0]["operatingIncome"]/10000000|0).toLocaleString())} </td>)
                        })}</tr>  

                        {/* Gross Profit (TTM) */}
                        <tr><td> Gross Profit (TTM) </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`grossProfit${i}`}> {((props.incomeData[i]["annualReports"][0]["grossProfit"]/10000000|0).toLocaleString())} </td>)
                        })}</tr> 

                        {/* Cost of Goods Margin (TTM) */}
                        <tr><td> Cost of Goods Margin (TTM) <BsArrowDown/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`grossProfit${i}`}> {(((props.incomeData[i]["annualReports"][0]["costofGoodsAndServicesSold"]/props.incomeData[i]["annualReports"][0]["totalRevenue"])*100).toFixed(2)) + " %"} </td>)
                        })}</tr>       


                        {/* Operating Margin (TTM) */}
                        <tr><td> Operating Margin (TTM) <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`grossProfit${i}`}> {(((props.incomeData[i]["annualReports"][0]["operatingIncome"]/props.incomeData[i]["annualReports"][0]["totalRevenue"])*100).toFixed(2)) + " %"} </td>)
                        })}</tr>

                        {/* Balance Sheet Header (black) ---------------------------------------------------------------------------------------------------------------------- */}
                        <tr id={styles.headerRow}><td>Balance Sheet</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`balance${i}`}></td>)
                        })}</tr>

                        {/* Total Cash and ST investments */}
                        <tr><td>Total Cash and Short Term Investments</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`cashAndInvestments${i}`}>{((props.balanceData[i]["annualReports"][0]["cashAndShortTermInvestments"]/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* Total Current Assets */}
                        <tr><td>Total Current Assets</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`currentAssets${i}`}>{((props.balanceData[i]["annualReports"][0]["totalCurrentAssets"]/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* Total Current Liabilities */}
                        <tr><td>Total Current Liabilities</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`currentLiabilities${i}`}>{((props.balanceData[i]["annualReports"][0]["totalCurrentLiabilities"]/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* Total 1 year Excess */}
                        <tr><td>1 Year Current Excess <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`oneYearExcess${i}`}>{(((props.balanceData[i]["annualReports"][0]["totalCurrentAssets"] - props.balanceData[i]["annualReports"][0]["totalCurrentLiabilities"])/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* Asset to Liability Ratio */}
                        <tr><td>Current Asset to Liability Ratio <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`assetToLiabilityRatio${i}`}>{((props.balanceData[i]["annualReports"][0]["totalCurrentAssets"]/props.balanceData[i]["annualReports"][0]["totalCurrentLiabilities"]).toFixed(2))}</td>)
                        })}</tr>

                        {/* Total Assets */}
                        <tr><td>Total Assets</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`totalAssets${i}`}>{((props.balanceData[i]["annualReports"][0]["totalAssets"]/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* Total Liabilities */}
                        <tr><td>Total Liabilities</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`totalLiabilities${i}`}>{((props.balanceData[i]["annualReports"][0]["totalLiabilities"]/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* TATL Ratio */}
                        <tr><td>Total Asset to Liability Ratio (TATL) <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`assetToLiabilityRatio${i}`}>{((props.balanceData[i]["annualReports"][0]["totalAssets"]/props.balanceData[i]["annualReports"][0]["totalLiabilities"]).toFixed(2))}</td>)
                        })}</tr>

                        {/* Total Shareholder Equity */}
                        <tr><td>Total Shareholder Equity</td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`totalShareholderEquity${i}`}>{((props.balanceData[i]["annualReports"][0]["totalShareholderEquity"]/10000000|0).toLocaleString())}</td>)
                        })}</tr>

                        {/* Debt to Equity Ratio */}
                        <tr><td>Debt to Equity Ratio <BsArrowDown/> </td>
                        {tickerPayloadArray.map((x,i) => {
                            return(
                                <td key={`debtToEquity${i}`}>{((props.balanceData[i]["annualReports"][0]["totalLiabilities"]/props.balanceData[i]["annualReports"][0]["totalShareholderEquity"]).toFixed(2))}</td>)
                        })}</tr>


                        {/* Altman Z-Score */}
                        <tr><td>Altman Z-Score <BsArrowUp/> </td>
                        {tickerPayloadArray.map((x,i) => {

                            const totalAssets = props.balanceData[i]["annualReports"][0]["totalAssets"]
                            const totalLiabilities = props.balanceData[i]["annualReports"][0]["totalLiabilities"]



                            const workingCapital = props.balanceData[i]["annualReports"][0]["totalCurrentAssets"] - props.balanceData[i]["annualReports"][0]["totalCurrentLiabilities"]
                            const a = workingCapital / totalAssets
                            const b = props.balanceData[i]["annualReports"][0]["retainedEarnings"] / totalAssets
                            const c = props.incomeData[i]["annualReports"][0]["ebit"] / props.balanceData[i]["annualReports"][0]["totalAssets"]
                            const marketCapitalisation = props.balanceData[i]["annualReports"][0]["commonStockSharesOutstanding"] * props.priceData[i]["regularMarketPrice"]
                            const d = marketCapitalisation / totalLiabilities
                            const e = props.incomeData[i]["annualReports"][0]["totalRevenue"] / totalAssets

                            const altmanZScore = (1.2*a) + (1.4*b) + (3.3*c) + (0.6*d) + (1.0*e)
                            
                            return(
                                <td key={`debtToEquity${i}`}>{altmanZScore.toFixed(2)}</td>)
                        })}</tr>






                    
                    </tbody>
                </table>
            </div>
        </div>
  )
}


export async function getServerSideProps(props, context) {

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }


    function growthCalculation(annualReport, type) {
        const growths = []
        for (let i=0; i<annualReport.length-1; i++ ){
            const current = annualReport[i][type]
            const previous = annualReport[i+1][type]
            const yearGrowth = (((current - previous) / previous ) * 100).toFixed(2) + " %"
            growths.push(yearGrowth)
        }
        return growths
    }


    function ratioCalculation(annualReport, var1, var2) {
        const allRatios = []
        for (let i=0; i<annualReport.length; i++) {
            const numerator = annualReport[i][var1]
            const denominator = annualReport[i][var2]
            const ratio = ((numerator/denominator)*100).toFixed(2) + " %"
            allRatios.push(ratio)
        }
        return allRatios
    }

    function standardiseData(annualReports){
        if (annualReports.length === 5) {
            console.log("No action")
        } else if (annualReports.length < 5) {
            const difference = (5 - annualReports.length)
            for (var i=0; i<difference; i++) annualReports.push("No Data")
        } else {
            const extra = (annualReports.length - 5)
            for (var i=0; i<extra; i++) annualReports.pop()
        }
        return annualReports
    }


    const queryTickers = props.query
    const overviewData = [];
    const incomeData = [];
    const priceData = [];
    const balanceData = [];
    const grossProfitAll = [];
    const netProfitAll = [];
    const netProfitMarginAll = [];


    for (const singleTicker in queryTickers) {
        const ticker = queryTickers[singleTicker]

        // ----- Overview Data - Alpha Vantage API -----:
        console.log(`Overview query running ${ticker}... `);
        const overviewResponse = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=Z7EE76KI01SJKDIN`);
        const overview = await overviewResponse.json();
        overviewData.push(overview);
        await sleep(12000);  
        

        // ----- Income Data - Alpha Vantage API -----:
        console.log(`Income query running ${ticker}... `);
        const incomeResponse = await fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=Z7EE76KI01SJKDIN`);
        const income = await incomeResponse.json();
        incomeData.push(income);
        await sleep(12000);  

        // ----- Price Data - Yahoo Finance API -----:
        console.log(`Price query running ${ticker}... `);
        const priceResponse = await fetch(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${ticker}`, {
            method: "GET", 
            accept: "application/json",
            headers: {'x-api-key': 'u74BHf6Zs044lOC4blIke4uvHWmsEdPZ5v4gbJT6'}});
        const prices = await priceResponse.json();
        const shortenedPrices = prices["quoteResponse"]["result"][0]
        priceData.push(shortenedPrices);


        // ----- Balance Sheet Data - Alpha Vantage API -----:
        console.log(`Balance query running ${ticker}... `);
        const balanceResponse = await fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${ticker}&apikey=Z7EE76KI01SJKDIN`);
        const balance = await balanceResponse.json();
        balanceData.push(balance);
        await sleep(12000);

        // Gross profit growth:
        const grossProfitGrowth = growthCalculation(income["annualReports"], "grossProfit")
        const normalisedGrossProfit = standardiseData(grossProfitGrowth)
        grossProfitAll.push(normalisedGrossProfit)

        // Net Profit growth:
        const netProfitGrowth = growthCalculation(income["annualReports"], "netIncome")
        const normalisedNetProfit = standardiseData(netProfitGrowth)
        netProfitAll.push(normalisedNetProfit)

        // Net Profit Margin
        const netProfitMargin = ratioCalculation(income["annualReports"], "netIncome", "totalRevenue")
        const normalisedNetProfitMargin = standardiseData(netProfitMargin)
        netProfitMarginAll.push(normalisedNetProfitMargin)
    }

    //console.log(overviewData)
    //console.log(incomeData)
    //console.log(priceData)
    //console.log(balanceData)
    //console.log(grossprofitall[0])

    return{
        props: { overviewData, incomeData, priceData, balanceData, grossProfitAll, netProfitAll, netProfitMarginAll }
    }

    
    
}




    



    

    
  

export default Index