import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/routes/routes'
import DefaultLayout from '~/layouts/DefaultLayout';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {
              publicRoutes.map((route, index) => {
                const Page = route.component
                let Layout = DefaultLayout
                if(route.layout){
                  Layout = route.layout
                }
                return <Route key = {index} path = {route.path} element = {<Layout><Page /></Layout>}></Route>
              })
            }
          </Routes>
      </Router>
    </div>
  );
}

export default App;
