import {useState} from 'react'
import css from './Searchbar.module.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const Searchbar = ({onSubmit}) => {

    const [searchQuery, setSearchQuery] = useState('');

    
     const handleChange = event => {
      setSearchQuery(event.target.value.toLowerCase())
    }

    const handleSubmit = event => {
      event.preventDefault();
      
      if(searchQuery.trim() === ''){
        Notify.warning("Sorry, there are no images matching your search query. Please try again.");
        return;
      }

      onSubmit(searchQuery)
      reset();
    }

    const reset = () => {
      searchQuery('');
    };

    return (
        <header className={css["searchbar"]} onSubmit={handleSubmit}>
        <form className={css["searchForm"]}>
          <button type="submit" className={css["searchForm-button"]}>
            <span className={css["searchForm-button-label"]}>Search</span>
            <i className='bx bx-search-alt' id={css.icon}></i>
          </button>
      
          <input
            className={css["searchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search Images..."
            value={searchQuery}
            onChange={handleChange}
          />
        </form>
      </header>
    )
  }


export default Searchbar