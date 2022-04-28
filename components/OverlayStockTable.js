import React from 'react'
import {OverlayTrigger, Popover} from "react-bootstrap"
import {FcInfo} from "react-icons/fc"
import styles from "../styles/StockTable.module.scss"


const OverlayStockTable = ({overlayHeader, overlayBody}) => {
  return (

    <OverlayTrigger trigger="click" placement="top" overlay={
        <Popover>
            <Popover.Header> {overlayHeader} </Popover.Header>
            <Popover.Body> {overlayBody} </Popover.Body>
        </Popover>}>
        <div> <FcInfo className={styles.info}/> </div>
    </OverlayTrigger>



  )
}

export default OverlayStockTable