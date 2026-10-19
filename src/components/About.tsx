import { resume } from '../data/resume'

export function About() {
  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title">Обо мне</h2>
      {resume.about.map((text) => (
        <p className="prose" key={text}>
          {text}
        </p>
      ))}

      <ul className="results">
        {resume.results.map((item) => (
          <li key={item.label}>
            <span className="results__value">{item.value}</span>
            <span className="results__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
