import React from 'react'

async function getTicket(id) {
    const res = await fetch('http://localhost:4000/tickets/' + id, {
      next: {
        revalidate: 30,
      },
    });
    return res.json();
  }
  

export default async function TicketDetails({ params }) {

const ticket = await getTicket(params.id)

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>

        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div
            className={`pill ${ticket.priority} 
            py-1 px-2 mt-3
            inline-block 
            text-xs font-semibold;`}
          >
            {ticket.priority} priority
          </div>
        </div>
    </main>
  )
}
