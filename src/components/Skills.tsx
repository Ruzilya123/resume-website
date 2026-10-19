import { resume } from '../data/resume'

export function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <h2 id="skills-title">Навыки</h2>

      <div className="skills">
        {resume.skills.map((group) => (
          <div className="skills__group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tags tags--soft">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
