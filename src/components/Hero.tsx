import photo from '../assets/photo.jpg'
import { resume } from '../data/resume'

export function Hero() {
  const [firstName, lastName] = resume.name.split(' ')

  return (
    <header className="hero glass">
      <div className="hero__ring">
        <img className="hero__photo" src={photo} alt={resume.name} width={128} height={128} />
      </div>

      <div className="hero__body">
        {resume.openToWork && (
          <p className="status">
            <span className="status__dot" aria-hidden="true" />
            Открыта к предложениям
          </p>
        )}

        <h1 className="hero__name">
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className="hero__role">{resume.role}</p>
        <p className="hero__lead">{resume.headline}</p>
        <p className="hero__place">{resume.location}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${resume.email}`}>
            Написать на почту
          </a>
          <a className="btn" href={resume.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
