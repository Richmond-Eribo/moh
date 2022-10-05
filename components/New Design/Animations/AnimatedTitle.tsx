import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AnimatedTitle() {
  const text = "Ministry of Health" // This would normally be passed into this component as a prop!

  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
    if (!inView) {
      ctrls.start("hidden")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <strong
      className='lg:text-6xl text-4xl tracking-wider'
      aria-label={text}
      role='heading'
    >
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            className='inline-block mr-4 whitespace-nowrap '
            ref={ref}
            aria-hidden='true'
            key={index}
            initial='hidden'
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  className='inline-block -mr-1'
                  aria-hidden='true'
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              )
            })}
          </motion.span>
        )
      })}
    </strong>
  )
}
