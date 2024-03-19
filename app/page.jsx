import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="text-primary">Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos nulla, facilis impedit minima, vitae blanditiis tempora tenetur, molestiae numquam mollitia sapiente incidunt?</p>
      
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary bg-primary p-2">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, neque! Vitae voluptas labore quod inventore corrupti explicabo minima aut repudiandae suscipit expedita eos cupiditate ut quidem, ipsum reiciendis possimus consequatur eveniet sequi sit dolorum laboriosam deserunt! Atque quam saepe quia aliquid illum voluptatibus odit ea.</p>
      </div>

      <div className="card">
        <h3>New website live</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis voluptatibus beatae aut inventore nesciunt dolore tempore, saepe quae magni qui quos dicta?</p>
      </div>
    </main>
  )
}
