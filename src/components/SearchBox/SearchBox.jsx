import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    const changeFilterAction = changeFilter(e.target.value);
    dispatch(changeFilterAction);
  };

  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
