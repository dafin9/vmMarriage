import React from 'react'

const firstTemp = new URL("../img/firstTemp.jpg", import.meta.url)

export default function Fcard() {
  return (
    <>
      <div
        className='bgImage'
        style={{
          backgroundImage: `url(${firstTemp})`
        }}>
      <div className="fcontent">વિવેક & માનસી</div>
      </div>

      
    </>
  );
}
