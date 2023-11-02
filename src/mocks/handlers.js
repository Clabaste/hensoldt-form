import { http, HttpResponse } from 'msw'

let ticketOverView = [
  {
    'title': 'Schon kaputt!',
    'products': 'Havina Cola',
    'desc': 'Bitte um Rücknahme'
  },
  {
    'title': 'Schon kaputt! 2',
    'products': 'Knarre',
    'desc': 'Bitte um Rücknahme'
  }
]
export const handlers = [
  http.get('ticketOverview', (req, res, ctx) => {
    return HttpResponse.json(ticketOverView)
  }),
  http.post('newTicket', async(req) => {
    const {title, products, desc} = await req.request.json();

    ticketOverView = [
      ...ticketOverView,
      {
        title, products, desc
      }
    ]
    return HttpResponse.json(ticketOverView)
  })
]

