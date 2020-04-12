import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames'



let Paginators = ({totalItemsCount, pageSize, currentPage, changePage, portionSize = 10}) => {
 
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize +1;
  let rightPortionNumber = portionNumber * portionSize;


  return <div className= {styles.paginator__inner}> 
      { portionNumber > 1 &&
      <button className= {cn(styles.prev, styles.buttons)} onClick = {() => {setPortionNumber(portionNumber - 1)}}></button>}

      {pages
      .filter(p => p >= leftPortionPageNumber && p<=rightPortionNumber)
      .map((p) => { 
        return <span className={currentPage === p ? styles.selected + ' ' +  styles.paginator : styles.paginator}
          onClick={(e) => {changePage(p) }}>{p}</span>
      })}
    {portionCount > portionNumber &&
      <button className= {styles.next+ ' ' + styles.buttons} onClick = {() => {setPortionNumber(portionNumber + 1)}}></button>}
    </div>
    


}






export default Paginators;