export default function About() {
  return (
    <div className='m-4 max-w-3xl mx-auto'>
      <h2 className='text-center text-2xl font-bold mt-4 mb-4'>About</h2>

      <div className='border-2 border-dark-elevated rounded-lg p-4 bg-light text-ink text-xl'>
        <p>
          This project was started out of a reaction to an every day irritation
          combined with the need to work more with Next.js, databases, and to
          run tests on the app without tutorials.
        </p>
        <div className='mt-4'>
          The Good News idea began out of my frustration with "news" sites that
          were full of filler content. I didn't want articles with:
          <ul className='list-disc list-inside space-y-1'>
            <li>
              Articles containing "everybody says" or "I'm obsessed" about this
              or that.
            </li>
            <li>
              Articles written to drive traffic to affiliate shopping sites.
            </li>
            <li>Stories fashioned out of social media reactions.</li>
            <li>Excessive entertainment news and gossip.</li>
          </ul>
        </div>
        <p className='mt-4'>
          Grumpiness won out and a news app where I could filter out articles
          based on keywords was started.
        </p>
        <h2 className='text-lg font-bold mt-6 mb-2'>Project Details</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>Build with Next.js (App Router) and React</li>
          <li>Styles with Tailwind CSS</li>
          <li>Authentication via NextAuth, back by Postgres Neon database</li>
          <li>Custom keyword/phrase filtering, tied to a user's account</li>
          <li>
            News data from NewsAPI, with local mock dataset for development and
            testing
          </li>
        </ul>
      </div>
    </div>
  );
}
