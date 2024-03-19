import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 30,
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="
            card
            bg-white 
            shadow-sm 
            rounded-md 
            py-3 px-4 my-4 
            relative 
            overflow-hidden;
             my-5"
        >
        
        <Link href={`/tickets/${ticket.id}`}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}....</p>
          <div
            className={`pill ${ticket.priority} 
            py-1 px-2 mt-3
            inline-block 
            text-xs font-semibold;`}
          >
            {ticket.priority} priority
          </div>
          </Link>
        </div>
      ))}

      {tickets.lenght === 0 && <p>There are no open tickets</p>}
    </>
  );
}
