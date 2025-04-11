import css from './DocTitle.module.css';
const DocTitle = ({ children }) => {
  return <h1 className={css.heading}>{children}</h1>;
};

export default DocTitle;
