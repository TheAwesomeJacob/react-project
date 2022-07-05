import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
    const [ location, setLocation ] = useState('');
    const [ animal, setAnimal ] = useState('');
    const [ breed, setBreed ] = useState('');
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input 
                id="location" 
                value={location} 
                placeholder="Location" 
                onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="animal">
            Animals
            <select
                id="animal"
                value={animal}
                onChange={e => {
                    setAnimal(e.target.value);
                    setBreed("");
                }}
                onBlur={e => {
                    setAnimal(e.target.value);
                    setBreed("");
                }}
            >
                <option />
                {ANIMALS.map(animal => {
                    return(
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    )
                })}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  };

  export default SearchParams;