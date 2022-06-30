const Footer = function () {
  return (
    <section className='bg-green-600 pt-5'>
      <div className='container'>
        <div className='border w-full '></div>
        <div className='flex justify-between'>
          <div className='w-[14rem]'>
            <h3>bisti edo</h3>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              magni sapiente totam laborum. Eos delectus commodi quos aliquam
              eius ipsam?
            </p>
          </div>
          <div className='w-[14rem]'>
            <h3>contact</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio repellendus possimus nam nisi, mollitia ipsum inventore
              voluptatibus quod amet. Molestiae?
            </p>
          </div>
          <div className='w-[14rem]'>
            <h3>we are social</h3>
            <p>social icons</p>
          </div>
          <div className='w-[14rem]'>
            <h3>receive updates</h3>
            <p>signup</p>
          </div>
        </div>
        <ul className='flex  gap-x-4 justify-center items-center'>
          {' '}
          <li>home</li>
          <li>about edo</li>
          <li>government</li>
          <li>mdas</li>
          <li>resources</li>
          <li>financials</li>
          <li>media</li>
        </ul>
        <div className='border w-full '></div>
        <p className='text-center'>
          Edo state Government © 2019. All Rights Reserved. Terms of Use and
          Privacy Policy
        </p>
      </div>
    </section>
  );
};

export default Footer;
