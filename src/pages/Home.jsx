import { useState } from 'react';
const Home = () => {
  const [searchStr, setsearchStr] = useState('');

  const onSearchInputChange = ev => {
    setsearchStr(ev.target.value);
  };
const onSearch = (ev) => {

}


  return (
    <div>
      < form onSubmit={onSearch} >
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <button type="button">update to random</button>
      </form>
    </div>
  );
};

export default Home;
