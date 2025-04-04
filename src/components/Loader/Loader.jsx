import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <FadeLoader color="#fff" size={5} />
    </div>
  );
};

export default Loader;
