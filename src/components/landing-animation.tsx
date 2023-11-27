import React from 'react'
import { motion } from 'framer-motion'

export default function LandingAnimation (): any {
  return (
        <motion.div
        className='h-full w-full'
        animate={{
          x: '50%',
          y: '50%'
        }}
        >
                <img src="../src/assets/P.svg" alt="" />
                <img src="../src/assets/O.svg" alt="" />
                <img src="../src/assets/R.svg" alt="" />
                <img src="../src/assets/S.svg" alt="" />
                <img src="../src/assets/C.svg" alt="" />
                <img src="../src/assets/H.svg" alt="" />
                <img src="../src/assets/E.svg" alt="" />

        </motion.div>
  )
}
