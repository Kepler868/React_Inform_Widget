import { motion } from 'framer-motion'
import { FC } from 'react'
import { BeatLoader } from 'react-spinners'

const Loader: FC = (): JSX.Element => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        marginTop: '10px',
      }}
    >
      <BeatLoader size="10px" color="gray" />
    </motion.div>
  )
}

export default Loader
