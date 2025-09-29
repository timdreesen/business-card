export default function Info() {
  return (
    <>
      <img className="profile" src="/tim.webp" alt="A portrait image of Tim" />
      <div className="content">
        <h1 className="title">Tim Dreesen</h1>
        <p className="job-title">Full Stack Developer</p>
        <a href="https://palmbaydigital.com/" className="website-link">
          palmbaydigital.com
        </a>
        <a href="mailto:info@palmbaydigital.com" className="email-me">
          <span className="emoji">✉</span> Email me
        </a>
      </div>
    </>
  );
}
