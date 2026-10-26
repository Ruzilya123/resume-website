import { useEffect, useRef, useState } from 'react'
import { resume } from '../data/resume'

type CopyState = 'idle' | 'copied' | 'failed'

const copyLabels: Record<CopyState, string> = {
  idle: 'Скопировать почту',
  copied: 'Скопировано',
  failed: 'Не вышло — выделите адрес вручную',
}

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(resume.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopyState('idle'), 2500)
  }

  const githubLabel = resume.github.replace(/^https?:\/\//, '')
  const telegramLabel = '@' + resume.telegram.split('/').pop()

  return (
    <footer className="footer">
      <section className="contact glass" aria-labelledby="contact-title">
        <h2 id="contact-title">Давайте обсудим вакансию</h2>
        <p className="contact__text">
          Ищу работу во frontend — удалённо или гибрид. Пишите в Telegram или на почту.
        </p>

        <div className="contact__row">
          <a className="contact__email" href={`mailto:${resume.email}`}>
            {resume.email}
          </a>
          <button className="btn btn--small" type="button" onClick={copyEmail}>
            <span aria-live="polite">{copyLabels[copyState]}</span>
          </button>
        </div>

        <ul className="contact__links">
          <li>
            <a href={resume.telegram} target="_blank" rel="noreferrer">
              Telegram {telegramLabel}
            </a>
          </li>
          <li>
            <a href={resume.github} target="_blank" rel="noreferrer">
              {githubLabel}
            </a>
          </li>
          {resume.phone && (
            <li>
              <a href={`tel:${resume.phone.replace(/[^\d+]/g, '')}`}>{resume.phone}</a>
            </li>
          )}
        </ul>
      </section>

      <p className="footer__note">© {new Date().getFullYear()} {resume.name}</p>
    </footer>
  )
}
