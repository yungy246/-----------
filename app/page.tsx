const profile = [
  "현상을 세심하게 성찰하고 문제를 발견하는 사람으로, 데이터와 이론을 근거로 교육적 처방을 현실화하는 연구자",
  "교육과 기술을 연결해 학습자 중심 수업의 혁신을 이끄는 교육자",
];

const skills = [
  "Instructional Design",
  "Online Learning",
  "Teacher Education",
  "AI in Education and AI Ethics",
];

const experience = [
  {
    organization: "서울대학교",
    period: "2025.03 - 현재",
    position: "BK 조교수",
  },
  {
    organization: "성신여자대학교",
    period: "2022.09 - 2025.02",
    position: "연구교수",
  },
];

const projects = [
  {
    title: "Instructional Design",
    category: "Learning Strategy",
    description: "학습자 경험과 수업 목표를 연결하는 설계 원리를 연구하고 실천합니다.",
  },
  {
    title: "Online Learning",
    category: "Digital Learning",
    description: "온라인 환경에서 몰입과 상호작용을 높이는 교수학습 경험을 설계합니다.",
  },
  {
    title: "Teacher Education",
    category: "Faculty Development",
    description: "교사와 교수자의 전문성 성장을 돕는 교육 프로그램을 개발합니다.",
  },
  {
    title: "AI in Education",
    category: "AI Ethics",
    description: "교육 현장에서 AI를 책임 있게 활용하기 위한 윤리와 실행 방안을 탐구합니다.",
  },
];

const contact = [
  { label: "Email", value: "yungy246@snu.ac.kr", href: "mailto:yungy246@snu.ac.kr" },
  { label: "Website", value: "www.gayoungyoon.com", href: "https://www.gayoungyoon.com" },
  { label: "Location", value: "Seoul, South Korea" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="intro-title">
        <nav className="nav" aria-label="주요 섹션">
          <a href="#work">Work</a>
          <a href="#profile">Profile</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">University Faculty Portfolio</p>
            <h1 id="intro-title">Education + Brand + UX</h1>
          </div>
          <aside className="heroCard" aria-label="윤가영 소개">
            <span>윤가영</span>
            <strong>Researcher & Educator</strong>
            <p>데이터와 이론을 바탕으로 교육의 문제를 발견하고, 기술과 학습자를 연결합니다.</p>
          </aside>
        </div>
      </section>

      <section className="intro" id="profile">
        <div>
          <p className="sectionLabel">Profile</p>
          <h2>학습자 중심 수업 혁신을 설계하는 교육공학 연구자</h2>
        </div>
        <div className="profileList">
          {profile.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="portfolio" id="work" aria-labelledby="work-title">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Selected Focus</p>
            <h2 id="work-title">Portfolio Cards</h2>
          </div>
          <p>
            연구, 수업 설계, 교사교육, AI 윤리를 하나의 교육 경험으로 엮는 작업을 소개합니다.
          </p>
        </div>

        <div className="cardGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="cardVisual" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="details">
        <div className="panel">
          <p className="sectionLabel">Skills</p>
          <div className="skillList">
            {skills.map((skill) => (
              <div className="skillItem" key={skill}>
                <span>{skill}</span>
                <div className="meter" aria-label={`${skill} 숙련도 5점 만점`}>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <p className="sectionLabel">Experience</p>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.organization}>
                <span>{item.period}</span>
                <h3>{item.organization}</h3>
                <p>{item.position}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education">
        <p className="sectionLabel">Education</p>
        <h2>고려대학교 교육공학 박사</h2>
        <p>2020.03 - 2022.08</p>
      </section>

      <footer id="contact">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2>Let&apos;s connect education and technology.</h2>
        </div>
        <address>
          {contact.map((item) =>
            item.href ? (
              <a href={item.href} key={item.label}>
                <span>{item.label}</span>
                {item.value}
              </a>
            ) : (
              <p key={item.label}>
                <span>{item.label}</span>
                {item.value}
              </p>
            ),
          )}
        </address>
      </footer>
    </main>
  );
}
