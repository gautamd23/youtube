import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import VideoContainerBody from "./components/VideoContainerBody";
import WatchPage from "./components/WatchPage";

function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<VideoContainerBody/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
  }])
  return (
    <Provider store={appStore}>
      <div className="App">
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    
  );
}

export default App;
