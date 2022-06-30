const Navigation = function () {
  return (
    <section>
      <nav className='flex justify-between container'>
        <div>
          <span>logo</span>edo state government
        </div>
        <ul className='uppercase flex gap-x-3'>
          <li>home</li>
          <li>about edo</li>
          <li>government</li>
          <li>mdas</li>
          <li>resources</li>
          <li>financials</li>
          <li>media</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
