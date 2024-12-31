import { ReactLenis } from '@studio-freight/react-lenis'

function smoothscroll({children}) {
  return (
    <ReactLenis root options={{
        lerp:0.05
    }}
    >
      {children }
    </ReactLenis>
  )
}

export default smoothscroll