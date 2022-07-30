import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className=''>
      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          about us
        </h1>
      </div>
      <article className='px-4 lg:px-20 mt-10 mb-10'>
        {/* <p className='font-bold'>More info </p> */}
        <p className='mb-4 text-lg '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nemo
          omnis iusto iste sint quaerat alias laboriosam. Autem iste nesciunt
          labore fugiat. Incidunt autem tenetur ad odio pariatur unde impedit.
          Ullam sequi voluptas a? Architecto, quaerat? Eius expedita sed tenetur
          minima incidunt reprehenderit et labore placeat. Beatae, vero magni
          nesciunt quia praesentium eos sapiente dolorum explicabo perspiciatis
          sunt, iure eum. Quod accusamus autem quaerat quam, itaque officiis
          minima doloribus! Mollitia animi fugiat, dolor rerum laboriosam eos
          tenetur recusandae perferendis, ab, rem iure totam sint hic omnis
          nesciunt iusto eaque corporis. Minus beatae inventore in, fugit
          pariatur numquam repudiandae quos nisi fuga vitae delectus, nobis
          accusamus eaque officia dolorum voluptates iusto soluta omnis
          mollitia, commodi tempore blanditiis debitis sapiente reiciendis! Ea!
          Facilis qui distinctio perspiciatis eveniet quas iusto inventore
          recusandae ad eligendi, esse magnam blanditiis neque maxime doloremque
          voluptatum fugit labore saepe a. Vero assumenda earum neque amet ex,
          laudantium in?
        </p>
      </article>
      <div className='px-4 lg:px-20'>
        <Image
          src='/Images/image 1.jpg'
          height={775}
          width={1440}
          alt='about'
        />
      </div>
    </div>
  )
}

export default AboutUs
