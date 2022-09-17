import Card from '../components/shared/Card'
function aboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback for a product or service </p>
        <p> version:1.0.0</p>

        <p>
          <a href='/'>back to Home</a>
        </p>
      </div>
    </Card>
  )
}

export default aboutPage
