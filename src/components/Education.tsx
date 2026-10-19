import { resume } from '../data/resume'

export function Education() {
  return (
    <div className="section split">
      <section aria-labelledby="education-title">
        <h2 id="education-title">Образование</h2>
        <ul className="facts">
          {resume.education.map((item) => (
            <li key={item.place}>
              <p className="facts__title">{item.place}</p>
              <p className="facts__meta">{item.field}</p>
              <p className="facts__meta">{item.level}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="languages-title">
        <h2 id="languages-title">Языки</h2>
        <ul className="facts">
          {resume.languages.map((item) => (
            <li key={item.name}>
              <p className="facts__title">{item.name}</p>
              <p className="facts__meta">{item.level}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
