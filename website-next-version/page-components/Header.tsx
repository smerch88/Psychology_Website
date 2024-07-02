import styles from './Header.module.scss';
import cn from 'classnames';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={cn(styles.headerLine, styles.headerLineFirst)}></div>
          <a href="./index.html">
            <svg className={styles.logo}>
              <use href="./images/sprite.svg#icon-logo"></use>
            </svg>
          </a>
          <div className={cn(styles.headerLine, styles.headerLineSecond)}></div>

          <svg className={styles.burger} data-modal-open>
            <use href="./images/sprite.svg#icon-menu"></use>
          </svg>
          <div className={cn(styles.headerLine, styles.headerLineThird)}></div>
        </div>
        <nav></nav>
      </div>
    </header>
  );
};
