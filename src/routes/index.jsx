import React from 'react'
import { AddUsers, SingleUser, Teachers, Users } from '../pages'
import { Route, Routes } from 'react-router-dom'

function CustomRoutes() {
  const routesList = [
      {
        id: 1,
        path: "/",
        element: <Users/>,
      },
      {
        id: 2,
        path: "/add",
        element: <AddUsers/>,
      },
      {
        id: 3,
        path: "/:id",
        element: <SingleUser/>,
      },
      {
        id: 4,
        path: "/edit/:editId",
        element: <AddUsers/>,
      },
      {
        id: 5,
        path: "/teachers",
        element: <Teachers/>,
      }
  ]

  return (
    <Routes>
      {routesList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default CustomRoutes
