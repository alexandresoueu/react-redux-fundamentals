import React from 'react'

function FragmentComponent(props) {
  return (
    <React.Fragment>
      <h3>Fragment</h3>
      <h4> using Tag Fragment</h4>
    </React.Fragment>

    // <>
    //   <h3>Fragment</h3>
    //   <h4> using Tag empty</h4>
    // </>
  )
}

export default FragmentComponent