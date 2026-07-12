import { siteContent } from "@/src/content/siteContent";

function SectionLabel({
  eyebrow,
  title,
  note
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-label">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {note ? <span>{note}</span> : null}
    </div>
  );
}

function StatusBadge({ children }: { children: React.ReactNode }) {
  return <span className="status-badge">{children}</span>;
}

export default function Home() {
  const content = siteContent;

  return (
    <main id="home">
      <header className="site-header" aria-label="Site navigation">
        <a className="brand-mark" href="#home" aria-label="Dance Speaks home">
          <span>DS</span>
          <strong>Dance Speaks</strong>
        </a>
        <nav>
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="announcement">{content.studio.enrollmentNotice}</p>
          <h1 id="hero-title">{content.studio.name}</h1>
          <p className="hero-intro">{content.studio.description}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#enroll">
              Enroll
            </a>
            <a className="button secondary" href="#schedule">
              View Schedule
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Studio summary">
          <div className="movement-frame">
            <span />
            <span />
            <span />
          </div>
          <p>Dance education rooted in artistry, wellness, and community.</p>
          <div className="location-strip">
            <span>Lemon Grove</span>
            <span>San Diego Area</span>
          </div>
        </div>
      </section>

      <section className="qualities" aria-label="Studio qualities">
        {content.studio.qualities.map((quality) => (
          <div key={quality}>
            <span>{quality}</span>
          </div>
        ))}
      </section>

      <section className="split-section" id="academy">
        <SectionLabel
          eyebrow="Academy"
          title={content.academy.headline}
          note="Live-site wording pending final approval"
        />
        <div className="copy-stack">
          <p>{content.academy.intro}</p>
          <p>{content.academy.curriculum}</p>
          <StatusBadge>{content.academy.sourceNote}</StatusBadge>
        </div>
      </section>

      <section className="mission-band" id="story">
        <SectionLabel
          eyebrow="Our Story"
          title="Illuminating pathways to the performing arts"
        />
        <div className="mission-grid">
          <article>
            <h3>Vision</h3>
            <p>{content.mission.vision}</p>
          </article>
          <article>
            <h3>Mission</h3>
            <p>{content.mission.mission}</p>
          </article>
          <article>
            <h3>Commitment</h3>
            <p>{content.mission.commitment}</p>
          </article>
        </div>
        <StatusBadge>{content.mission.sourceNote}</StatusBadge>
      </section>

      <section className="classes-section" id="enroll">
        <SectionLabel
          eyebrow="Enroll"
          title="Featured classes"
          note="Repository schedule is primary"
        />
        <div className="class-grid">
          {content.classes.map((studioClass) => (
            <article className="class-card" key={studioClass.name}>
              <div className="class-card-header">
                <h3>{studioClass.name}</h3>
                <StatusBadge>{studioClass.level}</StatusBadge>
              </div>
              <dl>
                <div>
                  <dt>Ages</dt>
                  <dd>{studioClass.ageRange}</dd>
                </div>
                <div>
                  <dt>When</dt>
                  <dd>
                    {studioClass.day}, {studioClass.time}
                  </dd>
                </div>
                <div>
                  <dt>Instructor</dt>
                  <dd>{studioClass.instructor}</dd>
                </div>
                <div>
                  <dt>Tuition</dt>
                  <dd>{studioClass.tuition}</dd>
                </div>
              </dl>
              <p>{studioClass.description}</p>
              {studioClass.trialClassAvailable ? (
                <span className="trial">Trial class available</span>
              ) : null}
              <small>{studioClass.sourceNote}</small>
            </article>
          ))}
        </div>
        <div className="action-row">
          <a className="button primary" href={content.actions.enroll.href}>
            {content.actions.enroll.label}
          </a>
          <p>{content.actions.enroll.note}</p>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <SectionLabel
          eyebrow="Schedule"
          title="Current schedule"
          note={`Last verified: ${content.scheduleLastVerified}`}
        />
        <div className="schedule-table" role="table" aria-label="Current class schedule">
          <div className="schedule-row header" role="row">
            <span role="columnheader">Day</span>
            <span role="columnheader">Time</span>
            <span role="columnheader">Class</span>
            <span role="columnheader">Ages</span>
            <span role="columnheader">Instructor</span>
            <span role="columnheader">Studio</span>
          </div>
          {content.schedule.map((item) => (
            <div className="schedule-row" role="row" key={`${item.day}-${item.className}`}>
              <span role="cell">{item.day}</span>
              <span role="cell">{item.time}</span>
              <span role="cell">{item.className}</span>
              <span role="cell">{item.ages}</span>
              <span role="cell">{item.instructor}</span>
              <span role="cell">{item.studio}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section" id="team">
        <SectionLabel
          eyebrow="Our Team"
          title="Guided by caring performing arts educators"
        />
        <div className="team-grid">
          {content.staff.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="headshot-placeholder" aria-hidden="true">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.bio}</p>
              <p className="credentials">{member.credentials}</p>
              <small>{member.sourceNote}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="support-section" id="donate">
        <SectionLabel eyebrow="Donate" title="Support access to performing arts education" />
        <div className="support-copy">
          <p>
            Dance Speaks centers community access, diversity in dance, and welcoming
            professional instruction. Donation details should be verified on the current
            public donation page before launch.
          </p>
          <a className="button secondary" href={content.actions.donate.href}>
            {content.actions.donate.label}
          </a>
          <StatusBadge>{content.actions.donate.note}</StatusBadge>
        </div>
      </section>

      <section className="join-section" id="join">
        <SectionLabel eyebrow="Join Our Team" title="Help build a welcoming studio community" />
        <div className="support-copy">
          <p>
            Hiring and volunteer opportunities are pending final repository copy. The
            current website includes a Join Our Team destination for applicants.
          </p>
          <a className="button secondary" href={content.actions.join.href}>
            {content.actions.join.label}
          </a>
          <StatusBadge>{content.actions.join.note}</StatusBadge>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <p className="footer-kicker">Contact</p>
          <h2>{content.studio.name}</h2>
          <address>
            <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            <a href={`tel:${content.contact.phone.replace(/[^0-9]/g, "")}`}>
              {content.contact.phone}
            </a>
            <span>{content.contact.address}</span>
          </address>
          <StatusBadge>{content.contact.addressNote}</StatusBadge>
        </div>
        <div className="footer-links">
          <a href={content.contact.facebook}>Facebook</a>
          <a href={content.contact.instagram}>Instagram</a>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </main>
  );
}
