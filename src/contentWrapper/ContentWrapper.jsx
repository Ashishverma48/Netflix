import './contentwrapper.scss'

function ContentWrapper({children}) {
  return (
    <div className='contentWrapper'>{children}</div>
  )
}

export default ContentWrapper