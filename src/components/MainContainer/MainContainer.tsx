import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from './MainContainer.css'

const MainContainer = (props: {children: any}) => (
  <div className={styles.container}>{props.children}</div>
);

export default MainContainer
