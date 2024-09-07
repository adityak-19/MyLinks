  import React from 'react'
  import Card from './Card'

  function Container({ data }) {  
    return (
      <div className='w-full sm:w-[75%] md:w-[55%] lg:w-[35%]'>
        {data.map((item, index) => (
          <Card key={index} logo={item.logo} name={item.name} link={item.link} />
        ))}
      </div>
    )
  }
  

  export default Container