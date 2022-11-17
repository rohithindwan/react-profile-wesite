

export default function About() {
  return (
    < div >
    <section id="aboutme">
      <div className="container mt-4 pt-4">
        <h1 className="text-center">About Me</h1>
        <div className="row mt-4">
          <div className="col-lg-4">
          <img src={'./images/personpic.jpg'} className="imageAboutPage"/>

          </div>

          <div className="col-lg-8">
            <p> I am a computer science student. I did my bachelor’s of computer application from Punjabi 2021. Currently I am doing my training in cetpa infotech in web development.
              I love to learn new tech related stuff.
            </p>
            <div className="row mt-3">
              <div className="col-md-6">
                <ul>
                  <li>Name: Rohit Hindwan</li>
                  <li>Age: 22</li>
                  <li>Occupation: Web Developer</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <p> Software engineer with a proven ability to adapt in both self-starting and collaborative
                environments while staying focused on achieving high-quality results under strict deadlines.
                This quality and results-based approach drove me to collaborate with the VP of sales at Squarespace to create a digital marketing campaign that tripled average signups in a single month. Eager to obtain a challenging position at a prestigious company like Dream Version that will expand my learning and build upon my developer skills.
              </p>
            </div>
          </div>
        </div>
    </div>
    </section>
    </div >
  )
}
