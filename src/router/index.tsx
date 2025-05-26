import { RouteObject } from 'react-router-dom'
import BasicInfo from '../pages/BasicInfo'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Education from '../pages/Education'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BasicInfo />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/education',
    element: <Education />,
  },
]
