import "./DettagliLavoro.css";

const DettagliLavoro = ({jobData}) => {
  return (
    <div id="contenitorePrincipale">
      <div>
        <h2>Portfolio Solution Architect for DevOps & Automation</h2>
        <p>Nordcloud Global - 2021-09-12</p>
      </div>
      <div id="tipi">
        <div className="icone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-bag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
          </svg>
          <p>Full Time</p>
        </div>
        <div className="icone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-stopwatch"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
          </svg>
          <p>EU only</p>
        </div>
        <div className="icone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-currency-euro"
            viewBox="0 0 16 16"
          >
            <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
          </svg>
          <p>1500&euro;</p>
        </div>
      </div>
      <div>
        <button id="button1">Candidatura semplice</button>
        <button id="button2">Salva</button>
      </div>
      <div id="descrizione">
        <h2>Informazioni sull'offerta di lavoro</h2>
        <p>
          When you join Nordcloud, you become part of a rapidly growing company,
          where you will set your career on track for outstanding achievement
          within a company that knows no limits. Our customers are large
          enterprises seeking to supercharge their digital transformation with
          the power of cloud and to benefit from the ability to innovate faster
          than ever.
        </p>
        <p>
          We are looking for a{" "}
          <strong>
            Portfolio Solutioning Architect in our DevOps &amp; Automation
          </strong>{" "}
          offering area, responsible for growing our business by working closely
          with Sales and Delivery teams to bring the best Nordcloud has to offer
          into the hands of our clients. The DevOps &amp; Automation offering is
          on a mission to let our clients leverage the full potential of the
          cloud to optimize their time to value and operations.
        </p>
        <p>
          <strong>Your daily work:</strong>
        </p>
        <ul>
          <li>
            You lead or contribute to solutioning complex client challenges
            utilizing your deep knowledge of DevOps &amp; Automation across all
            hyperscalers.
          </li>
          <li>
            You write crisp proposals which explain the value Nordcloud offers
            in clear language.
          </li>
          <li>
            You give inspiring pitches in front of clients and actively listen
            for their wants &amp; needs.
          </li>
          <li>
            You work with our practice &amp; product leaders to identify the
            right tailoring and extension of their content for market success.
          </li>
          <li>
            You proactively support our offering &amp; product leaders in
            setting roadmap priorities.
          </li>
          <li>
            You kick-start and coach our delivery teams in key engagements to
            follow through on our value promise.
          </li>
        </ul>
        <p>
          <strong>To be successful in this role, you should have:</strong>
        </p>
        <ul>
          <li>
            Several years of experience in contributing to complex proposals and
            presenting to clients, from early stages to closing. You apply a
            challenger approach to solution sales in order to initiate and lead
            customer dialogue with business and IT stakeholders.
          </li>
          <li>
            Several years of hands-on, cloud-focused experience in one or more
            of the following areas:
            <ul>
              <li>CI/CD technologies,</li>
              <li>Observability &amp; monitoring technologies, or</li>
              <li>automation technologies.</li>
            </ul>
          </li>
          <li>Expertise in Infrastructure as Code.</li>
          <li>
            An understanding and passion for increasing and sharing the
            knowledge of modern cloud-native technologies and how they can
            empower DevOps teams.
          </li>
          <li>
            Be fluent in discussing Agile methods &amp; frameworks like SAFe,
            Scrum, and Kanban, and how to unlock value through automation.
          </li>
          <li>
            Are trusted by your customers to deliver what you promise and
            provide valuable insight and solutions that have an impact on their
            business.
          </li>
          <li>Strong leadership and collaboration skills.</li>
          <li>Be a team player and target-oriented.</li>
          <li>Structured and analytical way of working.</li>
          <li>
            Excellent communication skills in English and readiness to travel
            (subject to covid).
          </li>
        </ul>
        <p>
          <strong>Why Nordcloud as your next career move?</strong>
        </p>
        <ul>
          <li>
            In this role, you will be in a key position in developing new
            business and driving productized services for our DevOps &amp;
            Automation offering
          </li>
          <li>
            Lots of opportunities to develop your expertise and for professional
            growth. You get access to relevant training &amp; knowledge sharing
            sessions to support the growth and work with a community of leading
            cloud professionals. We grow together in our learning community!
          </li>
          <li>
            We have 200+ certified AWS experts, 100+ certified Azure experts,
            and 70+ certified Google Cloud experts working from 20 different
            offices in 10 European countries, friendly colleagues comprising 30+
            nationalities.
          </li>
          <li>
            We are continuously developing our business - which means we're not
            stuck with the attitude of doing things as they've always been done.
          </li>
          <li>
            Flexible working hours and freedom to choose your tools and ways of
            working.
          </li>
          <li>
            Wide range of benefits like private health care, certificates paid,
            wellness &amp; public transportation benefits, high-end laptop and a
            smartphone of your choice, etc.
          </li>
          <li>
            Events &amp; fun - besides all your interesting work assignments,
            feel free to enjoy our extra-curricular activities such as clubs,
            virtual coffees, after work, etc. And of course, we welcome new
            activities open-heartedly if you have anything in mind!
          </li>
        </ul>
        <p>
          To get more insight into the daily life at Nordcloud community, check
          out our{" "}
          <a href="https://nordcloud.com/community-culture\" rel="nofollow\">
            Community &amp; Culture site
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/nordcloudcommunity\"
            rel="nofollow\"
          >
            Instagram profile
          </a>
          ,{" "}
          <a href="https://www.facebook.com/nordcloud\" rel="nofollow\">
            Facebook
          </a>{" "}
          and
          <a
            href="https://www.linkedin.com/company/nordcloud-ltd/\"
            rel="nofollow\"
          >
            {" "}
            LinkedIn
          </a>
          .{" "}
        </p>
        <p>
          Please read our{" "}
          <a href="https://nordcloud.com/privacy-policy/\" rel="nofollow\">
            Data Privacy Policy
          </a>{" "}
          before applying. All applicants{" "}
          <strong>must have the right to work in the EU.</strong>
        </p>
        <p>
          <strong>About Nordcloud</strong>
        </p>
        <p>
          Nordcloud is a European leader in cloud implementation, application
          development, managed services, and training. It's a recognized{" "}
          <strong>cloud-native pioneer</strong> with a proven track record
          helping organizations leverage the public cloud in a way that balances
          quick wins, immediate savings, and sustainable value. As well as
          partnering with VMware, Nordcloud is triple-certified across Microsoft
          Azure, Google Cloud Platform, and Amazon Web Services - and is
          featured in Gartner's Magic Quadrant. Nordcloud has 10 European hubs,
          over 500 employees and has delivered over 1,000 successful cloud
          projects for companies ranging from mid-size to large corporates. IBM{" "}
          <a
            href="https://newsroom.ibm.com/2020-12-21-IBM-to-Acquire-Nordcloud-to-Turbocharge-Its-Hybrid-Cloud-Consulting-Capability\"
            rel="nofollow\"
            target="_blank\"
          >
            announced
          </a>{" "}
          its acquisition of Nordcloud on December 21, 2020.
        </p>
        <p>#NordcloudCommunity</p>
      </div>
    </div>
  );
};

export default DettagliLavoro;
