import React from 'react';

const RegionFilter = () => {
  return (
    <>
      <div className='custom-select'>
        <select name='filter' id='region-filter'>
          <option value='0'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </>
  );
};

export default RegionFilter;
