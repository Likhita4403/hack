import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Carousel } from 'antd';
const contentStyle = {
  height: '100rem',
  // color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const Car = () => (
  <Carousel autoplay >
    <div >
      <img src='https://mdbcdn.b-cdn.net/img/new/slides/043.webp' className='h-90 text-center object-center resize-both' alt='..'/>
    </div>
    <div>
      <img src='https://mdbcdn.b-cdn.net/img/new/slides/042.webp' className='h-90 text-center object-center' alt='..'/>
    </div>
    <div>
      <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp' className='h-90 text-center object-center' alt='..'/>
    </div>
    <div>
      <img src='https://mdbcdn.b-cdn.net/img/new/slides/040.webp' className='h-90 text-center object-center' alt='..'/>
    </div>
  </Carousel>
);

export default Car;