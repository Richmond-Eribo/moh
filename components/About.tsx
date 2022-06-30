const About = function () {
  return (
    <section className='bg-gray-200'>
      <div className='container'>
        <h3 className='uppercase text-xl font-bold'>about</h3>
        <h4 className='capitalize text-2xl'>edo state</h4>
        <div className='grid grid-cols-3'>
          <div>
            <h3 className='uppercase font-bold'>area</h3>
            <span className='text-4xl font-bold'>17,333</span>
            <p className='capitalize text-xl'>square miles</p>
          </div>
          <div>
            <h3 className='uppercase font-bold'>founded</h3>
            <span className='text-4xl font-bold'>1991</span>
            <p className='capitalize text-xl'>auguest 21</p>
          </div>
          <div>
            <h3 className='uppercase font-bold'>population</h3>
            <span className='text-4xl font-bold'>3333333</span>
            <p className='capitalize text-xl'>(2014)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
