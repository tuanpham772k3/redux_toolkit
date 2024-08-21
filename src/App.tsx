import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import Counter from './Components/Counter/Counter'
import TableUser from './Components/User/TableUser'
import CreateUser from './Components/Modal/CreateUser';



const Layout = () => {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Outlet />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <TableUser /> },
      { path: "counter", element: <Counter /> },
      { path: "create", element: <CreateUser /> },

    ],
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}


export default App
