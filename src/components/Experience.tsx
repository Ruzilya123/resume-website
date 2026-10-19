import { resume } from '../data/resume'

export function Experience() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <h2 id="experience-title">Опыт</h2>

      <ol className="timeline">
        {resume.jobs.map((job) => (
          <li className="job" key={job.company}>
            <p className="job__period">{job.period}</p>

            <div className="job__body">
              <h3 className="job__company">{job.company}</h3>
              <p className="job__role">{job.role}</p>
              {job.project && <p className="job__project">{job.project}</p>}

              <ul className="job__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {job.stack && (
                <ul className="tags" aria-label="Стек">
                  {job.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
