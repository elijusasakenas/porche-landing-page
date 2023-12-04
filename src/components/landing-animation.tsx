import { React, useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'

export default function AnimationLand (): any {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  useEffect(() => {
    if (isInView) {
      const handleAnimation = async () => {
        await animate(scope.current, { opacity: 1, gap: 0 }, { duration: 2 })
        await animate(scope.current, { y: -300, scale: 0.4 }, { duration: 1 })
      }
      handleAnimation()
    }
  },
  [isInView])

  return (
    <div ref={scope} className='flex items-center justify-center h-screen gap-28 opacity-5'>
        <img src="../src/assets/P.svg" alt="" />
        <img src="../src/assets/O.svg" alt="" />
        <img src="../src/assets/R.svg" alt="" />
        <img src="../src/assets/S.svg" alt="" />
        <img src="../src/assets/C.svg" alt="" />
        <img src="../src/assets/H.svg" alt="" />
        <img src="../src/assets/E.svg" alt="" />
      </div>

  )
}
