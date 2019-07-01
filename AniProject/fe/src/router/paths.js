/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [

  {
    path: '/table-list',
    name: '코스 요약 정보',
    view: 'TableList'
  },
  {
    path: '/course1',
    // Relative to /src/views
    name : '상세 정보',
    view: 'Course1'
  },
  {
    path: '/maps',
    name: '지도',
    view: 'Maps'
  }
]
