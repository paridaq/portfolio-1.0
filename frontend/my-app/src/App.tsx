

import Nav from './components/Nav'
import Layout from './components/Layout'
import Workexp from './experience/Workexp'
import Project from './experience/Project'

function App() {
  

  return (
    <>
    
     <Nav/>
     <div className="h-0.5 bg-black w-3/4 my-4 mx-auto"></div>
     <Layout>
      <Workexp/>
      <div className="h-0.5 bg-black w-3/4 my-4 mx-auto"></div>
      <Project/>
     </Layout>


  
    </>
  )
}

export default App
