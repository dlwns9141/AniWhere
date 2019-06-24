/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/course1',
    // Relative to /src/views
    view: 'Course1'
  },
  {
    path: '/course2',
    // Relative to /src/views
    view: 'Course2'
  },
  {
    path: '/course3',
    // Relative to /src/views
    view: 'Course3'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/maps',
    view: 'Maps'
  }
]
