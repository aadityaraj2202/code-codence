export interface Phase {
    id: string;
    flag: string;
    level: string;
    months: string;
    phaseName: string;
    color: string;
    icon: string;
    sections: { title: string; points: string[] }[];
    outcome: string;
}
export interface CourseRoadmap {
    courseId: string;
    courseName: string;
    tagline: string;
    category: string;
    accentColor: string;
    accentColorDark: string;
    heroBadges: string[];
    phases: Phase[];
    seoContent?: React.ReactNode;
}

const p1 = (phaseName: string, sections: Phase["sections"], outcome: string, color = "#fb923c"): Phase => ({
    id: "beginner", flag: "🚀 START", level: "Beginner Level", months: "Month 1–2",
    phaseName, color, icon: "🚀", sections, outcome,
});
const p2 = (phaseName: string, sections: Phase["sections"], outcome: string, color = "#facc15"): Phase => ({
    id: "intermediate", flag: "🔄 INTERMEDIATE", level: "Intermediate Level", months: "Month 3–4",
    phaseName, color, icon: "⚙️", sections, outcome,
});
const p3 = (phaseName: string, sections: Phase["sections"], outcome: string, color = "#4ade80"): Phase => ({
    id: "advanced", flag: "🏁 GOAL", level: "Advanced Level", months: "Month 5–6",
    phaseName, color, icon: "🏆", sections, outcome,
});

export const courseRoadmaps: CourseRoadmap[] = [
    {
        courseId: "full-stack-java",
        courseName: "Full Stack Development (Java)",
        tagline: "From Java basics to enterprise-grade full-stack applications",
        category: "Software Development",
        accentColor: "#fb923c", accentColorDark: "#ea580c",
        heroBadges: ["☕ Java + Spring Boot", "⏱ 6 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Full Stack Development (Java)?</h3>
                <p>Full Stack Development using Java is the art of building complete, end-to-end web applications. Think of a website like a restaurant. The &quot;Front-End&quot; is the beautifully designed dining area where customers interact, and the &quot;Back-End&quot; is the hidden kitchen where the actual preparation (data processing and storage) happens. A Full Stack Java Developer knows how to build and manage both!</p>
                <p>In this course, you will learn how to create visually appealing user interfaces and connect them to powerful, secure, and scalable Java-based servers.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to build responsive, interactive websites from scratch.</li>
                    <li>How to write server-side business logic using Java.</li>
                    <li>How to securely store and retrieve data from databases.</li>
                    <li>How to connect the front-end and back-end using APIs.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, React.js</li>
                    <li><strong>Back-End:</strong> Core Java, Spring Boot, Hibernate / JPA</li>
                    <li><strong>Database:</strong> MySQL, PostgreSQL</li>
                    <li><strong>Tools:</strong> Git, GitHub, Postman, Maven, Docker Basics</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> When you log into Amazon, the buttons you click and the products you see are the Front-End. When you make a payment and your order is saved, that is the Java Back-End processing your request securely.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Java has been the backbone of enterprise software for over two decades. While new languages come and go, Java remains the undisputed king of large-scale, highly secure applications.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Over 90% of Fortune 500 companies use Java for their backend systems (including banks, e-commerce giants, and airlines).</li>
                    <li><strong>Growth Trends:</strong> The demand for Full Stack Developers is growing at a rate of over 20% year-on-year. Companies prefer hiring one professional who understands the entire application flow rather than separate front-end and back-end developers.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> With the rise of Cloud Computing and Microservices, Java (especially with Spring Boot) has adapted brilliantly. It is fundamentally integrated into modern cloud-native architectures.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> A Full Stack Java Developer bridges the gap between client experience and server performance. They troubleshoot faster, build features independently, and save companies significant time and resources.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>Becoming a Full Stack Java Developer opens multiple doors in the tech industry:</p>
                <ul>
                    <li><strong>Full Stack Developer (Java):</strong> You will build complete web applications, handling both the user interface and the backend server logic.</li>
                    <li><strong>Back-End Java Developer:</strong> Focus purely on writing secure APIs, handling server databases, and optimizing performance using Spring Boot.</li>
                    <li><strong>Front-End Developer:</strong> Specialise in building the visual components of websites using React.js and JavaScript.</li>
                    <li><strong>Software Engineer:</strong> A generalist role in top MNCs where you solve complex software problems using Java logic.</li>
                    <li><strong>Freelancer / Startup Tech Lead:</strong> Build complete MVPs (Minimum Viable Products) for clients or lead the technology stack for a new startup.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> This skill set is heavily in demand for Remote Jobs, MNCs, Service-based companies (TCS, Infosys, Wipro), and fast-growing product startups.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Full Stack Java Developers are among the highest-paid professionals in the Indian IT sector due to the complexity and value of their skills.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹3.5 Lakhs – ₹6.0 Lakhs per annum (Depends on skills, portfolio, and the hiring company).</li>
                    <li><strong>2–3 Years Experience:</strong> ₹7.0 Lakhs – ₹12.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Role):</strong> ₹15.0 Lakhs – ₹25.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> Highly lucrative. You can charge anywhere from ₹15,000 to ₹1,00,000+ per project depending on the complexity of the web application.</li>
                </ul>
                <p><em>(Note: Salaries vary based on location like Bengaluru, Hyderabad, Pune, and your practical problem-solving skills).</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is designed to take you from a beginner to a job-ready professional. It is highly recommended for:</p>
                <ul>
                    <li><strong>Students (12th Pass / Graduates / B.Tech / BCA / MCA):</strong> If you want to start a high-paying career in IT right after your studies, this is the perfect launchpad.</li>
                    <li><strong>Working Professionals:</strong> IT support staff, manual testers, or BPO employees looking to transition into core software development for better salary and growth.</li>
                    <li><strong>Career Switchers:</strong> Non-CS background students (Mechanical, Civil, B.Com) who are willing to put in the hard work to learn coding and enter the tech industry.</li>
                    <li><strong>Business Owners / Entrepreneurs:</strong> If you want to build your own tech product or platform without relying entirely on expensive external agencies.</li>
                </ul>
                <p><em>You don&apos;t need to be a math genius to learn this. You just need logical thinking and consistency.</em></p>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>Once hired, your daily life as a tech professional will be dynamic and impactful.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write code to add new features to a website, fix bugs reported by users, design database tables, and connect the front-end to the back-end via APIs.</li>
                    <li><strong>Team Collaboration:</strong> You will attend daily &quot;Stand-up&quot; meetings. You will work closely with UI/UX designers, product managers, and software testers to ensure the product works perfectly.</li>
                    <li><strong>Tools Used:</strong> You will write code in VS Code or IntelliJ IDEA, push your code to GitHub, test APIs on Postman, and manage databases via MySQL Workbench.</li>
                    <li><strong>Business Impact:</strong> The code you write will directly impact how users experience the product. A faster, bug-free website means happier customers and better business.</li>
                    <li><strong>Growth Path:</strong> Junior Developer ➔ Senior Developer ➔ Tech Lead ➔ Software Architect or Engineering Manager.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We don&apos;t just teach you how to write code; we mentor you on how to think like a Software Engineer.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We assume you know nothing. We start from absolute basics and smoothly transition into complex enterprise-level concepts.</li>
                    <li><strong>Live Industry Projects:</strong> Say goodbye to boring &quot;calculator&quot; apps. You will build real-world clones (like E-commerce apps or Booking systems) that you can proudly show to HRs.</li>
                    <li><strong>Industry Mentorship:</strong> Learn directly from professionals who are currently working in the industry. We teach you what is actually used in companies today, not outdated textbook theories.</li>
                    <li><strong>Portfolio Building:</strong> By the end of this course, you will have a live GitHub portfolio with hosted projects that prove your skills.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We help you craft an ATS-friendly resume, conduct mock interviews, and teach you how to crack technical coding rounds with confidence.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Technology evolves constantly, and as a Full Stack Java Developer, your foundation will be strong enough to adapt to anything.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Once comfortable, you can explore Cloud Computing (AWS/Azure), Docker &amp; Kubernetes, or Microservices architecture.</li>
                    <li><strong>Advanced Roles:</strong> Move into roles like Software Architect (designing the systems), Cloud Engineer, or DevOps Engineer.</li>
                    <li><strong>Certifications:</strong> You can pursue official Oracle Java Certifications or AWS Developer Certifications to heavily boost your resume.</li>
                    <li><strong>Entrepreneurship:</strong> With full-stack skills, you are a &quot;one-person tech army&quot;. You have the exact skills needed to launch your own SaaS (Software as a Service) business.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Is coding mandatory to learn this course?</strong><br />Yes, this is a core development course. However, prior coding experience is NOT mandatory. We teach programming from the absolute zero level.</p>
                <p><strong>2. Can I get a job after this with a non-technical background?</strong><br />Absolutely. Tech companies today hire based on your projects and skills, not just your degree. If your portfolio is strong, your background doesn&apos;t matter.</p>
                <p><strong>3. How long does it take to learn?</strong><br />With consistent practice of 2-3 hours a day, it typically takes about 5 to 6 months to become job-ready in Full Stack Java Development.</p>
                <p><strong>4. Is this skill good for freelancing?</strong><br />Yes! Freelance clients constantly need developers to build custom web applications, e-commerce stores, and admin dashboards. Full-stack developers are highly preferred.</p>
                <p><strong>5. Will I be building real projects?</strong><br />Yes. Hands-on practice is the core of this course. You will build end-to-end projects that you can host online and add directly to your resume.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Core Java & Frontend Foundations", [
                { title: "Core Java Fundamentals", points: ["JVM, JDK, JRE architecture", "OOP: Encapsulation, Inheritance, Polymorphism, Abstraction", "Collections Framework (List, Set, Map)", "Exception Handling & File I/O"] },
                { title: "Database & Frontend Basics", points: ["SQL CRUD, Joins, Indexing, ER Diagrams", "Java-MySQL via JDBC", "Semantic HTML5, CSS3 Flexbox & Grid", "JavaScript DOM Manipulation & ES6 basics"] },
            ], "Build static websites and Java console apps connected to databases."),
            p2("Phase 2: Spring Boot & Full-Stack Integration", [
                { title: "Spring Boot Backend", points: ["Spring Core, Dependency Injection", "RESTful APIs with Spring MVC", "Spring Data JPA, Hibernate ORM", "JWT Authentication & Spring Security", "Validation, Logging & Config Management"] },
                { title: "Frontend & Version Control", points: ["Consume REST APIs with JavaScript & Fetch API", "Basic React.js (components, state, props)", "Git & GitHub: branching, PRs, collaboration"] },
            ], "Build full-stack CRUD apps with authentication and database integration."),
            p3("Phase 3: Production-Ready Applications", [
                { title: "Advanced Backend & DevOps", points: ["Microservices fundamentals", "Redis caching & Swagger API docs", "JUnit & Mockito unit testing", "Docker, Maven, CI/CD basics", "Deploy to AWS / Render / Railway"] },
                { title: "Capstone & Career Prep", points: ["E-commerce & Admin Dashboard projects", "Payment Gateway integration (simulation)", "Data Structures for interviews", "System design basics & GitHub portfolio"] },
            ], "Design, develop, secure, test and deploy enterprise Java full-stack applications."),
        ],
    },
    {
        courseId: "full-stack-python",
        courseName: "Full Stack Development (Python)",
        tagline: "From Python basics to production-ready Django web applications",
        category: "Software Development",
        accentColor: "#facc15", accentColorDark: "#eab308",
        heroBadges: ["🐍 Python + Django", "⏱ 6 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Full Stack Development (Python)?</h3>
                <p>Full Stack Python Development is the process of building complete, dynamic web applications where Python powers the "Back-End" (the server and database logic) and technologies like React or HTML/JavaScript handle the "Front-End" (the visual layout). Python is globally loved because it is simple to read, incredibly powerful, and highly scalable.</p>
                <p>In this course, you will learn how to build secure web servers using Django, connect them to databases, and create beautiful, interactive user interfaces.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to write clean, efficient, and object-oriented Python code.</li>
                    <li>How to build RESTful APIs using the powerful Django REST Framework.</li>
                    <li>How to connect Python applications to PostgreSQL databases securely.</li>
                    <li>How to integrate the backend with a powerful React.js frontend.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6+), React.js</li>
                    <li><strong>Back-End:</strong> Python 3 core, Django, Django REST Framework (DRF)</li>
                    <li><strong>Database &amp; Tools:</strong> PostgreSQL, Redis, Celery, Git, Docker</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Instagram and Pinterest were famously built using Python (Django). When you upload a photo (Front-End), Python processes the image, saves the text to a database, and distributes it to your followers' feeds instantly (Back-End).</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Python is consistently ranked as the #1 or #2 most popular programming language in the world. It is the language of choice for startups and massive tech companies alike.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> From fast-paced startups building MVPs to giants like Netflix and Spotify, Python developers are hired universally for web backend and data infrastructure.</li>
                    <li><strong>Growth Trends:</strong> The intersection of AI and Web Development is dominated by Python. A Full Stack Python Developer can easily integrate Machine Learning models (like ChatGPT APIs) into their websites.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> As AI continues to grow, Python's dominance will only increase. Web apps of the future will require Python backends to run intelligent, data-heavy operations.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Python allows for extremely fast development. A Full Stack Python dev can build and deploy a working application in half the time it takes in older, heavier languages, saving companies immense money.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>Mastering Full Stack Python opens doors to some of the most exciting roles in tech:</p>
                <ul>
                    <li><strong>Full Stack Developer (Python/React):</strong> Build end-to-end applications entirely by yourself, handling both the database and the UI.</li>
                    <li><strong>Python Backend Engineer:</strong> Specialise in writing fast, secure APIs, complex business logic, and database management using Django.</li>
                    <li><strong>API Developer:</strong> Focus on building the communication layer that allows mobile apps and websites to talk to the server.</li>
                    <li><strong>Freelance Web Developer:</strong> Python is the ultimate freelancing language because you can build client projects rapidly.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> Python developers enjoy massive opportunities in Remote Jobs, Product Startups, AI Companies, and international freelance platforms.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Due to Python's versatility (Web + AI + Data), Python developers command premium salaries in India.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹4.0 Lakhs – ₹7.0 Lakhs per annum (Top product companies offer significantly more).</li>
                    <li><strong>2–3 Years Experience:</strong> ₹8.0 Lakhs – ₹14.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior/Lead):</strong> ₹18.0 Lakhs – ₹30.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> You can charge ₹20,000 to ₹1,50,000+ per project for building custom web applications or MVP backends.</li>
                </ul>
                <p><em>(Note: Salaries vary based on location like Bengaluru, Gurugram, Pune, and your practical coding skills).</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is designed to take you from a beginner to a job-ready professional. It is highly recommended for:</p>
                <ul>
                    <li><strong>Students (12th Pass / Graduates / B.Tech / BCA / MCA):</strong> Launch a high-paying software career with a language that is incredibly beginner-friendly but enterprise-powerful.</li>
                    <li><strong>Working Professionals:</strong> Non-IT professionals or manual testers looking for a smooth, logical transition into core software development.</li>
                    <li><strong>AI &amp; Data Enthusiasts:</strong> Anyone who eventually wants to move into AI or Data Science but needs to know how to build web applications to deploy their models.</li>
                    <li><strong>Entrepreneurs &amp; Startup Founders:</strong> Build your own tech startup MVP quickly and cheaply without paying expensive agencies.</li>
                </ul>
                <p><em>Python reads almost like plain English. If you can think logically, you can learn Python.</em></p>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>Once hired, you will be the builder of digital products.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write Python code to handle user authentication, process payments, connect to databases, and build the React interfaces that users click on.</li>
                    <li><strong>Team Collaboration:</strong> You will work in Agile sprints alongside UI/UX designers, Product Managers, and QA testers.</li>
                    <li><strong>Tools Used:</strong> You will code in VS Code, manage databases in DBeaver/PGAdmin, test endpoints in Postman, and track versions using Git/GitHub.</li>
                    <li><strong>Business Impact:</strong> You will build the core features that the company sells. Fast code means a better user experience and higher revenue.</li>
                    <li><strong>Growth Path:</strong> Junior Python Developer ➔ Senior Backend Engineer ➔ Technical Lead ➔ Engineering Manager.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We don&apos;t just teach syntax; we teach you how to engineer software.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We start with "print('Hello World')" and take you all the way to deploying complex systems on the AWS cloud.</li>
                    <li><strong>Live Industry Projects:</strong> You won't just build calculators. You will build Job Portals, E-commerce backends, and Social Media clones.</li>
                    <li><strong>Industry Mentorship:</strong> Learn from developers who actually write Python for tech companies today. Learn the standard practices, not outdated academic theory.</li>
                    <li><strong>Portfolio Building:</strong> You will graduate with a live GitHub portfolio and hosted web applications to prove your worth to recruiters.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We optimize your resume for ATS systems and conduct mock interviews to ensure you can pass coding rounds.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Python is the gateway to the most advanced fields in technology.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Once you master Web Development, you can easily transition into Data Science, Machine Learning, or prompt engineering.</li>
                    <li><strong>Advanced Roles:</strong> Transition into Cloud Architecture, DevOps, or AI Backend Engineering.</li>
                    <li><strong>Certifications:</strong> Pursue AWS Certified Developer or advanced Python Institute certifications.</li>
                    <li><strong>Entrepreneurship:</strong> Python is the ultimate "solopreneur" language. Build, launch, and scale your own SaaS products independently.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Is Python easier than Java or C++?</strong><br />Yes! Python's syntax is highly readable and beginner-friendly, making it the perfect first programming language to learn.</p>
                <p><strong>2. Do I need a Computer Science degree?</strong><br />No. Tech companies hire Python developers based on their project portfolios and GitHub commits, not just their college degrees.</p>
                <p><strong>3. How long does it take to learn?</strong><br />With 2-3 hours of dedicated daily practice, you can become a job-ready Full Stack Python Developer in about 5 to 6 months.</p>
                <p><strong>4. Can I integrate AI into my websites doing this course?</strong><br />Yes. Because you are using Python, integrating OpenAI APIs or custom ML models later becomes incredibly simple.</p>
                <p><strong>5. Will I build real projects?</strong><br />Yes. You will build end-to-end applications that are hosted live on the internet, which you can show to potential employers.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Python & Frontend Foundations", [
                { title: "Python Core", points: ["Python syntax, OOP, functions & modules", "File handling, exceptions & standard library", "Virtual environments & pip management"] },
                { title: "Frontend & Database", points: ["HTML5, CSS3, Flexbox, Grid basics", "JavaScript DOM & ES6 fundamentals", "PostgreSQL CRUD & Django ORM intro"] },
            ], "Build basic web pages and Python CLI apps connected to databases.", "#facc15"),
            p2("Phase 2: Django REST & React Integration", [
                { title: "Django Backend", points: ["Django models, views, URL routing", "Django REST Framework & serializers", "JWT auth & role-based access control", "Celery & Redis background tasks"] },
                { title: "Frontend Integration", points: ["React.js connected to Django APIs with Axios", "Redux state management basics", "Automated testing with pytest"] },
            ], "Build full-stack CRUD applications with authentication and background tasks.", "#facc15"),
            p3("Phase 3: Deployment & Scalability", [
                { title: "DevOps & Cloud", points: ["Docker + Docker Compose containerisation", "Deploy on AWS EC2, S3, RDS", "Nginx + Gunicorn production setup", "CI/CD with GitHub Actions"] },
                { title: "Capstone Projects", points: ["Job portal or e-learning platform", "FastAPI microservices integration", "Performance optimisation & caching", "Portfolio & interview preparation"] },
            ], "Deploy scalable Python full-stack applications on cloud infrastructure.", "#facc15"),
        ],
    },
    {
        courseId: "mern-stack",
        courseName: "M.E.R.N Stack Development",
        tagline: "Build modern JavaScript-powered full-stack applications",
        category: "Software Development",
        accentColor: "#38bdf8", accentColorDark: "#0284c7",
        heroBadges: ["⚛️ MongoDB · Express · React · Node", "⏱ 5 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is M.E.R.N Stack Development?</h3>
                <p>MERN Stack Development is the most popular modern way to build dynamic, fast, and highly interactive web applications. MERN stands for <strong>MongoDB, Express.js, React.js, and Node.js</strong>. The biggest advantage of the MERN stack is that it uses a single language—<em>JavaScript</em>—for both the front-end (what the user sees) and the back-end (the server and database).</p>
                <p>In this course, you will learn how to build seamless, "Single Page Applications" (SPAs) that load instantly without refreshing the browser, just like Netflix or Facebook.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to build beautiful, highly interactive user interfaces using React.js.</li>
                    <li>How to create scalable web servers using Node.js and Express.</li>
                    <li>How to store and manage unstructured data using MongoDB.</li>
                    <li>How to cleanly connect all these parts to make a lightning-fast application.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Front-End:</strong> HTML5, CSS3, Modern JavaScript (ES6+), React.js, Redux</li>
                    <li><strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication</li>
                    <li><strong>Database:</strong> MongoDB, Mongoose ODM</li>
                    <li><strong>Tools:</strong> Git, GitHub, Postman, Vercel/Render for deployment</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> When you scroll through Twitter or Facebook, the page never reloads, but new posts magically appear, and you can "like" things instantly. That smooth, app-like experience in the browser is exactly what the MERN stack is famous for building.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>JavaScript is the undisputed language of the web. By mastering MERN, you master the dominant tech stack of the entire modern internet startup ecosystem.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> From early-stage startups to unicorns like Uber and Airbnb, companies are actively moving towards React.js and Node.js for their incredible speed and developer productivity.</li>
                    <li><strong>Growth Trends:</strong> React.js is the most highly requested frontend framework in job postings globally. Knowing Node.js alongside it makes you twice as valuable.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> The web is becoming more interactive and real-time. The MERN stack is perfectly positioned to handle real-time chats, live dashboards, and modern SaaS applications well into the future.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Because everything is written in JavaScript, companies only need to hire one type of developer. A MERN developer can seamlessly switch between writing database queries and designing buttons, cutting team costs in half.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>Mastering the MERN stack makes you one of the most versatile developers on the market:</p>
                <ul>
                    <li><strong>Full Stack Developer (MERN):</strong> Build and maintain the complete architecture of heavily interactive modern web applications.</li>
                    <li><strong>Frontend React Developer:</strong> Specialise in creating beautiful, complex UI components and managing global states on the browser.</li>
                    <li><strong>Backend Node.js Developer:</strong> Focus on writing ultra-fast API endpoints, managing real-time web sockets, and securing MongoDB databases.</li>
                    <li><strong>JavaScript Engineer:</strong> A generalist role solving complex problems across the entire JS ecosystem in product companies.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> MERN is the #1 stack requested by Freelancers and Startups globally. It offers massive opportunities for 100% remote work and high-paying overseas contracts.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Because MERN developers can build products so quickly, they are highly compensated by product-based companies and startups.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹4.5 Lakhs – ₹8.0 Lakhs per annum (Top startups often pay ₹10L+ for strong React skills).</li>
                    <li><strong>2–3 Years Experience:</strong> ₹9.0 Lakhs – ₹16.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Role):</strong> ₹20.0 Lakhs – ₹35.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> Extremely high. You can charge ₹30,000 to ₹2,00,000+ for building modern SaaS platforms or interactive dashboards on Upwork/Fiverr.</li>
                </ul>
                <p><em>(Note: Salaries vary based on location like Bengaluru, Gurugram, Hyderabad, and your portfolio of live projects).</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>If you want to build things fast and modern, this is for you. It is highly recommended for:</p>
                <ul>
                    <li><strong>Students (12th Pass / B.Tech / BCA):</strong> If you want to enter the high-growth startup ecosystem immediately after college, MERN is exactly what they are hiring for.</li>
                    <li><strong>Working Professionals:</strong> Traditional HTML/CSS developers or manual testers looking to upgrade to modern JavaScript frameworks and double their salary.</li>
                    <li><strong>Career Switchers:</strong> People from non-tech backgrounds who want to dive straight into the most modern, marketable skill currently available.</li>
                    <li><strong>Founders &amp; Indie Hackers:</strong> Best for entrepreneurs wanting to launch modern, real-time SaaS products rapidly.</li>
                </ul>
                <p><em>No prior coding experience is required. We start with the absolute basics of JavaScript.</em></p>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be at the forefront of building fast, modern user experiences.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write React components for new features, connect them to APIs, write Node.js server routes, and design MongoDB schemas for storing data.</li>
                    <li><strong>Team Collaboration:</strong> You will work in fast-paced Agile teams, translating Figma designs from UX designers into working code, and checking code into GitHub.</li>
                    <li><strong>Tools Used:</strong> VS Code, MongoDB Compass, Postman for API testing, Chrome Developer Tools, and React Developer Tools.</li>
                    <li><strong>Business Impact:</strong> You directly impact website speed and interactivity. A seamless React application drastically increases user retention and sales.</li>
                    <li><strong>Growth Path:</strong> Junior MERN Developer ➔ Senior React/Node Engineer ➔ Full Stack Tech Lead ➔ Architect.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We train you for the real world, not the textbook world.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We take you from plain JavaScript logic all the way to complex React hooks and Node server deployments smoothly.</li>
                    <li><strong>Live Industry Projects:</strong> You will build real-time chat applications, e-commerce stores with payment gateways, and social media dashboards.</li>
                    <li><strong>Industry Mentorship:</strong> Learn the actual file structures, design patterns, and state management techniques (like Redux) used by top tech startups right now.</li>
                    <li><strong>Portfolio Building:</strong> You will graduate with a live portfolio of blazing-fast React applications hosted online.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We train you on JavaScript algorithm interviews, React machine coding rounds, and craft your ATS-friendly resume.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>MERN is a foundational superpower for modern development.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> You can quickly pick up Next.js (the React framework for production), GraphQL, or React Native to build iOS and Android mobile apps using the exact same skills!</li>
                    <li><strong>Advanced Roles:</strong> Senior Frontend Architect, Cloud Solutions Architect, or Web3/Blockchain Developer (Web3 heavily relies on React/Node).</li>
                    <li><strong>Entrepreneurship:</strong> The MERN stack is the absolute best choice for "Indie Hackers" building scalable software businesses from their bedrooms.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to know JavaScript before joining?</strong><br />No! We start from the very basics of JavaScript before moving into advanced React and Node concepts.</p>
                <p><strong>2. Why MERN instead of Java or Python?</strong><br />MERN uses just ONE language (JavaScript) for everything, making it faster to learn. It is heavily used by startups and modern product companies for fast, interactive web apps.</p>
                <p><strong>3. How long does it take to learn the MERN stack?</strong><br />With 2-3 hours of dedicated daily practice, you can become a job-ready MERN stack developer in about 5 months.</p>
                <p><strong>4. Can I build mobile apps after this?</strong><br />Because you will learn React, transitioning to React Native to build mobile apps for iOS and Android will be incredibly easy for you later on.</p>
                <p><strong>5. Will I be able to build real websites?</strong><br />Yes. By the end of this course, you will be able to build, connect to a database, and launch live, fully functioning websites entirely on your own.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: JavaScript & Node.js Foundations", [
                { title: "Modern JavaScript", points: ["ES6+: arrow functions, destructuring, promises, async/await", "Node.js runtime, npm ecosystem & module system", "MongoDB schema design & CRUD with Mongo Shell"] },
                { title: "React Basics", points: ["Components, props, state & event handling", "CSS Modules & responsive layouts", "Functional components & React hooks"] },
            ], "Build basic Node.js servers and interactive React UIs.", "#38bdf8"),
            p2("Phase 2: Full MERN Stack", [
                { title: "Express & MongoDB APIs", points: ["RESTful APIs with Express.js & middleware", "Mongoose ODM: schemas, validation, relationships", "JWT authentication & protected routes"] },
                { title: "React State & Integration", points: ["Redux Toolkit & Context API for global state", "Axios & React Query for API calls", "File uploads with Multer & Cloudinary"] },
            ], "Build authenticated MERN apps with file upload and state management.", "#38bdf8"),
            p3("Phase 3: Advanced MERN & Deployment", [
                { title: "Advanced Features", points: ["GraphQL with Apollo Server & Client", "Real-time features with Socket.IO", "Advanced React patterns (HOCs, compound components)"] },
                { title: "DevOps & Capstone", points: ["Deploy to Vercel, Railway & AWS", "MongoDB indexing, aggregation & Atlas Search", "Social media or marketplace capstone project", "MERN interview preparation"] },
            ], "Build and deploy production-grade MERN applications with real-time features.", "#38bdf8"),
        ],
    },
    {
        courseId: "web-designing",
        courseName: "Web Designing",
        tagline: "From design fundamentals to professional UI/UX workflows",
        category: "Software Development",
        accentColor: "#f472b6", accentColorDark: "#db2777",
        heroBadges: ["🎨 HTML · CSS · Figma", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Web Designing?</h3>
                <p>Web Designing is the creative and technical process of planning, designing, and coding the visual look and feel of a website. It represents the intersection of digital art and coding. A web designer thinks about how a website should look (colors, fonts, layouts) and then uses code to bring that vision to life on the screen.</p>
                <p>In this course, you will learn how to design stunning user interfaces in design software and seamlessly translate them into working, responsive, and animated web pages.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>Principles of modern UI/UX design (color theory, typography, spacing).</li>
                    <li>How to design professional mockups and prototypes using Figma.</li>
                    <li>How to code beautiful layouts using semantic HTML5 and modern CSS3.</li>
                    <li>How to make websites fully responsive (looking great on mobiles and laptops) and add interactive animations.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Design Tools:</strong> Figma, Adobe Photoshop (Basics)</li>
                    <li><strong>Development:</strong> HTML5, CSS3 (Flexbox &amp; Grid), CSS Animations</li>
                    <li><strong>Interactivity:</strong> Basic JavaScript for UI logic (menus, sliders)</li>
                    <li><strong>Workflow:</strong> Responsive Design, Media Queries, Developer Handoff</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Think of the Apple website. The sleek animations when you scroll down, the perfect spacing between the text and the iPhone images, and the fact that it reshapes perfectly when you view it on your phone—that is world-class Web Design at work.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>A company's website is its digital storefront. If it looks outdated or doesn't work on mobile, they lose customers instantly. Stunning web design is no longer a luxury; it is a business requirement.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Every single business, from local cafes to global tech giants, needs a beautiful, mobile-friendly website to survive in the digital age.</li>
                    <li><strong>Growth Trends:</strong> With the explosive growth of mobile internet, "Responsive Web Design" and "Mobile-First Design" are standard industry requirements, driving massive demand for skilled designers.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> As the web becomes more visual (3D elements, micro-interactions), designers who can code beautiful CSS animations and perfect layouts will remain highly sought after.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> A great web designer increases a company's sales by making the website easy to use, visually trustworthy, and perfectly legible across all devices.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>Web Designing is a highly flexible skill that opens up creative roles across the industry:</p>
                <ul>
                    <li><strong>Web Designer / UI Developer:</strong> Code the visual aspects of websites using HTML/CSS and ensure they match the design perfectly.</li>
                    <li><strong>UI/UX Designer:</strong> Focus primarily on researching user behavior and designing interfaces in tools like Figma.</li>
                    <li><strong>Frontend Developer (Entry Level):</strong> Collaborate with backend teams to build the client-facing side of web applications.</li>
                    <li><strong>Freelance Web Designer:</strong> Build beautiful landing pages and portfolios directly for small businesses and independent clients.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> Web Design is one of the most freelancing-friendly skills in the world. It is highly suited for remote work, creative agencies, and independent consulting.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Skilled Web Designers who understand both design theory and clean code are well compensated.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹2.5 Lakhs – ₹4.5 Lakhs per annum (Depends heavily on your portfolio's visual quality).</li>
                    <li><strong>2–3 Years Experience:</strong> ₹5.0 Lakhs – ₹9.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Designer / Art Director):</strong> ₹12.0 Lakhs – ₹20.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> Excellent. You can charge ₹10,000 to ₹50,000+ per website simply for designing and coding responsive landing pages for clients globally.</li>
                </ul>
                <p><em>(Note: Your salary in this field is almost entirely dictated by how stunning and professional your portfolio looks to the employer).</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is perfect for creative individuals who want to enter the tech industry without diving into hardcore backend algorithms.</p>
                <ul>
                    <li><strong>Students (10th/12th Pass / Any Graduate):</strong> Step into the IT industry quickly with a highly visual, creative skill set. No complex math required!</li>
                    <li><strong>Creative Professionals:</strong> Graphic Designers or Print Designers looking to upgrade their skills to digital and interactive media.</li>
                    <li><strong>Career Switchers:</strong> Anyone looking for a lucrative career that balances creativity with logical construction.</li>
                    <li><strong>Freelancers &amp; Agency Owners:</strong> Individuals wanting to start their own web design agency or offer services on Fiverr/Upwork.</li>
                </ul>
                <p><em>If you have an eye for design and love seeing immediate visual results of your work, this is the perfect career path for you.</em></p>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the bridge between the design team and the engineering team.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will receive a design from Figma, write the HTML/CSS code to build it in the browser, test it across different screen sizes, and add hover effects and animations.</li>
                    <li><strong>Team Collaboration:</strong> You will work closely with UX Designers to understand the layouts, and Backend Developers to ensure the layouts integrate well with the server data.</li>
                    <li><strong>Tools Used:</strong> Figma for checking design specs, VS Code for writing HTML/CSS, and Chrome Developer tools for pixel-perfect adjustments.</li>
                    <li><strong>Business Impact:</strong> You are responsible for the "First Impression". If your code is beautiful and responsive, users stay on the site longer.</li>
                    <li><strong>Growth Path:</strong> Junior Designer ➔ UI Developer ➔ Senior UX/UI Engineer ➔ Design Lead / Creative Director.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We teach you to design with purpose and code with precision.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We take you from understanding basic colors to writing complex, modern CSS Grid layouts from scratch.</li>
                    <li><strong>Live Industry Projects:</strong> You will build stunning, responsive landing pages, e-commerce storefronts, and personal portfolios that look like they belong in 2024.</li>
                    <li><strong>Industry Mentorship:</strong> Learn modern workflows. We teach you the exact methods used by professional agencies to hand off designs to developers.</li>
                    <li><strong>Portfolio Building:</strong> You won't just learn theory. You will graduate with a live portfolio of gorgeous websites hosted online to show clients.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We help you curate your design portfolio and prepare for front-end visual coding interviews.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Web Design is heavily visual, but it is just the beginning of a massive digital career.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Once you master HTML/CSS, you can easily transition into a Full Frontend Developer by mastering JavaScript and React.js.</li>
                    <li><strong>Advanced Roles:</strong> Transition into specialized UX Research, Interaction Design, or Frontend Architecture.</li>
                    <li><strong>Entrepreneurship:</strong> Start your own digital marketing or web design agency. Build landing pages for local businesses and scale up.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be a great artist or know how to draw?</strong><br />Not at all! Web design is about arranging elements, typography, and colors logically. It is more about rules and structure than freehand drawing.</p>
                <p><strong>2. Is there a lot of complex coding and math involved?</strong><br />No. HTML and CSS are "markup" languages. They are purely visual and structural. There are no complex math algorithms or deep logic involved.</p>
                <p><strong>3. How long does it take to learn?</strong><br />With 2 hours of daily practice, you can become highly proficient in Web Design (HTML/CSS + Figma) in about 3 months.</p>
                <p><strong>4. Can I do this course if I am from an Arts/Commerce background?</strong><br />Absolutely! Web Design is one of the most welcoming fields for non-science students because it prioritizes creativity and structural thinking over traditional computer science concepts.</p>
                <p><strong>5. Will I build real websites during the course?</strong><br />Yes, you will design and code multiple real-world pages from scratch, ensuring they look perfect on phones, tablets, and desktops.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Design & HTML/CSS Foundations", [
                { title: "Design Principles", points: ["Colour theory, typography & spacing systems", "Visual hierarchy, contrast & alignment", "Wireframing & low-fidelity prototyping"] },
                { title: "HTML & CSS", points: ["Semantic HTML5 structure", "CSS3 Flexbox & Grid layouts", "Responsive design with media queries"] },
            ], "Build responsive static websites using modern HTML & CSS.", "#f472b6"),
            p2("Phase 2: Interactive Design & Figma", [
                { title: "JavaScript & Animations", points: ["DOM manipulation for dynamic UI", "CSS transitions, keyframe animations & transforms", "Micro-interactions & motion design"] },
                { title: "Figma & UX", points: ["High-fidelity prototypes & component libraries", "UX principles, user flows & accessibility (WCAG)", "Developer handoff with Figma inspect"] },
            ], "Create animated, interactive and accessible web designs.", "#f472b6"),
            p3("Phase 3: Advanced CSS & Portfolio", [
                { title: "Advanced Techniques", points: ["CSS custom properties, container queries & scroll animations", "GSAP animations & 3D transforms", "Core Web Vitals & performance optimisation"] },
                { title: "Career & Portfolio", points: ["Complete design system with tokens & documentation", "CMS integration (WordPress / Webflow)", "5+ portfolio case study projects"] },
            ], "Deliver professional-grade web designs and a strong career portfolio.", "#f472b6"),
        ],
    },
    {
        courseId: "python-cpp",
        courseName: "Python / C / C++ / R",
        tagline: "Master programming languages powering modern software",
        category: "Software Development",
        accentColor: "#94a3b8", accentColorDark: "#64748b",
        heroBadges: ["⚙️ Multi-language", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is the Python / C / C++ / R Course?</h3>
                <p>This unique multi-language curriculum is a powerhouse foundational course designed to build a rock-solid understanding of computer programming. Rather than just learning syntax, you will learn the core logic of programming by mastering the four most important languages in the tech spectrum.</p>
                <p><strong>C &amp; C++</strong> teach you how computers manage memory and execute blazing-fast logic at a low level. <strong>Python &amp; R</strong> teach you how to write modern, high-level code for rapid development, automation, and data analysis.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>The core fundamentals of algorithms, flowcharts, and logical problem-solving.</li>
                    <li><strong>C/C++:</strong> Memory management (pointers), Object-Oriented Programming (OOP), and lightning-fast execution.</li>
                    <li><strong>Python:</strong> Modern syntax, data structures, and automation scripting.</li>
                    <li><strong>R:</strong> Statistical computing and basic data manipulation.</li>
                </ul>
                <br />
                <strong>Why learn multiple languages?</strong>
                <p>Learning how C++ handles memory vs how Python handles it gives you an "under-the-hood" perspective that 90% of modern web developers lack. This makes you an exceptionally strong Software Engineer.</p>
                <br />
                <p><strong>Real-world Example:</strong> Video game engines (like Unreal Engine) use <strong>C++</strong> because it is impossibly fast. The data scientists analyzing player behavior use <strong>R or Python</strong> because it manipulates data easily. You will understand both worlds.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>A strong foundation in these core languages makes you "language-agnostic"—meaning you can pick up ANY new technology in the future within days.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> While web tech changes yearly, C++ and Python run the world's most critical infrastructure (OS development, AI models, high-frequency trading).</li>
                    <li><strong>Growth Trends:</strong> With the boom in AI, Machine Learning, and IoT (Internet of Things), the demand for Python and C++ engineers is at an all-time high.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> AI models are written in Python but executed on hardware using C/C++ libraries. Knowing this stack makes you indispensable for the AI revolution.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Top-tier product companies (FAANG/MAANG) prefer hiring engineers with strong algorithmic fundamentals derived from C/C++, because these engineers write vastly more efficient code regardless of the framework.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>This foundational multi-language skill set prepares you for elite software engineering roles:</p>
                <ul>
                    <li><strong>Software Development Engineer (SDE):</strong> A core engineering role at product companies, solving complex algorithmic problems.</li>
                    <li><strong>Backend/Systems Engineer:</strong> Build highly efficient, performance-critical backend systems using C++ or Python.</li>
                    <li><strong>Data &amp; Automation Engineer:</strong> Write Python and R scripts to automate business processes, scrape data, and perform statistical analysis.</li>
                    <li><strong>Embedded Systems Developer:</strong> Write C/C++ code for hardware, IoT devices, robotics, or automotive software.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> Core software engineers are heavily hired by massive MNCs, high-paying FinTech companies, and cutting-edge AI product startups.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Engineers with strong logical fundamentals command top-tier salaries in the Indian IT paradigm.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹4.5 Lakhs – ₹8.0 Lakhs per annum (Top product companies offer ₹12L - ₹20L+ for strong problem solvers).</li>
                    <li><strong>2–3 Years Experience:</strong> ₹10.0 Lakhs – ₹18.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior SDE):</strong> ₹25.0 Lakhs – ₹40.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> While less common for C++, Python developers have massive freelancing opportunities in automation, web scraping, and data script writing (up to ₹1,00,000+ per gig).</li>
                </ul>
                <p><em>(Note: Your salary here is highly dependent on your problem-solving logic and algorithmic skills in coding interviews).</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This is the ultimate foundation course. It is highly recommended for:</p>
                <ul>
                    <li><strong>Engineering Students (B.Tech / BCA / MCA / 1st &amp; 2nd Year):</strong> This is the exact curriculum you need to master your college academics AND crack campus placement interviews.</li>
                    <li><strong>Aspiring FAANG Engineers:</strong> If your dream is Google or Amazon, you need the low-level logic of C++ and the rapid algorithmic power of Python.</li>
                    <li><strong>Data Science Hopefuls:</strong> Python and R are the mandatory foundations for any future career in Machine Learning or Data Analytics.</li>
                    <li><strong>Career Switchers:</strong> A rigorous but structured way to learn computer science fundamentals properly from the ground up, not just learning a "trendy framework".</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be solving the core logic problems of the business.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write efficient algorithms, optimise database queries, manage memory securely, and write scripts to automate repetitive company tasks.</li>
                    <li><strong>Team Collaboration:</strong> You will work in engineering teams, participating in rigorous code reviews where logic and time-complexity (Big-O) are analyzed.</li>
                    <li><strong>Tools Used:</strong> IDEs like Visual Studio, PyCharm, GCC Compilers, RStudio, and version control via Git.</li>
                    <li><strong>Business Impact:</strong> Your efficient code ensures servers don't crash under pressure and cloud computing bills stay low.</li>
                    <li><strong>Growth Path:</strong> SDE-1 (Junior) ➔ SDE-2 ➔ Senior Engineer ➔ Principal Engineer / Systems Architect.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We build engineers, not just coders who memorize syntax.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> Start with simple variables in C and smoothly transition to complex Object-Oriented features in C++ and Python. No skipping the hard parts.</li>
                    <li><strong>Conceptual Depth:</strong> We physically draw memory diagrams to show you exactly how pointers and arrays work inside the RAM. You will understand WHY code works.</li>
                    <li><strong>Industry Mentorship:</strong> Learn from veterans who know what top-tier product companies look for in technical interviews.</li>
                    <li><strong>Logic Building Focus:</strong> We focus heavily on pattern recognition and logical problem-solving, making you bulletproof for coding tests.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We train you on whiteboard interviews, algorithm optimization, and competitive programming basics.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>This course is the bedrock upon which you can build any advanced technical career.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Master Data Structures and Algorithms (DSA) using your language of choice. Then diverge into Data Science (Python/R) or Systems/Game Development (C++).</li>
                    <li><strong>Advanced Roles:</strong> Machine Learning Engineer, High-Frequency Trading Developer, Core Systems Architect.</li>
                    <li><strong>Certifications:</strong> Pursue advanced Python Institute certifications or specific C++ Institute credentials to bolster the resume.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Isn't learning 4 languages at once confusing?</strong><br />Not the way we teach it. We teach the underlying logic (loops, arrays, functions) first, then simply show you the syntax differences across the languages. It dramatically speeds up your learning.</p>
                <p><strong>2. Why should I learn C or C++ in 2024?</strong><br />C/C++ teaches you how memory actually works (pointers, garbage collection). Learning it makes you an exceptionally better Python or Java developer because you understand what happens "under the hood".</p>
                <p><strong>3. Which language should I use for job interviews?</strong><br />You will be comfortable in multiple, but Python or C++ are the industry standards for cracking algorithmic (DSA) coding rounds.</p>
                <p><strong>4. Can I do this without a Computer Science background?</strong><br />Yes. We assume absolutely zero prior knowledge and start from what a variable is in the simplest terms.</p>
                <p><strong>5. How long does this course take?</strong><br />It is an intensive foundation course that takes about 3 months of consistent, daily logical practice.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Language Fundamentals", [
                { title: "Core Syntax Across Languages", points: ["Variables, data types & control flow in Python, C & C++", "C pointers, arrays & memory addresses", "R vectors, data frames & RStudio setup"] },
                { title: "OOP & Standard Libraries", points: ["Classes, constructors & inheritance in Python and C++", "Python standard library: os, sys, math, datetime", "Solve beginner algorithmic problems"] },
            ], "Write programs in Python, C, C++ and R solving real problems.", "#94a3b8"),
            p2("Phase 2: Intermediate Concepts", [
                { title: "C++ STL & Advanced Python", points: ["C++ STL: vectors, maps, sets, priority queues", "Dynamic memory: malloc, free, new, delete", "Python decorators, generators & context managers"] },
                { title: "R & File I/O", points: ["R tidyverse for data manipulation", "File I/O and multi-threaded programs", "Error handling & debugging techniques"] },
            ], "Build complex programs with advanced language features.", "#94a3b8"),
            p3("Phase 3: Advanced Applications", [
                { title: "Performance & Interop", points: ["Advanced data structures in C++: trees, tries, graphs", "Python-C++ extensions using pybind11", "Move semantics & RAII in C++"] },
                { title: "Practical & Interview Prep", points: ["R for statistical modelling & GLMs", "Competitive programming on LeetCode & Codeforces", "Language-specific interview optimisation"] },
            ], "Write high-performance code and solve competitive programming challenges.", "#94a3b8"),
        ],
    },
    {
        courseId: "dsa",
        courseName: "DSA (C/C++/Python/Java)",
        tagline: "Build problem-solving foundations for top tech companies",
        category: "Software Development",
        accentColor: "#a78bfa", accentColorDark: "#ea580c",
        heroBadges: ["🧠 Big-O · Logic", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Data Structures &amp; Algorithms (DSA)?</h3>
                <p>Data Structures and Algorithms (DSA) is the heart of computer science. It teaches you how to organize data efficiently (Data Structures) and how to solve problems step-by-step using the most optimized logic possible (Algorithms).</p>
                <p>Whether you code in C++, Java, or Python, DSA is the universal language of problem-solving. It is not about building websites; it is about making software run lightning fast while using the least amount of memory.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to store data efficiently using Arrays, Linked Lists, Stacks, and Queues.</li>
                    <li>How to search and sort massive amounts of data in milliseconds.</li>
                    <li>How to solve complex recursive problems and optimize them using Dynamic Programming.</li>
                    <li>How to traverse Trees and Graphs (the logic used by Google Maps and Facebook).</li>
                </ul>
                <br />
                <strong>Languages Used:</strong>
                <p>You can choose to implement these concepts in <strong>C, C++, Java, or Python</strong>. The logic remains exactly the same.</p>
                <br />
                <p><strong>Real-world Example:</strong> When you search for the shortest route from your home to the airport on Google Maps, the app uses a Graph Algorithm (like Dijkstra's) to instantly calculate the fastest path out of millions of possibilities. That is pure DSA in action.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>DSA is the absolute gold standard for technical interviews at every major technology company.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Product-based companies (Google, Amazon, Microsoft, Uber) do not care which web framework you know; they test your DSA to see how your brain solves hard problems under pressure.</li>
                    <li><strong>Growth Trends:</strong> As data sizes grow exponentially globally, the need for engineers who can write highly optimized, non-crashing code is higher than ever.</li>
                    <li><strong>Future Scope:</strong> Frameworks like React or Angular come and go every 5 years, but the algorithms behind them (DSA) have remained unchanged for 40 years and will remain the foundation of computing forever.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Efficient code saves companies millions of dollars in cloud computing costs (AWS/Azure). An engineer with strong DSA writes code that runs faster and cheaper.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>DSA is not a job title; it is the master key that unlocks the highest-paying engineering roles:</p>
                <ul>
                    <li><strong>Software Development Engineer (SDE-1/2/3):</strong> The core engineering role at product companies, requiring heavy algorithmic problem-solving.</li>
                    <li><strong>Backend Systems Engineer:</strong> Build the scalable server logic that handles millions of user requests simultaneously.</li>
                    <li><strong>Competitive Programmer / Researcher:</strong> Participate in global coding olympiads or work in R&amp;D optimizing core software engines.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> Once you crack the DSA interview at a top tech firm, you gain access to the best compensation, perks, and remote work conditions in the industry.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>DSA is the fastest route to a breathtaking salary in the Indian IT sector.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹8.0 Lakhs – ₹18.0 Lakhs per annum (Top product companies routinely offer ₹20L+ to freshers who clear DSA rounds).</li>
                    <li><strong>2–3 Years Experience (SDE-1/2):</strong> ₹15.0 Lakhs – ₹30.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior SDE):</strong> ₹35.0 Lakhs – ₹60.0 Lakhs+ per annum.</li>
                </ul>
                <p><em>(Note: These premium salaries are almost exclusively reserved for candidates who can pass whiteboard algorithmic interviews.)</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>If you want a high-paying product company job, this course is mandatory.</p>
                <ul>
                    <li><strong>Engineering Students (B.Tech / BCA / MCA):</strong> Start learning this in your 2nd or 3rd year. It is the only way to crack high-paying campus placements.</li>
                    <li><strong>Service-based IT Employees (TCS, Infosys, Wipro):</strong> If you want to switch from a service-based company to a high-paying product-based company (Amazon, Swiggy), you must master DSA.</li>
                    <li><strong>Self-Taught Web Developers:</strong> If you know React/Node but are failing technical interviews, DSA is the missing piece of your puzzle.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be writing the "brain" of the application.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write logic that processes massive datasets, optimizes database searches, and ensures the application doesn't slow down when user traffic spikes.</li>
                    <li><strong>Team Collaboration:</strong> You will participate in system design discussions, defending your choice of algorithms (e.g., "Why we should use a Hash Map instead of an Array here").</li>
                    <li><strong>Business Impact:</strong> Your optimized code prevents server crashes during high-traffic events like an Amazon Big Billion Days sale.</li>
                    <li><strong>Growth Path:</strong> Junior SDE ➔ Senior Software Engineer ➔ Staff Engineer ➔ Principal Architect.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We teach algorithms visually, not by making you memorize code blocks.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We start with Time Complexity (Big O Notation) and logically build up to the hardest Graph and Dynamic Programming questions.</li>
                    <li><strong>Pattern Recognition:</strong> We don't teach 500 random questions. We teach the underlying patterns (Sliding Window, Two Pointers) so you can solve ANY unseen question.</li>
                    <li><strong>Industry Mentorship:</strong> Learn the exact interview techniques and whiteboard communication skills used to pass FAANG interviews.</li>
                    <li><strong>Mock Interviews:</strong> Participate in timed, 1-on-1 mock technical interviews to eliminate stage fright before the real thing.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>DSA is an evergreen skill that never drops in value.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Having mastered the micro-level (Algorithms), you should learn the macro-level: Distributed System Design.</li>
                    <li><strong>Advanced Roles:</strong> Senior Systems Architect, working on the core infrastructure of global systems.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Should I learn DSA in C++, Java, or Python?</strong><br />All three are fine! C++ and Java are traditional favorites for performance, while Python is faster to type in an interview. Choose the one you are most comfortable with.</p>
                <p><strong>2. I am weak at Math. Can I learn DSA?</strong><br />Yes. DSA relies much more on logical pattern recognition than complex mathematics. Basic algebra is usually enough.</p>
                <p><strong>3. Do service-based companies test DSA?</strong><br />Yes, but usually at a very basic level (Arrays/Strings). Top product companies demand deep knowledge of Trees, Graphs, and DP.</p>
                <p><strong>4. How long does it take to master DSA?</strong><br />It requires consistent daily practice. A solid grasp takes about 3 to 5 months of dedicated problem-solving.</p>
                <p><strong>5. Will this help me build a website?</strong><br />No. DSA teaches you how to optimize logic, not how to build UI. It is tested in interviews to judge your raw intelligence and coding foundation.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Core Data Structures", [
                { title: "Fundamentals", points: ["Big-O notation & complexity analysis", "Arrays, strings & 2D arrays", "Linked lists: singly & doubly", "Stacks, queues & recursion"] },
                { title: "Practice", points: ["Solve 30+ beginner LeetCode problems", "Implement each structure from scratch"] },
            ], "Implement and reason about fundamental data structures.", "#a78bfa"),
            p2("Phase 2: Algorithm Design Patterns", [
                { title: "Core Algorithms", points: ["Merge Sort, Quick Sort, Heap Sort", "Binary search variants (rotated arrays, peaks)", "BFS, DFS, binary trees & BST operations", "Hash maps, two-pointer & sliding window patterns"] },
                { title: "Graph Algorithms", points: ["Graph BFS, DFS & cycle detection", "Dijkstra's shortest path", "70+ medium LeetCode problems solved"] },
            ], "Apply standard algorithm patterns to solve intermediate interview problems.", "#a78bfa"),
            p3("Phase 3: Advanced & Interview Mastery", [
                { title: "Advanced Topics", points: ["Dynamic programming: knapsack, LCS, DP on trees", "Bellman-Ford, Floyd-Warshall, Kruskal & Prim", "Tries, segment trees & Fenwick trees", "Backtracking: N-Queens, Sudoku, subsets"] },
                { title: "Interview Track", points: ["Mock interviews on LeetCode & HackerRank", "150+ solved problems with pattern recognition", "FAANG-level system design basics"] },
            ], "Crack coding interviews at top tech companies with advanced algorithm knowledge.", "#a78bfa"),
        ],
    },
    {
        courseId: "da-python",
        courseName: "DA Using Python",
        tagline: "Transform raw data into business insights using Python",
        category: "Software Development",
        accentColor: "#c084fc", accentColorDark: "#818cf8",
        heroBadges: ["📊 Pandas · NumPy · Power BI", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Data Analytics Using Python?</h3>
                <p>Data Analytics is the science of analyzing raw data to find trends, answer business questions, and help companies make profitable decisions. Rather than using basic spreadsheets, <strong>Data Analytics Using Python</strong> teaches you how to write code to process millions of rows of data instantly, find hidden patterns, and create stunning visual dashboards.</p>
                <p>In this course, you will learn how to extract messy data, clean it up with Python, ask it questions, and present the answers in highly visual reports.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to manipulate and clean giant datasets using Python libraries (Pandas and NumPy).</li>
                    <li>How to extract raw data from databases efficiently using SQL.</li>
                    <li>How to visualize data into charts and interactive graphs using Matplotlib and Seaborn.</li>
                    <li>How to pull all this together into professional business intelligence dashboards using Tableau or Power BI.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Programming:</strong> Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
                    <li><strong>Database:</strong> Advanced SQL Queries, Relational Schemas</li>
                    <li><strong>Visualization Tools:</strong> Tableau / Power BI</li>
                    <li><strong>Environment:</strong> Jupyter Notebooks, Google Colab</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Imagine Swiggy wants to know why orders drop by 20% on Tuesdays in Mumbai. A Data Analyst uses Python to pull historical weather data, traffic data, and restaurant data, cleans it, and identifies that delivery times are slower on Tuesdays. They then create a Tableau dashboard showing management exactly how to fix the problem.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Data is the new oil. Companies generate massive amounts of data daily, but without Analysts, that data is useless.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> From retail to banking, every modern company requires data analysts to understand their customers and reduce waste.</li>
                    <li><strong>Growth Trends:</strong> Python has officially replaced Excel as the industry standard for handling large-scale data analytics due to its speed and automation capabilities.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> As businesses become entirely digitized, the demand for individuals who can translate data into actionable business strategies will continue to skyrocket.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Analysts directly impact profit margins. If a Data Analyst finds an inefficiency costing the company ₹10 Lakhs a month, they have immediately paid for their own salary multiple times over.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>This skill set opens doors across the entire corporate and tech landscape:</p>
                <ul>
                    <li><strong>Data Analyst:</strong> Extract, clean, and visualize data to help management make strategic decisions.</li>
                    <li><strong>Business Analyst:</strong> Focus heavily on business metrics, KPIs, and reporting directly to stakeholders.</li>
                    <li><strong>Product Analyst:</strong> Work with software teams to analyze how users click and behave inside an app or website.</li>
                    <li><strong>SQL / BI Developer:</strong> Specialize in writing complex database queries and maintaining Tableau/PowerBI dashboards.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> Analytics roles are extremely remote-friendly and exist in virtually every sector: Finance, Healthcare, e-Commerce, and Tech.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Because they drive business strategy, skilled Python Analysts are highly valued.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹4.5 Lakhs – ₹7.5 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience:</strong> ₹8.0 Lakhs – ₹14.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Analyst / Analytics Manager):</strong> ₹16.0 Lakhs – ₹25.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> Strong. You can consult for small businesses, helping them analyze their sales data and setting up automated dashboards.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This is the perfect gateway into the tech industry for those who love logic but may not want to build software from scratch.</p>
                <ul>
                    <li><strong>Students (Engineering / BBA / B.Com / Statistics):</strong> An excellent entry point into the lucrative data industry without needing a heavy computer science background.</li>
                    <li><strong>Working Professionals (Excel Users):</strong> If you spend hours in Excel every day, learning Python will automate your job and double your salary.</li>
                    <li><strong>MBA Graduates:</strong> Combine your business knowledge with technical Python skills to become a highly lethal, data-driven Business Manager.</li>
                    <li><strong>Career Switchers:</strong> A smooth transition into tech for professionals from sales, marketing, or operations backgrounds.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the person management turns to for answers.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write SQL queries to pull data, use Python (Pandas) in Jupyter Notebooks to clean missing values, and update dashboards for the executive team.</li>
                    <li><strong>Team Collaboration:</strong> You will work closely with Data Engineers (who fetch you data) and Business Leaders (who need the data).</li>
                    <li><strong>Tools Used:</strong> Jupyter Notebooks, SQL IDEs (like DBeaver), and Tableau/Power BI.</li>
                    <li><strong>Business Impact:</strong> Your analysis prevents executives from making "guesses". You ensure every business decision is backed by hard mathematical facts.</li>
                    <li><strong>Growth Path:</strong> Junior Analyst ➔ Senior Data Analyst ➔ Analytics Manager ➔ Director of Data.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We teach you how to think like an analyst, not just how to type Python syntax.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We assume you have zero coding knowledge. We teach you Python syntax first, then transition into real-world data manipulation.</li>
                    <li><strong>Live Industry Projects:</strong> You will analyze real, messy datasets (like Netflix viewing histories or real estate pricing) and generate actual business reports.</li>
                    <li><strong>Industry Mentorship:</strong> Learn from Data Analysts who work in top product companies. Learn how to present data to non-technical managers effectively.</li>
                    <li><strong>Portfolio Building:</strong> You will graduate with a live portfolio of Jupyter Notebooks and interactive Tableau dashboards to show recruiters.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We train you heavily on SQL interviews and "guesstimate" case studies, which are crucial for cracking analyst roles.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Data Analytics is the stepping stone to the highest-paying roles in AI and ML.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Once you master Analytics, you are 50% of the way to becoming a Data Scientist. The next step is learning Machine Learning algorithms (Predictive modeling).</li>
                    <li><strong>Advanced Roles:</strong> Transition into Data Science, Machine Learning Engineering, or Data Engineering.</li>
                    <li><strong>Certifications:</strong> Pursue Microsoft Certified Data Analyst or Tableau Desktop Specialist certifications.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need heavy math skills for this?</strong><br />No! Basic statistics (mean, median, percentages) is enough. Python libraries do all the heavy mathematical lifting for you.</p>
                <p><strong>2. Is Data Analytics different from Data Science?</strong><br />Yes. Data Analysts look at the *past* to see what happened (using SQL/Tableau). Data Scientists look at the *future* and build AI models to predict what will happen next (using Machine Learning).</p>
                <p><strong>3. Can commerce/arts students do this?</strong><br />Absolutely. In fact, people with business/commerce backgrounds often make excellent analysts because they understand company finances deeply.</p>
                <p><strong>4. Why Python instead of just Excel?</strong><br />Excel freezes when handling millions of rows. Python can process massive datasets in seconds and automate repetitive daily reporting tasks.</p>
                <p><strong>5. Will there be projects I can put on my resume?</strong><br />Yes. You will complete multiple end-to-end data pipelines, from raw extraction to final dashboard presentation.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Python for Data Analysis", [
                { title: "Python & Libraries", points: ["Python fundamentals & Jupyter Notebooks", "NumPy arrays & matrix operations", "Pandas: DataFrames, groupby, merge & pivot tables"] },
                { title: "Visualisation", points: ["Matplotlib & Seaborn charts", "Plotly interactive dashboards", "Descriptive statistics: mean, median, std, correlation"] },
            ], "Load, clean and visualise datasets using Python.", "#c084fc"),
            p2("Phase 2: EDA & Reporting", [
                { title: "Exploratory Data Analysis", points: ["Handling missing values & outliers", "Feature engineering & data transformation", "Correlation analysis & hypothesis testing"] },
                { title: "BI Integration", points: ["Connect Python with Power BI & Tableau", "Excel integration with openpyxl & xlrd", "Build automated reporting scripts"] },
            ], "Conduct thorough EDA and produce business-ready reports.", "#c084fc"),
            p3("Phase 3: Advanced Analytics", [
                { title: "Forecasting & ML Basics", points: ["Time-series analysis with Prophet & statsmodels", "Linear regression & decision tree for predictions", "Clustering for customer segmentation"] },
                { title: "Capstone", points: ["End-to-end business analytics project", "Storytelling with data presentations", "Dashboard deployment with Streamlit"] },
            ], "Deliver production data analytics solutions with forecasting and dashboards.", "#c084fc"),
        ],
    },
    {
        courseId: "data-science-python",
        courseName: "Data Science Using Python",
        tagline: "From Python fundamentals to production-ready AI models",
        category: "Data Science & Analytics",
        accentColor: "#c084fc", accentColorDark: "#7c3aed",
        heroBadges: ["🔬 Python · Scikit-learn · TensorFlow", "⏱ 6 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Data Science Using Python?</h3>
                <p>Data Science is the advanced field of using computer algorithms to predict the future. While Data Analytics looks at what happened in the past, <strong>Data Science</strong> uses Machine Learning and statistical models to predict what will happen next. It is the intelligence behind Artificial Intelligence.</p>
                <p>In this course, you will learn how to feed vast amounts of data into Python algorithms, allowing the computer to "learn" from the data and make astonishingly accurate predictions without being explicitly programmed.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to analyze and clean massive datasets using advanced Python (Pandas/NumPy).</li>
                    <li>How to build and train Machine Learning models (Regression, Classification, Clustering) using Scikit-Learn.</li>
                    <li>How to evaluate the accuracy of your AI models and fine-tune their parameters.</li>
                    <li>How to deploy these predictive models into the real world so applications can use them.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Programming:</strong> Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
                    <li><strong>Algorithms:</strong> Scikit-Learn (Machine Learning), XG-Boost</li>
                    <li><strong>Statistics:</strong> Probability, Hypothesis Testing, Advanced Math intuition</li>
                    <li><strong>Environment:</strong> Jupyter, Google Colab, Git, deployment tools</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> How does Netflix know exactly which movie you want to watch next? Their Data Scientists wrote Machine Learning models in Python that analyzed the viewing habits of millions of users. The algorithm "learned" your preferences and now predicts your future choices with terrifying accuracy.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Data Science is consistently ranked as the "Sexiest Job of the 21st Century". It is the driving force behind the global Artificial Intelligence boom.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Every tech giant (Google, Amazon, Meta) and major financial institution relies on Data Scientists to build recommendation engines, detect fraud, and automate decision-making.</li>
                    <li><strong>Growth Trends:</strong> Predictive analytics and AI integration are growing exponentially. Companies that do not adopt Machine Learning will simply be outcompeted.</li>
                    <li><strong>Future Scope (Next 5–10 years):</strong> Data Science is transitioning into deep AI and Gen-AI. A strong foundation in classical Machine Learning (which this course provides) is mandatory to survive the AI revolution.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> A Data Scientist can build an algorithm that automatically detects fraudulent credit card transactions in milliseconds, saving banks billions of dollars globally.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>Data Science is highly prestigious and offers roles at the cutting edge of technology:</p>
                <ul>
                    <li><strong>Data Scientist:</strong> Build, train, and test complex Machine Learning models to solve core business problems.</li>
                    <li><strong>Machine Learning Engineer:</strong> Focus heavily on the engineering side—deploying the Data Scientist's models into live production servers so apps can use them.</li>
                    <li><strong>Data Engineer:</strong> Specialise in maintaining the immense data pipelines and databases that feed the Machine Learning models.</li>
                    <li><strong>AI Researcher (Entry Level):</strong> Work on developing or fine-tuning new predictive algorithms in R&amp;D departments.</li>
                </ul>
                <p><strong>Work Flexibility:</strong> These roles are heavily remote, incredibly intellectual, and highly respected across all major tech hubs worldwide.</p>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Because of the heavy blend of mathematics, logic, and coding, Data Scientists are among the highest-paid professionals in IT.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹6.0 Lakhs – ₹12.0 Lakhs per annum (Premium startups offer significantly higher).</li>
                    <li><strong>2–3 Years Experience:</strong> ₹12.0 Lakhs – ₹22.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Data Scientist):</strong> ₹25.0 Lakhs – ₹50.0 Lakhs+ per annum.</li>
                    <li><strong>Freelancing Potential:</strong> High. Many businesses pay heavily for predictive analytics consulting, such as predicting customer churn or inventory demand.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is rigorous and intensely logical. It is ideal for those who love combining coding with analytical thinking.</p>
                <ul>
                    <li><strong>Students (B.Tech / MCA / Statistics / Mathematics):</strong> The perfect path to enter the AI domain with a massive starting salary advantage.</li>
                    <li><strong>Software Engineers:</strong> Java or Web developers looking to pivot out of standard web development and into the prestigious, high-paying AI sector.</li>
                    <li><strong>Data Analysts:</strong> Professionals who already know SQL/Tableau and want to upgrade from "reporting" the past to "predicting" the future using ML.</li>
                    <li><strong>Researchers &amp; Academics:</strong> Professionals who need to apply programmatic statistical rigor to complex real-world data.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the architect of automated intelligence.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will spend 60% of your time cleaning and understanding massive datasets (Data Wrangling), and 40% of your time training and tweaking Machine Learning algorithms in Jupyter Notebooks.</li>
                    <li><strong>Team Collaboration:</strong> You will work intimately with Data Engineers (who fetch you data) and Product Managers (who tell you what business problem needs predicting).</li>
                    <li><strong>Tools Used:</strong> Python, Scikit-Learn, TensorFlow/Keras basics, Jupyter, and Cloud platforms (AWS/GCP) for running heavy computations.</li>
                    <li><strong>Business Impact:</strong> Your algorithms dictate the core user experience (like TikTok's feed or Amazon's suggested products).</li>
                    <li><strong>Growth Path:</strong> Junior Data Scientist ➔ Senior Data Scientist ➔ Lead AI Engineer ➔ Chief Data Officer.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We bridge the gap between heavy academic math and practical, write-it-in-code engineering.</p>
                <ul>
                    <li><strong>Practical Over Theory:</strong> We don't just teach the terrifying math equations. We show you the intuition behind the math, and exactly how to implement the algorithm using Python libraries.</li>
                    <li><strong>Live Industry Projects:</strong> You will build real recommendation engines, predict house prices based on historical data, and build churn-prediction models for telecom companies.</li>
                    <li><strong>Industry Mentorship:</strong> Learn from practicing Data Scientists who teach you how the models behave in reality, not just in sterile academic datasets.</li>
                    <li><strong>Portfolio Building:</strong> Crucial for Data Science. You will graduate with a GitHub portfolio containing fully documented ML pipelines.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We prepare you for the unique DS interview format, which covers coding, probability, and ML theory.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Classical Machine Learning is the gateway to the most advanced technologies humans have ever created.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Having mastered classical ML, you smoothly transition into Deep Learning (Neural Networks), Natural Language Processing (NLP), and Generative AI.</li>
                    <li><strong>Advanced Roles:</strong> Deep Learning Researcher, Computer Vision Engineer, NLP Specialist.</li>
                    <li><strong>Certifications:</strong> Pursue AWS Certified Machine Learning Specialty to prove you can deploy models at enterprise scale.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be a math genius?</strong><br />No, but you must be comfortable with high-school level probability, statistics, and basic calculus. We teach the required math intuition before every algorithm.</p>
                <p><strong>2. How is this different from Data Analytics?</strong><br />Analytics looks backward (e.g., "Sales dropped 10% yesterday"). Science looks forward (e.g., "The algorithm predicts sales will drop 10% tomorrow, here is why.")</p>
                <p><strong>3. Should I learn Python or R for Data Science?</strong><br />Python is the undisputed industry standard for Machine Learning and production deployment. R is mainly used in pure academic research.</p>
                <p><strong>4. Can I learn this without prior coding experience?</strong><br />It is possible, as we teach Python from scratch, but it is intense. A strong logical aptitude is mandatory.</p>
                <p><strong>5. Will I build ChatGPT in this course?</strong><br />No. ChatGPT uses Generative AI and massive Deep Learning models. This course teaches the fundamental Machine Learning core that you MUST master before attempting advanced Gen-AI.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Python & Data Foundations", [
                { title: "Python & Libraries", points: ["Python 3.x, Pandas, NumPy & Matplotlib", "Data wrangling: cleaning, filtering & reshaping", "Descriptive statistics & probability basics"] },
                { title: "EDA & Visualisation", points: ["Exploratory Data Analysis workflows", "Seaborn, Plotly charts & heatmaps", "Feature engineering: encoding & scaling"] },
            ], "Load, explore and visualise real datasets with Python.", "#c084fc"),
            p2("Phase 2: Machine Learning", [
                { title: "Supervised ML", points: ["Linear & logistic regression", "Decision Trees, Random Forest, SVM & XGBoost", "Cross-validation, GridSearchCV & hyperparameter tuning", "Evaluate with F1, ROC-AUC, confusion matrix"] },
                { title: "Unsupervised & Projects", points: ["K-Means clustering & PCA dimensionality reduction", "Work on: Titanic, House Prices, Customer Churn datasets"] },
            ], "Build and evaluate ML models on real-world datasets.", "#c084fc"),
            p3("Phase 3: Deep Learning & Deployment", [
                { title: "Deep Learning & NLP", points: ["Neural networks with TensorFlow/Keras", "CNNs for image classification", "NLP: TF-IDF, word embeddings & BERT basics", "Time-series forecasting: ARIMA & LSTM"] },
                { title: "MLOps & Capstone", points: ["Deploy models via Flask/FastAPI APIs", "Streamlit interactive dashboards", "MLflow experiment tracking", "Capstone: end-to-end ML pipeline project"] },
            ], "Build, deploy and monitor ML models in production.", "#c084fc"),
        ],
    },
    {
        courseId: "data-science-r",
        courseName: "Data Science Using R",
        tagline: "Statistical data science and modelling with R",
        category: "Data Science & Analytics",
        accentColor: "#34d399", accentColorDark: "#059669",
        heroBadges: ["📉 R · ggplot2 · tidyverse", "⏱ 6 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Data Science Using R?</h3>
                <p>Data Science Using R focuses heavily on the statistical inference and rigorous data visualization aspect of Data Science. While Python is great for deploying models into web apps, <strong>R was built by statisticians, for statisticians</strong>. It possesses the most powerful built-in statistical packages and the most breathtaking data visualization libraries in the world.</p>
                <p>In this course, you will learn how to write R scripts to manipulate complex datasets, perform deep statistical tests, and generate pristine, publication-ready visual reports.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>The core syntax of the R programming language and the RStudio environment.</li>
                    <li>How to manipulate and clean datasets effortlessly using the legendary 'dplyr' and 'tidyverse' packages.</li>
                    <li>How to create stunning, highly customizable charts and graphs using 'ggplot2'.</li>
                    <li>How to apply statistical Machine Learning algorithms directly within R.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Programming:</strong> R language</li>
                    <li><strong>Environment:</strong> RStudio</li>
                    <li><strong>Core Packages:</strong> Tidyverse, Dplyr, Ggplot2, Caret</li>
                    <li><strong>Math:</strong> Deep Statistical formatting and Hypothesis Testing</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Pharmaceutical companies use R to analyze the clinical trial data of new vaccines. The deep statistical rigor required to prove a vaccine is 95% effective to the government is heavily supported by the advanced mathematical packages native to R.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>While Python dominates general software, R completely dominates academic research, biotechnology, finance, and specialized statistical sectors.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Biotech, Quantitative Finance (Hedge Funds), and Healthcare organizations aggressively hire R programmers for their unparalleled statistical precision.</li>
                    <li><strong>Growth Trends:</strong> As data science matures, there is a growing niche for purely analytical, research-heavy roles where R's visual styling outshines Python.</li>
                    <li><strong>Future Scope:</strong> Specialized research fields rely on R. If a highly specific, cutting-edge statistical method is invented, it is almost always released as an R package first.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Companies hire R specialists when they need deep, mathematically rigorous analysis rather than just a predictive model plugged into a website.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>R opens doors primarily in research, academia, and highly specialized corporate divisions:</p>
                <ul>
                    <li><strong>Data Scientist (Analytics focus):</strong> Analyze complex business data and create highly detailed visual reports for stakeholders.</li>
                    <li><strong>Quantitative Analyst (Quant):</strong> Work in finance or hedge funds, using R's time-series packages to predict stock market trends.</li>
                    <li><strong>Biostatistician / Healthcare Analyst:</strong> Analyze medical data, patient histories, and clinical trials using rigorous academic standards.</li>
                    <li><strong>Data Visualization Specialist:</strong> Focus purely on using `ggplot2` to tell compelling, beautiful stories through complex data charts.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Because R roles often require deep domain knowledge (like finance or biotech), the salaries are excellent.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹5.0 Lakhs – ₹9.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience:</strong> ₹10.0 Lakhs – ₹16.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Analyst/Quant):</strong> ₹20.0 Lakhs – ₹35.0 Lakhs+ per annum.</li>
                </ul>
                <p><em>(Note: Roles combining R with Finance or Healthcare domain knowledge command massive premiums).</em></p>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is designed for individuals who love pure statistics and data visualization over general software engineering.</p>
                <ul>
                    <li><strong>Math &amp; Statistics Graduates:</strong> R is the natural programmatic extension of your degree.</li>
                    <li><strong>Researchers &amp; Academics:</strong> PhD students, economists, and bio-medical researchers who need to publish data visually and rigorously.</li>
                    <li><strong>Finance Professionals:</strong> Analysts looking to transition into Quantitative Finance and algorithmic trading models.</li>
                    <li><strong>Data Analysts:</strong> Python/SQL analysts wanting to expand their toolkit with the ultimate data visualization language.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the research and visualization expert.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will write R scripts to clean incoming survey or financial data, run A/B tests to check statistical significance, and generate PDF/HTML reports bursting with beautiful `ggplot2` graphs.</li>
                    <li><strong>Team Collaboration:</strong> You will work intimately with business leaders, economists, or medical researchers to translate their questions into statistical code.</li>
                    <li><strong>Tools Used:</strong> RStudio, Shiny (for interactive R web apps), and heavy use of the Tidyverse packages.</li>
                    <li><strong>Business Impact:</strong> Your airtight statistical proofs ensure the company does not make multi-million dollar decisions based on "fluke" data.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We teach R practically, focusing on modern packages (Tidyverse) rather than outdated base R.</p>
                <ul>
                    <li><strong>Step-by-Step Learning:</strong> We start with the RStudio interface and gently introduce data frames and basic plotting.</li>
                    <li><strong>Live Industry Projects:</strong> You will analyze massive public datasets (like Census data or global financial indicators) and generate professional exploratory data analysis (EDA) reports.</li>
                    <li><strong>Focus on Visualization:</strong> We heavily emphasize `ggplot2`, teaching you how to make charts that look like they belong in the New York Times.</li>
                    <li><strong>Resume &amp; Interview Support:</strong> We prepare you for analytical interviews, focusing on your ability to explain statistics simply to non-technical interviewers.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Mastering R solidifies your identity as a pure analytical thinker.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> You can explore 'Shiny' to build interactive web applications directly in R, or begin learning Python to complete your dual-language Data Science toolkit.</li>
                    <li><strong>Advanced Roles:</strong> Principal Researcher, Lead Quantitative Analyst, Chief Economist.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Should I learn R or Python first?</strong><br />If you want to build AI that gets deployed into websites, learn Python. If you want to dive deep into statistical research, finance, or create the most beautiful data visualizations possible, learn R.</p>
                <p><strong>2. Is R hard to learn?</strong><br />R has a slightly steeper learning curve than Python initially because its syntax is built by statisticians, but packages like 'dplyr' have made it incredibly intuitive in recent years.</p>
                <p><strong>3. Can I do Machine Learning in R?</strong><br />Yes, R has excellent packages (like 'caret' and 'randomForest') for predictive Machine Learning, though Python remains more popular for Deep Learning (AI).</p>
                <p><strong>4. Is R used in regular software companies?</strong><br />Yes, companies like Twitter, Google, and Airbnb use R heavily in their internal research and data-analysis departments to understand user behavior metrics.</p>
                <p><strong>5. Will I need to know advanced Math?</strong><br />Having a foundational understanding of statistics (mean, variance, normal distributions, p-values) is highly recommended to get the most out of R.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: R Foundations", [
                { title: "R Language Basics", points: ["R syntax, vectors, lists & data frames", "RStudio IDE & R Markdown reports", "Data import: CSV, Excel, databases"] },
                { title: "Data Wrangling", points: ["tidyverse: dplyr, tidyr, readr, stringr", "ggplot2 visualisations: bar, scatter, boxplot", "Descriptive statistics & distributions"] },
            ], "Load, clean and visualise data using R and tidyverse.", "#34d399"),
            p2("Phase 2: Statistical Modelling", [
                { title: "ML with R", points: ["caret & tidymodels for ML workflows", "Linear regression, logistic regression & GLMs", "Random Forest with randomForest package", "Model evaluation & cross-validation"] },
                { title: "Advanced Statistics", points: ["Hypothesis testing, ANOVA & chi-square", "Time-series with forecast & prophet packages", "Cluster analysis & PCA"] },
            ], "Apply statistical models to real datasets using R's ML ecosystem.", "#34d399"),
            p3("Phase 3: Advanced R & Production", [
                { title: "Reporting & Shiny", points: ["Build interactive web apps with Shiny", "Automated reports with R Markdown & knitr", "Parameterised reporting for business teams"] },
                { title: "Capstone & Careers", points: ["End-to-end R data science project", "Publish to shinyapps.io or Posit Connect", "Statistical consulting case studies", "R interview preparation"] },
            ], "Deliver statistical analysis, modelling and interactive dashboards in R.", "#34d399"),
        ],
    },
    {
        courseId: "data-science-genai",
        courseName: "Data Science with Gen AI",
        tagline: "Combine classical data science with cutting-edge generative AI",
        category: "Data Science & Analytics",
        accentColor: "#a5c8ff", accentColorDark: "#7eb3f7",
        heroBadges: ["🤖 LLMs · LangChain · RAG", "⏱ 12 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Data Science with Generative AI?</h3>
                <p>This is the cutting edge of modern technology. While traditional Data Science predicts numbers (like house prices), <strong>Generative AI (Gen-AI)</strong> uses massive neural networks to create completely new content—like writing text, generating images, and writing code (like ChatGPT or Midjourney).</p>
                <p>In this advanced course, you will learn how to transition from traditional Machine Learning into the world of Large Language Models (LLMs). You will learn how to leverage, fine-tune, and build applications powered by state-of-the-art AI brains.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>The architecture behind Deep Learning, Neural Networks, and Transformers.</li>
                    <li>How to interact programmatically with OpenAI APIs and open-source models (Llama, Falcon).</li>
                    <li>How to build custom "AI Agents" using frameworks like LangChain and LlamaIndex.</li>
                    <li>How to securely feed your company's private data to an LLM so it can answer questions about it (RAG - Retrieval-Augmented Generation).</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Programming:</strong> Advanced Python</li>
                    <li><strong>AI Frameworks:</strong> LangChain, HuggingFace, PyTorch/TensorFlow basics</li>
                    <li><strong>Databases:</strong> Vector Databases (Pinecone, ChromaDB)</li>
                    <li><strong>APIs:</strong> OpenAI, Claude, Gemini</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A hospital has 100,000 PDF documents of research. Using Gen-AI and LangChain, you build a custom chatbot. A doctor queries, "Summarize all 2023 treatments for asthma," and the AI instantly reads all the private PDFs and generates a perfect summary answer. You will learn to build exactly this!</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Generative AI is the biggest technological shift since the invention of the internet. It is completely redefining how businesses operate.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Every company on earth is furiously trying to integrate AI into their products to automate customer support, content creation, and software development. The demand for engineers who know HOW to do this is stratospheric.</li>
                    <li><strong>Growth Trends:</strong> We are in the "AI Gold Rush." Investment in Gen-AI startups and enterprise integration is in the hundreds of billions of dollars.</li>
                    <li><strong>Future Scope:</strong> Software engineering is evolving. Gen-AI engineers will be the ones directing and managing fleets of AI agents to write code and perform analysis autonomously.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Integrating AI directly multiplies productivity. An AI engineer who builds an internal chatbot can save a company thousands of hours of manual labor every single week.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>This skill immediately vaults you into the elite top 1% of the modern tech talent pool:</p>
                <ul>
                    <li><strong>AI Engineer / Prompt Engineer:</strong> Design complex prompts, implement RAG systems, and build AI-wrappers for enterprise clients.</li>
                    <li><strong>Machine Learning Engineer (NLP Focus):</strong> Fine-tune open-source generic models to understand highly specific medical, legal, or financial jargon.</li>
                    <li><strong>AI Product Developer:</strong> Build and launch your own AI-powered SaaS startups to the public.</li>
                    <li><strong>Implementation Consultant:</strong> Consult for non-tech businesses, helping them inject AI into their outdated workflows.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Because there is a massive shortage of developers who actually understand Gen-AI architecture, the salaries are currently inflated to unprecedented levels.</p>
                <ul>
                    <li><strong>Fresher/Junior AI Engineer:</strong> ₹8.0 Lakhs – ₹15.0 Lakhs per annum (Extremely portfolio dependent).</li>
                    <li><strong>2–3 Years Experience (AI Integration):</strong> ₹15.0 Lakhs – ₹30.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior AI Lead):</strong> ₹40.0 Lakhs – ₹80.0 Lakhs+ per annum (Remote US roles offer significantly more).</li>
                    <li><strong>Freelancing Potential:</strong> Limitless. Small businesses will gladly pay $5,000+ for a custom AI chatbot trained on their customer service logs.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This is an advanced course. You must have a strong foundation in Python and basic Data Science intuition.</p>
                <ul>
                    <li><strong>Software Developers:</strong> Web developers and Backend engineers who want to pivot into AI application building (building AI SaaS tools).</li>
                    <li><strong>Data Scientists:</strong> Professionals looking to upgrade their skills from classical ML (predicting numbers) to modern Gen-AI (generating content).</li>
                    <li><strong>Tech Startup Founders:</strong> Entrepreneurs looking to understand the mechanics of LLMs to launch the next big AI product.</li>
                </ul>
                <p><em>(Note: We do not recommend this to complete beginners who have never written a line of Python before.)</em></p>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the wizard introducing intelligence into standard software.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will construct LangChain pipelines, experiment with different foundational models to compare cost-vs-accuracy, format Vector Databases, and rigorously test the AI for "hallucinations".</li>
                    <li><strong>Team Collaboration:</strong> You will work with Backend devs to deploy your models, and with executives to identify which internal processes can be completely automated by AI.</li>
                    <li><strong>Tools Used:</strong> LangChain, HuggingFace repositories, Pinecone (Vector DB), Jupyter Notebooks, and cloud deployment stacks.</li>
                    <li><strong>Business Impact:</strong> Transformative. You change the fundamental way the business operates, accelerating output by magnitudes.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>The AI space changes every week. We teach you the enduring architectural concepts, not just how to copy-paste APIs.</p>
                <ul>
                    <li><strong>Cutting-Edge Curriculum:</strong> We teach RAG (Retrieval-Augmented Generation) and Vector Databases—the exact techniques startups are using right now.</li>
                    <li><strong>Live Industry Projects:</strong> You will build custom chatbots that can "read" multiple PDF books and answer questions, automated code reviewers, and AI agents that browse the web to summarize news.</li>
                    <li><strong>Industry Mentorship:</strong> Learn from engineers actively building AI products. Learn how to manage the costs and API limits of using heavy models.</li>
                    <li><strong>Portfolio Building:</strong> You will graduate with highly advanced AI web applications running live on your GitHub.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>Generative AI is just getting started based on current trajectories.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Autonomous AI Agents (agents that can control the computer and make decisions continuously), Multi-modal AI (video/audio generation), and Deep Reinforcement Learning.</li>
                    <li><strong>Advanced Roles:</strong> Head of AI Strategy, Principal AI Architect.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be a Data Scientist to learn this?</strong><br />You do not need to be a math expert, but you MUST be highly proficient in Python programming. Building AI applications is often more about software engineering than pure math.</p>
                <p><strong>2. Will AI take my job?</strong><br />AI will not replace engineers. Engineers who use AI will replace engineers who do not. This course ensures you are the one controlling the AI.</p>
                <p><strong>3. Are we building ChatGPT from scratch?</strong><br />No, training a model like ChatGPT from scratch costs millions of dollars in hardware. We teach you how to take these existing models and build custom, powerful applications on top of them (which is what 99% of AI companies actually do).</p>
                <p><strong>4. What is a Vector Database?</strong><br />Standard databases store text and numbers. Vector databases store the "mathematical meaning" of text, allowing AI to search millions of documents for concepts, not just exact keywords.</p>
                <p><strong>5. Will I need a powerful computer to do this course?</strong><br />No! We will teach you how to run heavy AI models in the cloud using Google Colab and external APIs, so a standard laptop is perfectly fine.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Data & AI Foundations", [
                { title: "Python & Data Skills", points: ["Pandas, NumPy, Matplotlib & Seaborn", "Statistical inference & probability", "EDA, cleaning & feature engineering"] },
                { title: "Gen AI Fundamentals", points: ["Prompt engineering with OpenAI GPT APIs", "Transformer architecture overview", "Hugging Face model hub exploration"] },
            ], "Perform data analysis and interact with LLMs via Python.", "#a5c8ff"),
            p2("Phase 2: ML + LLM Integration", [
                { title: "Classical ML + LLMs", points: ["Build ML models & compare with LLM solutions", "LangChain for RAG (Retrieval Augmented Generation)", "Vector databases: Pinecone & FAISS for semantic search"] },
                { title: "Fine-tuning & Evaluation", points: ["Fine-tune open-source LLMs with Hugging Face", "Multi-modal data pipelines", "Evaluate outputs with BLEU, ROUGE metrics"] },
            ], "Build AI-powered data pipelines combining ML and LLMs.", "#a5c8ff"),
            p3("Phase 3: Production Gen AI Systems", [
                { title: "Deployment & Ops", points: ["Multi-agent systems with LangGraph & AutoGen", "Deploy LLM APIs on AWS SageMaker / Vertex AI", "Monitor model drift with Prometheus & Grafana"] },
                { title: "Responsible AI & Capstone", points: ["Bias detection & safety guardrails", "Build AI analytics dashboard or intelligent chatbot", "Gen AI engineering interview preparation"] },
            ], "Design, deploy and monitor production-grade Gen AI applications.", "#a5c8ff"),
        ],
    },
    {
        courseId: "ai-python-r",
        courseName: "AI Using Python / R",
        tagline: "Build intelligent systems using Python and R",
        category: "Data Science & Analytics",
        accentColor: "#c084fc", accentColorDark: "#a78bfa",
        heroBadges: ["🧠 AI · Python · R", "⏱ 8 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is AI Using Python / R?</h3>
                <p>Artificial Intelligence (AI) is the science of making machines think and act like humans. This comprehensive course covers both Python and R, giving you the ultimate dual-powered toolkit for building intelligent systems. While Python builds scalable AI applications, R provides unmatched statistical precision and visualization.</p>
                <p>In this course, you will learn how to design, train, and deploy algorithms that can see, read, and make decisions just like a human brain.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to build core Machine Learning models using both Python (Scikit-Learn) and R (Caret).</li>
                    <li>How to create Deep Learning neural networks that power image and speech recognition.</li>
                    <li>How to perform Natural Language Processing (NLP) so computers can understand human text.</li>
                    <li>How to deploy these AI models into production so real users can interact with them.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Languages:</strong> Python, R</li>
                    <li><strong>Machine Learning:</strong> Scikit-Learn (Python), Caret &amp; Tidymodels (R)</li>
                    <li><strong>Deep Learning:</strong> TensorFlow, Keras, PyTorch</li>
                    <li><strong>NLP &amp; Vision:</strong> NLTK, OpenCV, Hugging Face</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> When a bank determines whether to approve your loan in 5 seconds, it is an AI model analyzing your credit history. You will learn to build exactly these types of models using both Python and R.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Artificial Intelligence is no longer a futuristic concept; it is the core infrastructure of the modern digital economy.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> From autonomous driving to medical diagnostics, every sector is aggressively hiring engineers who can build and deploy AI systems.</li>
                    <li><strong>Dual Language Advantage:</strong> Knowing both Python and R makes you a highly versatile engineer, capable of handling both heavy statistical research and scalable software deployment.</li>
                    <li><strong>Future Scope:</strong> AI is the fastest-growing sector in tech. Automating complex processes and building intelligent agents is the future of software engineering.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> AI engineers build systems that can process data and make decisions a million times faster than a human, drastically reducing operational costs.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>Mastering AI with both Python and R opens the door to elite technical roles:</p>
                <ul>
                    <li><strong>AI Engineer:</strong> Design and build intelligent systems, deploy them to the cloud, and optimize their performance.</li>
                    <li><strong>Machine Learning Engineer:</strong> Focus on training algorithms and improving their predictive accuracy over time.</li>
                    <li><strong>Data Scientist:</strong> Utilize R for deep statistical analysis and Python for machine learning implementation.</li>
                    <li><strong>Computer Vision / NLP Specialist:</strong> Work on specific AI applications like facial recognition or chatbots.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>AI professionals command some of the highest salaries in the tech industry due to the complexity and impact of their work.</p>
                <ul>
                    <li><strong>Fresher/Junior AI Engineer:</strong> ₹7.0 Lakhs – ₹14.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience:</strong> ₹15.0 Lakhs – ₹25.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior Architect):</strong> ₹30.0 Lakhs – ₹60.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This is a rigorous course ideal for those looking to conquer the AI domain from the ground up.</p>
                <ul>
                    <li><strong>Software Developers:</strong> Programmers looking to transition from traditional software development into the lucrative AI space.</li>
                    <li><strong>Data Analysts:</strong> Professionals who want to upgrade from descriptive analytics to predictive and prescriptive AI systems.</li>
                    <li><strong>Graduates (B.Tech / Math / Analytics):</strong> Students aiming to start their career directly in high-tier AI product companies or research labs.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the architect behind the "smart" features of the company's products.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will gather data, write Python/R scripts to train models, evaluate their accuracy, and optimize neural networks.</li>
                    <li><strong>Business Impact:</strong> Your algorithms will drive core business metrics, from automating customer support with NLP to optimizing supply chains with predictive models.</li>
                    <li><strong>Growth Path:</strong> Junior AI Engineer ➔ Senior Machine Learning Engineer ➔ Principal AI Architect ➔ Head of AI.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We provide a dual-language curriculum that gives you the best of both worlds.</p>
                <ul>
                    <li><strong>Comprehensive Curriculum:</strong> You don't have to choose between Python and R; you learn to leverage the strengths of both.</li>
                    <li><strong>Live Industry Projects:</strong> Build real-world applications like fraud detection systems, sentiment analysis bots, and image classifiers.</li>
                    <li><strong>Focus on Deployment:</strong> We teach you not just how to build models on your laptop, but how to deploy them securely to the cloud (MLOps).</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>An AI engineer's skill set is highly adaptable and constantly evolving.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Dive deeper into specific sub-fields like Deep Reinforcement Learning, Generative AI, or Robotics.</li>
                    <li><strong>Advanced Roles:</strong> Director of AI Research, Chief Data Scientist.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to learn both Python and R?</strong><br />Knowing both gives you a significant advantage. R is often superior for initial statistical exploration, while Python is unmatched for deploying models into production.</p>
                <p><strong>2. Is there a lot of advanced math?</strong><br />A solid understanding of statistics, probability, and linear algebra is necessary, but we teach the intuition behind the math as we code.</p>
                <p><strong>3. Can I take this without prior coding experience?</strong><br />It is highly recommended to have basic programming knowledge, although the course covers Python and R from the ground up before diving into AI.</p>
                <p><strong>4. How long does the training take?</strong><br />Covering two languages and deep AI concepts requires dedication. Expect about 8 months of thorough training.</p>
                <p><strong>5. Will I get to build AI applications I can show employers?</strong><br />Yes, a major part of the course focuses on building a professional portfolio of running AI models.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: AI Foundations", [
                { title: "AI Concepts & Setup", points: ["AI history, types & real-world applications", "Search algorithms: BFS, DFS, A*", "Rule-based & knowledge-based systems", "Bayes theorem & naive Bayes classifier"] },
                { title: "Python & R for AI", points: ["Python + R environment with ML libraries", "Data visualisation with ggplot2 & Seaborn"] },
            ], "Understand AI fundamentals and implement basic AI algorithms.", "#c084fc"),
            p2("Phase 2: Machine Learning", [
                { title: "Supervised & Unsupervised", points: ["Regression, SVM, Decision Trees & ensemble methods", "K-Means, DBSCAN & hierarchical clustering", "Neural networks with Keras & TensorFlow", "R caret, tidymodels & randomForest"] },
                { title: "NLP & Vision", points: ["Image classification with CNNs", "Text: bag-of-words, TF-IDF & sentiment analysis", "Model evaluation: ROC, AUC, cross-validation"] },
            ], "Implement ML and basic deep learning models using both Python and R.", "#c084fc"),
            p3("Phase 3: Advanced AI & Deployment", [
                { title: "Deep Learning & RL", points: ["ResNet, VGG, YOLO for object detection", "Reinforcement learning: Q-Learning & OpenAI Gym", "LLM integration with Hugging Face & LangChain"] },
                { title: "Production & Careers", points: ["Deploy as REST APIs with Flask/FastAPI", "Model compression: quantisation & pruning", "Recommendation systems with collaborative filtering", "AI engineering interview track"] },
            ], "Deploy intelligent AI systems powered by Python and R.", "#c084fc"),
        ],
    },
    {
        courseId: "ml-deep-learning",
        courseName: "Machine Learning & Deep Learning",
        tagline: "From ML algorithms to state-of-the-art deep learning systems",
        category: "Data Science & Analytics",
        accentColor: "#38bdf8", accentColorDark: "#0284c7",
        heroBadges: ["🔬 PyTorch · TensorFlow · Scikit-learn", "⏱ 6 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Machine Learning &amp; Deep Learning?</h3>
                <p>Machine Learning (ML) is algorithms that learn from data to make predictions. Deep Learning (DL) is a highly advanced subset of ML that uses dense Neural Networks inspired by the human brain to solve the most complex problems in computing, such as recognizing faces or translating languages.</p>
                <p>In this specialized course, you will master the mathematics and programming required to build advanced ML pipelines and deep neural networks from scratch using enterprise-grade frameworks.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to build classical ML algorithms (Regression, Random Forests, XGBoost).</li>
                    <li>How to design Deep Neural Networks using Keras, TensorFlow, and PyTorch.</li>
                    <li>How to train Convolutional Neural Networks (CNNs) for image and object detection.</li>
                    <li>How to apply Sequence Models (RNNs, LSTMs) and Transformers for text analysis and NLP.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Frameworks:</strong> TensorFlow, PyTorch, Keras, Scikit-Learn</li>
                    <li><strong>Cloud &amp; MLOps:</strong> AWS SageMaker, MLflow, Docker</li>
                    <li><strong>Core Concepts:</strong> Neural Networks, Backpropagation, Transfer Learning, CNNs, RNNs</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> When a Tesla car drives itself, it uses Convolutional Neural Networks (Deep Learning) to process camera feeds in real time, detecting pedestrians, stop signs, and lane markings instantly. You will learn the exact same neural network architecture.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Deep Learning has triggered the current AI revolution. Standard programming rules cannot solve tasks like image recognition—you need Neural Networks.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Companies developing self-driving cars, facial recognition software, voice assistants, and medical imaging AI strictly hire Deep Learning specialists.</li>
                    <li><strong>Growth Trends:</strong> PyTorch and TensorFlow skills are among the fastest-growing technical requirements in job postings globally.</li>
                    <li><strong>Future Scope:</strong> Deep learning is the foundation of Generative AI, Robotics, and advanced automation. Mastering it guarantees a future-proof career.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> Deep Learning models can detect cancer in X-rays or predict stock market crashes with accuracy that fundamentally outperforms human capabilities.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>This is a hard-tech specialization that qualifies you for elite engineering roles:</p>
                <ul>
                    <li><strong>Deep Learning/AI Engineer:</strong> Design and train massive neural networks for vision, speech, or robotics.</li>
                    <li><strong>Computer Vision Engineer:</strong> Specialise entirely in building models that analyze and interpret visual data (images/video).</li>
                    <li><strong>NLP Engineer:</strong> Focus on processing human language, building advanced chatbots, and text-summarization models.</li>
                    <li><strong>MLOps Engineer:</strong> Handle the infrastructure and deployment side, managing how these heavy models run stably in production.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Deep Learning requires heavy mathematical and programming skills, commanding a massive salary premium.</p>
                <ul>
                    <li><strong>Fresher/Junior DL Engineer:</strong> ₹8.0 Lakhs – ₹16.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience:</strong> ₹18.0 Lakhs – ₹32.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior DL Architect):</strong> ₹35.0 Lakhs – ₹70.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is designed for individuals who are serious about building the algorithms that power modern AI.</p>
                <ul>
                    <li><strong>Software Engineers &amp; Data Scientists:</strong> Looking to upgrade their toolkit from classical ML into advanced neural networks.</li>
                    <li><strong>STEM Graduates (Computer Science, Math, Physics):</strong> The deep quantitative nature of the course aligns perfectly with STEM backgrounds.</li>
                    <li><strong>Research Enthusiasts:</strong> Anyone aiming for R&amp;D roles in AI divisions of top tech companies.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the scientist and engineer building predictive architectures.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will construct neural network architectures, train models on GPUs, perform hyperparameter tuning to reduce error loss, and monitor the models in production (MLOps).</li>
                    <li><strong>Team Collaboration:</strong> You will work closely with Data Engineers who supply massive datasets, and DevOps engineers who configure the cloud servers.</li>
                    <li><strong>Business Impact:</strong> Your Deep Learning models build the core capabilities of AI products, defining their accuracy and market success.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We teach deep learning with hands-on PyTorch and TensorFlow, not just mathematical theory.</p>
                <ul>
                    <li><strong>State-of-the-Art Frameworks:</strong> We focus on PyTorch and TensorFlow, the undisputed industry standards for Deep Learning.</li>
                    <li><strong>Live Industry Projects:</strong> Build real CNNs for medical image detection, RNNs for stock sentiment analysis, and use Transfer Learning from massive pre-trained models.</li>
                    <li><strong>Production Focus:</strong> We don't stop at Jupyter Notebooks. We teach you how to deploy your models using Docker and AWS so they can handle real-world traffic.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>This is the gateway to the most advanced AI roles on the planet.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Specialize deeply in Generative AI (LLMs, Diffusion Models) or Deep Reinforcement Learning (teaching AI to play games or control robots).</li>
                    <li><strong>Advanced Roles:</strong> Head of Deep Learning Research, Principal AI Scientist.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need a powerful computer with a GPU?</strong><br />You don't need an expensive computer. We will teach you how to train your models in the cloud using Google Colab's free GPUs.</p>
                <p><strong>2. Is PyTorch better than TensorFlow?</strong><br />Both are excellent. TensorFlow is historically favored for enterprise deployment, while PyTorch is highly favored for research and modern development. We cover both.</p>
                <p><strong>3. Do I need to know Python before starting?</strong><br />Yes, highly proficient Python skills are a strict prerequisite for tackling Deep Learning frameworks.</p>
                <p><strong>4. How is this different from Data Science?</strong><br />Data Science is broader, covering data cleaning, analytics, and classical ML. This course focuses specifically on advanced Machine Learning and complex Neural Networks.</p>
                <p><strong>5. Will I build ChatGPT?</strong><br />ChatGPT is built on a specific Deep Learning architecture called Transformers. While we cover the fundamentals of these models, training an actual ChatGPT requires millions of dollars in hardware.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: ML Fundamentals", [
                { title: "Classical ML", points: ["ML pipeline: data → model → evaluate → deploy", "Linear & logistic regression from scratch", "Decision Trees, Random Forest, XGBoost & Gradient Boosting"] },
                { title: "Evaluation & Feature Engineering", points: ["Precision, recall, F1, confusion matrix & ROC-AUC", "Feature encoding, scaling & missing value handling", "Cross-validation & hyperparameter tuning"] },
            ], "Build and evaluate classical ML models on real datasets.", "#38bdf8"),
            p2("Phase 2: Deep Learning", [
                { title: "Neural Networks & CNNs", points: ["Build feedforward NNs with Keras & TensorFlow", "CNNs for image classification: MNIST & CIFAR-10", "Transfer learning: ResNet, VGG & EfficientNet"] },
                { title: "Sequential & NLP Models", points: ["RNNs, LSTMs & GRUs for time-series data", "BERT for text classification & NER", "PyTorch for custom model training"] },
            ], "Design and train deep learning models for vision and NLP tasks.", "#38bdf8"),
            p3("Phase 3: Advanced DL & Production", [
                { title: "SOTA Architectures", points: ["Object detection: YOLO & Faster R-CNN", "Generative models: GANs, VAEs & diffusion models", "Transformers: BERT, GPT & T5 fine-tuning"] },
                { title: "MLOps & Deployment", points: ["Deploy on TensorFlow Serving & AWS SageMaker", "Model optimisation: quantisation, ONNX & TensorRT", "MLflow tracking & Airflow pipeline automation"] },
            ], "Deploy and optimise production ML/DL systems at scale.", "#38bdf8"),
        ],
    },
    {
        courseId: "business-analyst",
        courseName: "Business Analyst",
        tagline: "Bridge the gap between business needs and technical solutions",
        category: "Data Science & Analytics",
        accentColor: "#6ee7b7", accentColorDark: "#34d399",
        heroBadges: ["📋 BA · Requirements · Agile", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is a Business Analyst (BA)?</h3>
                <p>A Business Analyst is the critical bridge between a company's business problems and the technical solutions built by software developers. They do not write code to build software; instead, they analyze business needs, talk to stakeholders, write detailed requirements, and project manage the development team to ensure the right product gets built.</p>
                <p>In this course, you will learn the core skills of Business Analysis: requirements gathering, gap analysis, Agile project management, and basic data analysis to drive business strategy.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to elicit, document, and manage business requirements (BRDs, FRDs, User Stories).</li>
                    <li>How to use Agile and Scrum methodologies to manage software development lifecycles.</li>
                    <li>How to map and optimize business processes using UML and flowcharts.</li>
                    <li>How to analyze data using Excel and SQL to support business decisions.</li>
                </ul>
                <br />
                <strong>Technologies &amp; Tools Involved:</strong>
                <ul>
                    <li><strong>Project Management:</strong> Jira, Confluence, Trello</li>
                    <li><strong>Process Modeling:</strong> MS Visio, Lucidchart, Draw.io</li>
                    <li><strong>Data &amp; Reporting:</strong> Advanced Excel, basic SQL, Power BI (Basics)</li>
                    <li><strong>Frameworks:</strong> Agile, Scrum, Kanban, Waterfall</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Imagine a bank wants to build a new mobile app for loans. The Business Analyst meets the bank managers to understand the rules of the loan, writes down exactly how the app should work (the requirements), and then explains these instructions to the coding team. Without the BA, the coders might build the wrong app!</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <p>Software development is expensive. Building the wrong software because of miscommunication wastes millions of dollars.</p>
                <ul>
                    <li><strong>Industry Demand:</strong> Every banking, healthcare, retail, and IT company needs BAs to translate their business goals into clear technical tasks.</li>
                    <li><strong>Growth Trends:</strong> As Agile methodology dominates the IT industry, the demand for Agile Business Analysts and Scrum Masters is at an all-time high.</li>
                    <li><strong>Future Scope:</strong> The rise of AI and automation means companies desperately need BAs to analyze their workflows and figure out where technology can be implemented to save time.</li>
                    <li><strong>Why Companies Hire For This Role:</strong> A skilled BA ensures projects are delivered on time, within budget, and exactly according to the client's needs, directly mitigating catastrophic project failures.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <p>The Business Analyst role is one of the most stable and respected non-coding roles in the IT industry:</p>
                <ul>
                    <li><strong>IT Business Analyst:</strong> Work with software teams to gather requirements and manage product delivery.</li>
                    <li><strong>Scrum Master / Agile Coach:</strong> Facilitate Agile ceremonies (stand-ups, sprint planning) and ensure the development team works smoothly.</li>
                    <li><strong>Product Owner:</strong> Represent the customer's interests, prioritize the product backlog, and decide what features to build next.</li>
                    <li><strong>Process Analyst:</strong> Analyze existing business workflows and eliminate inefficiencies.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <p>Business Analysts enjoy excellent compensation as they sit close to business strategy and revenue.</p>
                <ul>
                    <li><strong>Fresher Salary Range:</strong> ₹4.5 Lakhs – ₹7.5 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Business Analyst):</strong> ₹8.0 Lakhs – ₹14.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior BA / Product Owner):</strong> ₹15.0 Lakhs – ₹25.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>This course is the perfect gateway into the IT industry for professionals with excellent communication, who do not want to become hardcore programmers.</p>
                <ul>
                    <li><strong>Non-IT Professionals (Sales, Marketing, Ops):</strong> Leverage your business domain knowledge to pivot into a high-paying IT role.</li>
                    <li><strong>MBA / BBA / B.Com Graduates:</strong> Combine your business education with IT project management skills to become an unstoppable Product Owner.</li>
                    <li><strong>Manual Testers / Support Staff:</strong> Upgrade your career trajectory by moving from finding defects to designing the software processes upfront.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>6️⃣ What Will Be Your Role in a Company?</h3>
                <p>You will be the communicator, the organizer, and the problem-solver.</p>
                <ul>
                    <li><strong>Day-to-day Responsibilities:</strong> You will run meetings with clients to gather requirements, write User Stories in Jira, analyze spreadsheets of business data, and clarify doubts for the engineering team.</li>
                    <li><strong>Team Collaboration:</strong> You are the link. You talk to executives (who speak business) and engineers (who speak code), translating between the two.</li>
                    <li><strong>Business Impact:</strong> Your clarity and documentation ensure the final software actually solves the company's problem and brings in revenue.</li>
                    <li><strong>Growth Path:</strong> Junior BA ➔ Senior Business Analyst ➔ Product Owner ➔ Group Product Manager.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>7️⃣ Why Learn This Course From Us?</h3>
                <p>We teach practical project management, not just textbook theory.</p>
                <ul>
                    <li><strong>Real-World Simulation:</strong> You won't just learn what Jira is; you will use Jira to manage a simulated 4-week Agile software project from scratch.</li>
                    <li><strong>Documentation Mastery:</strong> We provide industry-standard templates for BRDs, FRDs, and UML diagrams, teaching you exactly how to fill them out professionally.</li>
                    <li><strong>Data Skills Included:</strong> Modern BAs need to understand data. We teach you essential SQL and Excel skills so you can query databases to support your requirements.</li>
                    <li><strong>Interview Preparation:</strong> The BA interview is heavily behavioral and situational. We rigorously train you on how to answer case studies and stakeholder management scenarios.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>8️⃣ Future Growth &amp; Career Roadmap</h3>
                <p>A Business Analyst has a clear path upward into executive product management.</p>
                <ul>
                    <li><strong>What to learn after this:</strong> Evolve into a Product Manager by focusing deeply on customer psychology, UX design, and market strategy.</li>
                    <li><strong>Advanced Roles:</strong> Senior Product Manager, Director of Product, Chief Operating Officer (COO).</li>
                    <li><strong>Certifications:</strong> Achieve ECBA, CCBA, or the elite CBAP certification from the IIBA to boost global credibility.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>9️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to know how to code to be a Business Analyst?</strong><br />No! BAs do not write software code. You need strong communication, logical thinking, and organizing skills, along with a basic understanding of how technology works.</p>
                <p><strong>2. Can I get a BA job if I have an MBA in Finance or HR?</strong><br />Yes, absolutely. Domain knowledge (like Finance or HR) is highly valued because it means you understand the business context better than a pure IT person.</p>
                <p><strong>3. What is the difference between a BA and a Data Analyst?</strong><br />A Data Analyst focuses almost entirely on extracting, cleaning, and visualizing data using code (Python/SQL). A BA focuses on gathering software requirements, talking to stakeholders, and managing project execution.</p>
                <p><strong>4. Will I use Jira in this role?</strong><br />Yes, Jira is the industry standard for Agile project management. You will learn to create User Stories, Epics, and manage sprint boards.</p>
                <p><strong>5. Is this a good career for extroverts?</strong><br />Yes! Because you spend a large portion of your day running meetings, negotiating requirements, and presenting findings, strong interpersonal skills are a massive advantage.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: BA Fundamentals", [
                { title: "Business Analysis Core", points: ["BA roles, responsibilities & stakeholder management", "Requirements elicitation: interviews, workshops & surveys", "Business Process Mapping: BPMN & flowcharts", "SWOT analysis & gap analysis"] },
                { title: "Documentation", points: ["Writing BRD, FRD & use case documents", "User stories & acceptance criteria in Agile"] },
            ], "Document business requirements and model processes professionally.", "#6ee7b7"),
            p2("Phase 2: Data & Tools", [
                { title: "Data Analysis", points: ["Excel: pivot tables, VLOOKUP, charts & dashboards", "SQL queries for business reporting", "Power BI / Tableau dashboards for KPI tracking"] },
                { title: "Agile & Project Tools", points: ["Scrum & Agile methodology for BAs", "Jira for backlog management & sprint planning", "Wireframing with Balsamiq or Figma"] },
            ], "Analyse data and produce dashboards while working in Agile teams.", "#6ee7b7"),
            p3("Phase 3: Advanced BA & Career", [
                { title: "Advanced Skills", points: ["Process improvement with Lean & Six Sigma basics", "Change management & stakeholder communication", "Risk analysis & mitigation planning"] },
                { title: "Certification & Portfolio", points: ["Preparation for ECBA / CCBA certification", "End-to-end BA project for portfolio", "Mock BA interviews & case studies"] },
            ], "Lead business analysis projects and prepare for industry certifications.", "#6ee7b7"),
        ],
    },
    {
        courseId: "power-bi",
        courseName: "Power BI",
        tagline: "Transform raw data into interactive enterprise dashboards",
        category: "Data Science & Analytics",
        accentColor: "#93c5fd", accentColorDark: "#60a5fa",
        heroBadges: ["📊 Power BI · DAX · Power Query", "⏱ 2 Months", "💻 Online"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Power BI?</h3>
                <p>Microsoft Power BI is the world's leading Business Intelligence (BI) tool. It is used to connect to hundreds of data sources (like Excel, SQL databases, or cloud services), clean the messy data, and turn it into brilliant, interactive visual dashboards that explain exactly what is happening in a business.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to extract and clean data using Power Query without writing complex code.</li>
                    <li>How to connect different data tables together (Data Modeling).</li>
                    <li>How to write DAX (Data Analysis Expressions) formulas to calculate profits, growth, and trends.</li>
                    <li>How to design interactive charts and publish them securely for executives to view.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A retail chain has sales data sitting in 50 different Excel files. You use Power BI to automatically pull all that data together, calculate the top-selling items using DAX, and build a map showing which cities have the highest sales—all updated in real time.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Industry Demand:</strong> Microsoft owns the corporate ecosystem. Because most companies already use Office 365, they naturally choose Power BI, creating a massive demand for developers who can use it.</li>
                    <li><strong>No Coding Required:</strong> Power BI allows you to perform advanced data analytics mostly through a drag-and-drop interface and basic formulas, making it highly accessible without learning Python or Java.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Power BI Developer / BI Analyst:</strong> Build and maintain enterprise reports full-time.</li>
                    <li><strong>Data Analyst:</strong> Use Power BI as your primary visualization tool alongside Excel or SQL.</li>
                    <li><strong>Financial Analyst:</strong> Upgrade from static Excel sheets to highly dynamic financial dashboards.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior BI Analyst:</strong> ₹4.0 Lakhs – ₹7.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Power BI Dev):</strong> ₹8.0 Lakhs – ₹14.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Senior BI Architect):</strong> ₹16.0 Lakhs – ₹25.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Ideal for Excel users, non-IT professionals, and aspiring Data Analysts who want a fast, high-paying entry into the data industry without learning hardcore programming languages.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to know coding?</strong><br />No. Power BI mostly uses a visual interface and a formula language called DAX, which is similar to advanced Excel formulas.</p>
                <p><strong>2. Is Power BI better than Excel?</strong><br />Yes, for big data. Excel freezes with a million rows; Power BI can handle tens of millions of rows smoothly and create much better visual dashboards.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Power BI Foundations", [
                { title: "Core Concepts", points: ["Power BI Desktop: Report, Data & Model views", "Connect to Excel, CSV, SQL Server & SharePoint", "Power Query: clean, filter & reshape data"] },
                { title: "Basic Reporting", points: ["Bar charts, pie charts, cards & slicers", "Star-schema data model: facts & dimensions", "Basic DAX: SUM, AVERAGE, COUNT & CALCULATE"] },
            ], "Build basic reports and data models in Power BI.", "#93c5fd"),
            p2("Phase 2: Advanced Analytics", [
                { title: "Advanced DAX & Modelling", points: ["Time intelligence: YTD, QTD, MTD functions", "DISTINCTCOUNT, FILTER & RANKX measures", "Role-playing dimensions & calculated tables"] },
                { title: "Interactive Dashboards", points: ["Drill-through pages, bookmarks & tooltips", "Row-level security (RLS) for multi-role access", "DirectQuery mode for real-time data"] },
            ], "Create interactive KPI dashboards with advanced DAX calculations.", "#93c5fd"),
            p3("Phase 3: Enterprise BI & Certification", [
                { title: "Power Platform Integration", points: ["Deploy to Power BI Service & scheduled refresh", "Embed reports in web apps via Power BI API", "Power Automate alerts & workflow integrations"] },
                { title: "Performance & PL-300 Prep", points: ["Query folding, aggregations & composite models", "Azure Synapse & Data Factory integration", "PL-300 Power BI Data Analyst exam preparation"] },
            ], "Deploy enterprise BI solutions and achieve PL-300 certification.", "#93c5fd"),
        ],
    },
    {
        courseId: "tableau",
        courseName: "Tableau",
        tagline: "Master data visualisation and visual analytics with Tableau",
        category: "Data Science & Analytics",
        accentColor: "#fb923c", accentColorDark: "#ea580c",
        heroBadges: ["📶 Tableau Desktop & Server", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Tableau?</h3>
                <p>Tableau is a gold-standard data visualization software used by top-tier enterprises to transform raw, ugly data into stunning visual masterpieces. While Power BI is heavily integrated into Microsoft, Tableau is famous for its breathtaking visual capabilities and ability to handle massive datasets seamlessly.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to connect Tableau to databases and cloud data warehouses.</li>
                    <li>How to create complex visualizations (Heat maps, Scatter plots, Geographic maps) with simple drag-and-drop actions.</li>
                    <li>How to write Level of Detail (LOD) calculations for deep analytics.</li>
                    <li>How to build interactive dashboards ("Stories") that executives can click through.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> An airline uses Tableau to plot every single flight on a visual map of the world. If a flight is delayed, the line turns red. Executives can click on the red line to instantly see the weather data causing the delay.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Industry Demand:</strong> High-end tech companies, marketing agencies, and large consultancies prefer Tableau for its advanced visual customization.</li>
                    <li><strong>Storytelling:</strong> Tableau focuses heavily on "Data Storytelling"—the art of presenting data so beautifully that non-technical managers understand it instantly.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Tableau Developer:</strong> Specialize entirely in designing and maintaining enterprise-grade visual dashboards.</li>
                    <li><strong>Data Visualization Specialist:</strong> A highly creative analytical role focused purely on the aesthetic and logical presentation of data.</li>
                    <li><strong>Senior Data Analyst:</strong> Use Tableau to present findings from complex SQL databases.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior Analyst:</strong> ₹4.5 Lakhs – ₹8.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Tableau Dev):</strong> ₹9.0 Lakhs – ₹16.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience:</strong> ₹17.0 Lakhs – ₹28.0 Lakhs per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Perfect for analysts, marketers, and researchers who want to specialize in high-end data visualization and presentation, especially those targeting modern tech and consulting firms.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Power BI or Tableau? Which should I learn?</strong><br />Both are excellent. Power BI is cheaper and dominates standard corporate environments. Tableau is older, extremely powerful, and often used by larger enterprises for complex visualization.</p>
                <p><strong>2. Do I need to be good at math?</strong><br />No. Tableau does the math for you. You need a good eye for design and logical grouping of information.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Tableau Fundamentals", [
                { title: "Getting Started", points: ["Tableau Desktop interface & data connectors", "Connect to Excel, CSV, SQL & Google Sheets", "Dimensions vs measures & data type management"] },
                { title: "Core Charts", points: ["Bar, line, scatter, pie & map charts", "Filters, quick filters & parameter controls", "Calculated fields & basic aggregations"] },
            ], "Build fundamental Tableau charts and connect to data sources.", "#fb923c"),
            p2("Phase 2: Advanced Dashboards", [
                { title: "Dashboard Design", points: ["Dashboard layout: floating & tiled objects", "Interactive actions: filter, highlight & URL actions", "LOD expressions: FIXED, INCLUDE & EXCLUDE"] },
                { title: "Analytics & Sets", points: ["Trend lines, forecasting & reference lines", "Sets & combined sets for cohort analysis", "Table calculations: running total, % of total", "Blending multiple data sources"] },
            ], "Design executive dashboards with advanced analytics capabilities.", "#fb923c"),
            p3("Phase 3: Tableau Server & Certification", [
                { title: "Publish to Tableau Public & Tableau Server", points: ["Publish to Tableau Public & Tableau Server", "Tableau Prep Builder for ETL workflows", "Row-level security & site permissions"] },
                { title: "Certification Prep", points: ["Tableau Desktop Specialist exam preparation", "Storytelling with Tableau Stories feature", "Capstone: business intelligence dashboard portfolio"] },
            ], "Publish enterprise Tableau solutions and achieve Tableau certification.", "#fb923c"),
        ],
    },
    {
        courseId: "excel",
        courseName: "Excel – Basic to Advance",
        tagline: "Master Microsoft Excel from spreadsheets to advanced analytics",
        category: "Data Science & Analytics",
        accentColor: "#4ade80", accentColorDark: "#16a34a",
        heroBadges: ["📗 Microsoft Excel", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Excel - Basic to Advance?</h3>
                <p>Microsoft Excel is the world's most widely used software for managing, calculating, and analyzing data. While most people know how to make basic tables, this course takes you from a complete beginner to a "Power User" who can automate tasks and analyze massive datasets effortlessly.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to organize and format data so it looks clean and professional.</li>
                    <li>How to master over 50+ critical formulas (VLOOKUP, INDEX-MATCH, IF statements).</li>
                    <li>How to summarize thousands of rows of data instantly using PivotTables.</li>
                    <li>How to create stunning charts and dynamic executive dashboards.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> An HR department has a messy list of 5,000 employees with mixed-up names and salaries. Using advanced Excel text formulas and PivotTables, you clean the names and instantly generate a report showing exactly which departments spend the most on salaries.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Universal Requirement:</strong> Excel is not a nice-to-have skill; it is a mandatory requirement for almost every corporate job on the planet, from Marketing to Finance to HR.</li>
                    <li><strong>Foundation for Analytics:</strong> You cannot learn advanced data science or Python easily if you do not understand the fundamental data structures taught in Excel.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>MIS Executive:</strong> Manage internal reports and track daily business metrics using Excel.</li>
                    <li><strong>Data Entry Specialist / Operations Analyst:</strong> Ensure data integrity and generate fast ad-hoc reports for management.</li>
                    <li><strong>Financial/Sales Analyst:</strong> Track budgets and forecast sales quotas using advanced formulas.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/MIS Executive:</strong> ₹2.5 Lakhs – ₹4.5 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Senior Analyst):</strong> ₹5.0 Lakhs – ₹9.0 Lakhs per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Absolutely everyone. Whether you are a college student, an accountant, an HR professional, or a budding Data Scientist—Excel is the fundamental language of business data.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. I already know some Excel. Should I take this?</strong><br />If you only know how to sum cells and color borders, you are a beginner. This course teaches advanced logic, PivotTables, and Dashboarding.</p>
                <p><strong>2. Does this course cover Macros?</strong><br />We touch on the basics of recording Macros, but heavy VBA programming is reserved for our Advanced Excel/VBA specific tracks.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Excel Foundations", [
                { title: "Core Excel", points: ["Workbooks, worksheets, rows, columns & formatting", "Formulas: SUM, AVERAGE, COUNT, IF, VLOOKUP", "Sorting, filtering & conditional formatting"] },
                { title: "Charts & Data Entry", points: ["Bar, column, line & pie charts", "Data validation & drop-down lists", "Tables & named ranges for organised data"] },
            ], "Use Excel confidently for everyday data entry and reporting.", "#4ade80"),
            p2("Phase 2: Intermediate Excel", [
                { title: "Advanced Functions", points: ["XLOOKUP, INDEX-MATCH & nested IFs", "SUMIF, COUNTIF & array formulas", "Text functions: LEFT, RIGHT, MID, TRIM, CONCATENATE"] },
                { title: "PivotTables & Analysis", points: ["PivotTables & PivotCharts for data summarisation", "What-if analysis: Goal Seek, Scenario Manager", "Excel tables with structured references"] },
            ], "Perform data analysis and build reports using advanced Excel functions.", "#4ade80"),
            p3("Phase 3: Advanced Excel & Automation", [
                { title: "Power Features", points: ["Power Query for ETL data transformation", "Power Pivot & DAX for data modelling", "Dynamic array formulas: FILTER, SORT, UNIQUE, SEQUENCE"] },
                { title: "VBA & Dashboards", points: ["VBA macros for task automation", "Build interactive executive dashboards", "Excel integration with Power BI"] },
            ], "Automate workflows and deliver advanced Excel dashboards.", "#4ade80"),
        ],
    },
    {
        courseId: "sql",
        courseName: "SQL Database",
        tagline: "Master SQL query writing and relational database management",
        category: "Data Science & Analytics",
        accentColor: "#60a5fa", accentColorDark: "#3b82f6",
        heroBadges: ["🗄 SQL · MySQL · PostgreSQL", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is SQL Database?</h3>
                <p>SQL (Structured Query Language) is the programming language used to communicate with databases. When data is too large for Excel (millions of rows), it is stored in Relational Databases. SQL is how you ask the database questions to get the data you need.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to write structured queries to extract specific data from massive tables.</li>
                    <li>How to link different data tables together using JOINs.</li>
                    <li>How to design a structured relational database from scratch (Normalization).</li>
                    <li>How to group, filter, and aggregate data to find business patterns.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Amazon has millions of users and millions of products. If a manager wants to know "How many users from Mumbai bought laptops yesterday?", you write a customized SQL query that searches the database and returns the exact number in seconds.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>The Backbone of Tech:</strong> Every website, app, and enterprise software relies on a backend SQL database to store user information securely.</li>
                    <li><strong>Gateway to Data Roles:</strong> You cannot become a Data Analyst, Data Engineer, or Backend Web Developer without being highly proficient in SQL.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Database Administrator (DBA):</strong> Ensure large enterprise databases are secure, backed up, and running fast.</li>
                    <li><strong>Data Analyst / BI Developer:</strong> Write complex SQL queries to extract data before visualizing it in tools like Power BI.</li>
                    <li><strong>Backend Developer:</strong> Connect web applications securely to their underlying databases.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher Database Developer:</strong> ₹4.0 Lakhs – ₹7.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (DBA / Data Engineer):</strong> ₹8.0 Lakhs – ₹15.0 Lakhs per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Aspiring backend developers, future data scientists/analysts, and professionals moving out of Excel-heavy roles who need to learn how to handle enterprise-level big data.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Which SQL dialect do you teach?</strong><br />We focus heavily on MySQL and PostgreSQL, which are the most popular open-source databases. The core SQL language is 95% identical across all platforms (Oracle, SQL Server).</p>
                <p><strong>2. Is SQL hard to learn?</strong><br />No! SQL is very close to plain English. Unlike Python or Java, you do not write complex logic loops; you simply "declare" what data you want.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: SQL Fundamentals", [
                { title: "Core SQL", points: ["SELECT, WHERE, ORDER BY, GROUP BY & HAVING", "INSERT, UPDATE, DELETE operations", "Data types, NULL handling & constraints"] },
                { title: "Database Design", points: ["Relational database concepts & normalisation (1NF–3NF)", "ER diagram design & schema creation", "Primary & foreign key relationships"] },
            ], "Write SQL queries and design normalised relational databases.", "#60a5fa"),
            p2("Phase 2: Advanced Queries", [
                { title: "Joins & Subqueries", points: ["INNER, LEFT, RIGHT & FULL OUTER JOINs", "Correlated & nested subqueries", "CTEs (Common Table Expressions) & recursive queries"] },
                { title: "Functions & Views", points: ["Aggregate, string, date & window functions", "Stored procedures, functions & triggers", "Views & materialised views"] },
            ], "Write complex queries with joins, subqueries and window functions.", "#60a5fa"),
            p3("Phase 3: Performance & Administration", [
                { title: "Optimisation", points: ["EXPLAIN query execution plans", "Indexing strategies: B-tree, hash & composite indexes", "Query optimisation & denormalisation trade-offs"] },
                { title: "Administration & Projects", points: ["Transactions, ACID properties & locking", "User roles, permissions & database security", "Capstone: build and query a full database project"] },
            ], "Optimise SQL queries and manage production-grade relational databases.", "#60a5fa"),
        ],
    },
    {
        courseId: "ccna",
        courseName: "CCNA",
        tagline: "Become a Cisco Certified Network Associate",
        category: "Networking & Infrastructure",
        accentColor: "#38bdf8", accentColorDark: "#0ea5e9",
        heroBadges: ["🌐 Cisco · CCNA 200-301", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is CCNA?</h3>
                <p>CCNA (Cisco Certified Network Associate) is the world's most famous entry-level networking certification. It proves you understand how the internet works, how computers talk to each other, and how to configure the routers and switches that connect office buildings to the global web.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How data travels across cables, Wi-Fi, and fiber optics (OSI Model).</li>
                    <li>How to assign and manage IP addresses (IPv4 &amp; IPv6 Subnetting).</li>
                    <li>How to configure real Cisco enterprise routers and switches via the command line.</li>
                    <li>How to secure networks from basic hackers using firewalls and port security.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A company opens a new branch office with 100 computers. As a CCNA engineer, you configure the Cisco routers to ensure those 100 computers can securely share files, connect to the main headquarters, and access the internet without overlapping IP addresses.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Global Industry Standard:</strong> Cisco manufactures the majority of enterprise networking equipment globally. A CCNA certificate is the universal passport to a career in IT hardware and infrastructure.</li>
                    <li><strong>Foundation for Cloud &amp; Security:</strong> You cannot secure a network (Cybersecurity) or build cloud servers (AWS/DevOps) if you do not understand the CCNA foundations of how IP tracking and routing protocols work.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Network Engineer:</strong> Design, set up, and maintain the physical and wireless networks for companies.</li>
                    <li><strong>IT Support / Network Administrator:</strong> Troubleshoot internet outages, configure office Wi-Fi, and manage secure VPNs for remote workers.</li>
                    <li><strong>NOC Technician (Network Operations Center):</strong> Monitor enterprise networks 24/7 to catch and fix failing routers before the company loses internet.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher Network Engineer:</strong> ₹3.0 Lakhs – ₹5.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (L2 Network Admin):</strong> ₹6.0 Lakhs – ₹10.0 Lakhs per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Anyone who wants to work in IT but hates programming! If you prefer hardware, cables, blinking lights, and making computers connect to each other rather than writing software code, this is your perfect starting point.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be good at Math or Coding?</strong><br />No programming is required. You only need basic arithmetic for IP subnetting, which we teach from scratch.</p>
                <p><strong>2. Does this course guarantee the official Cisco Certificate?</strong><br />This course prepares you perfectly to pass the official Cisco 200-301 CCNA exam. The official exam must be booked and given separately through a Cisco testing center.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Networking Fundamentals", [
                { title: "Core Concepts", points: ["OSI & TCP/IP model layers", "Routers, switches, hubs & firewalls", "IP addressing, subnetting (CIDR, VLSM)", "Wireshark packet analysis & Cisco Packet Tracer setup"] },
                { title: "LAN Basics", points: ["MAC addressing & ARP", "Ethernet standards & cable types", "Basic Cisco IOS CLI navigation"] },
            ], "Understand networking fundamentals and subnet IP addresses confidently.", "#38bdf8"),
            p2("Phase 2: Routing, Switching & Protocols", [
                { title: "Switching", points: ["VLANs, inter-VLAN routing & 802.1Q trunking", "STP, RSTP & EtherChannel", "Port security & DHCP snooping"] },
                { title: "Routing", points: ["Static routing & dynamic protocols: OSPF, EIGRP, RIPv2", "DHCP, DNS & NAT/PAT configuration", "ACLs for traffic filtering & HSRP for redundancy"] },
            ], "Configure and manage Cisco routers and switches in live labs.", "#38bdf8"),
            p3("Phase 3: Security, Automation & Exam", [
                { title: "Security & Wireless", points: ["Site-to-site & remote VPNs (IPSec & SSL)", "WPA3 wireless & WLAN controller config", "AAA: RADIUS & TACACS+"] },
                { title: "Automation & Exam Prep", points: ["Network automation with Python Netmiko & Ansible", "SD-WAN & intent-based networking concepts", "Full CCNA 200-301 practice exam simulations"] },
            ], "Pass the CCNA 200-301 exam and automate network management tasks.", "#38bdf8"),
        ],
    },
    {
        courseId: "ccnp",
        courseName: "CCNP",
        tagline: "Advance to Cisco Certified Network Professional level",
        category: "Networking & Infrastructure",
        accentColor: "#60a5fa", accentColorDark: "#3b82f6",
        heroBadges: ["🔗 Cisco · CCNP Enterprise", "⏱ 4 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is CCNP?</h3>
                <p>CCNP (Cisco Certified Network Professional) is the advanced, professional-tier networking certification. If CCNA teaches you how to connect a single office building, CCNP teaches you how to connect 100 office buildings across three different continents using advanced routing and security protocols.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>Deep dive into advanced routing protocols (OSPF, EIGRP, BGP) used by ISPs and massive enterprises.</li>
                    <li>How to design and implement secure VPNs connecting remote branches over the public internet.</li>
                    <li>How to deploy SD-WAN (Software-Defined Wide Area Network) to control thousands of routers from a single cloud dashboard.</li>
                    <li>Advanced network automation using Python to configure equipment instantly.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A multinational bank needs its London headquarters to securely process transactions with its Tokyo branch in under 50 milliseconds without dropping any packets. As a CCNP engineer, you configure BGP routing and QoS (Quality of Service) to guarantee this connection never fails.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Enterprise Scaling:</strong> As companies grow globally, they cannot rely on basic networks. They need highly redundant, automated networks that can route traffic intelligently around outages.</li>
                    <li><strong>The Shift to Automation:</strong> The industry is moving from typing commands into single routers to writing Python scripts that update thousands of routers simultaneously (Network Programmability). CCNP covers this extensively.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Senior Network Engineer:</strong> Design and architect the core infrastructure for massive enterprises or data centers.</li>
                    <li><strong>Network Automation Engineer:</strong> Write software to automate network deployments and monitor infrastructure health.</li>
                    <li><strong>Network Architect:</strong> Move away from day-to-day troubleshooting to focus purely on high-level infrastructure design and scaling strategy.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Requires Base Experience:</strong> CCNP is not for freshers. You must have 2-4 years of base network experience.</li>
                    <li><strong>Mid-Level CCNP Engineer:</strong> ₹8.0 Lakhs – ₹15.0 Lakhs per annum.</li>
                    <li><strong>Senior Network Architect:</strong> ₹18.0 Lakhs – ₹30.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Existing Network Engineers, CCNA holders, and IT Support technicians who want to break out of basic troubleshooting roles and move into high-paying, architectural infrastructure design.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to complete CCNA before CCNP?</strong><br />Yes, passing the CCNA or having equivalent knowledge is strictly required before understanding the complex protocols in CCNP.</p>
                <p><strong>2. Does this cover both ENCOR and ENARSI?</strong><br />Yes, this training prepares you for both the core enterprise exam (ENCOR 350-401) and the advanced routing specialization (ENARSI 300-410).</p>
            </div>
        ),
        phases: [
            p1("Phase 1: CCNP Prerequisites", [
                { title: "Review & Advanced Routing", points: ["CCNA concepts review: VLANs, OSPF, ACLs", "OSPF areas, LSA types & DR/BDR election", "BGP fundamentals: eBGP, iBGP & attributes"] },
                { title: "Advanced Switching", points: ["Advanced STP: RSTP, MST & loop guard", "HSRP, VRRP & GLBP redundancy protocols", "Private VLANs & voice VLANs"] },
            ], "Solidify CCNA knowledge and enter advanced routing and switching.", "#60a5fa"),
            p2("Phase 2: Advanced Technologies", [
                { title: "WAN & VPN Technologies", points: ["MPLS & Layer 3 VPNs", "DMVPN & FlexVPN architectures", "QoS: classification, marking, queuing & shaping"] },
                { title: "Security & Management", points: ["Zone-based firewall & IOS IPS", "SNMP, NetFlow, syslog & NTP management", "IPv6 routing: OSPFv3 & EIGRPv6"] },
            ], "Design and implement advanced WAN, VPN and QoS solutions.", "#60a5fa"),
            p3("Phase 3: SD-WAN, Automation & Exam", [
                { title: "Modern Networking", points: ["Cisco SD-WAN: vManage, vSmart & vEdge", "SD-Access & Cisco DNA Center", "Network programmability: REST APIs & YANG models"] },
                { title: "Automation & Exam", points: ["Python for network automation: Netmiko & NAPALM", "Ansible playbooks for network config management", "ENCOR (350-401) & ENARSI exam preparation"] },
            ], "Pass the CCNP Enterprise exams and manage modern SD-WAN networks.", "#60a5fa"),
        ],
    },
    {
        courseId: "linux",
        courseName: "Linux Administration",
        tagline: "Master Linux from command line to server administration",
        category: "Networking & Infrastructure",
        accentColor: "#fbbf24", accentColorDark: "#f59e0b",
        heroBadges: ["🐧 Linux · Bash · Server Admin", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Linux Administration?</h3>
                <p>Linux is the operating system that runs 90% of the internet. It powers Google, Amazon, Facebook, and almost every major supercomputer. Unlike Windows, Linux is mostly operated entirely through a black command-line screen. A Linux Administrator is the mechanic who installs, configures, and secures these vital servers.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to navigate, search, and manage files purely through the Command Line Interface (CLI).</li>
                    <li>How to manage user permissions, install software packages (apt/yum), and configure firewalls (iptables).</li>
                    <li>How to write Bash shell scripts to automate repetitive daily tasks.</li>
                    <li>How to host web servers (Apache/Nginx) and databases directly on a naked Linux server.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> Netflix is launching a new movie and expects 5 million viewers tonight. As a Linux Admin, you write a shell script to automatically clone and deploy 50 new Linux servers in the cloud to handle the massive incoming traffic.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>DevOps Prerequisite:</strong> The entire modern DevOps and Cloud computing ecosystem is built entirely on Linux. You absolutely cannot learn Docker, Kubernetes, or AWS without mastering Linux first.</li>
                    <li><strong>Security &amp; Stability:</strong> Linux is favored globally for financial and defense applications because it is open-source, highly secure, and rarely crashes.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Linux System Administrator:</strong> Install, maintain, and upgrade Linux servers in enterprise data centers.</li>
                    <li><strong>Cloud Engineer (Junior):</strong> Use your Linux foundations to begin managing EC2 cloud instances on AWS.</li>
                    <li><strong>Site Reliability Engineer (SRE):</strong> Ensure massive websites never go down by configuring reliable Linux server clusters.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher Linux Admin:</strong> ₹3.5 Lakhs – ₹6.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (SysAdmin):</strong> ₹7.0 Lakhs – ₹12.0 Lakhs per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Anyone aiming for a career in Cybersecurity, Cloud Computing, or DevOps. Linux is the absolute foundational stepping stone for all three of these advanced fields.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. I have never used Linux. Is this course for me?</strong><br />Yes, we start from absolute zero: how to install Ubuntu/CentOS on a virtual machine and open your very first terminal window.</p>
                <p><strong>2. Do I need to write code?</strong><br />You do not need to write application software (like Java or C++), but you will learn "Bash Scripting"—which means writing short scripts of commands to automate server tasks.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Linux Fundamentals", [
                { title: "Command Line Basics", points: ["Linux distributions & installation (Ubuntu/CentOS)", "File system hierarchy & navigation", "File operations: cp, mv, rm, find & grep", "Text editors: vim & nano"] },
                { title: "Users & Permissions", points: ["User & group management", "File permissions: chmod, chown & umask", "Process management: ps, top, kill & systemd"] },
            ], "Navigate and manage Linux systems confidently from the command line.", "#fbbf24"),
            p2("Phase 2: System Administration", [
                { title: "Networking & Services", points: ["Network configuration: ip, ifconfig & netplan", "SSH setup, key-based auth & secure tunnels", "DNS, DHCP, NFS & Samba services"] },
                { title: "Package & Storage", points: ["Package management: apt, yum & dnf", "Disk management: fdisk, LVM & RAID", "Cron jobs & automated task scheduling"] },
            ], "Administer Linux servers and configure core network services.", "#fbbf24"),
            p3("Phase 3: Advanced Linux & Security", [
                { title: "Security Hardening", points: ["SELinux & AppArmor mandatory access control", "Firewall: iptables & firewalld", "Log management: syslog, journalctl & ELK basics"] },
                { title: "Automation & Certification", points: ["Bash scripting for automation & monitoring", "Ansible for Linux configuration management", "LPIC-1 / CompTIA Linux+ exam preparation"] },
            ], "Harden Linux servers and automate administration with Bash and Ansible.", "#fbbf24"),
        ],
    },
    {
        courseId: "cyber-security",
        courseName: "Cyber Security",
        tagline: "Defend systems and secure digital infrastructure professionally",
        category: "Cyber Security",
        accentColor: "#f87171", accentColorDark: "#dc2626",
        heroBadges: ["🔐 Security · SOC · Cloud", "⏱ 4 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Cyber Security?</h3>
                <p>Cyber Security is the practice of defending computers, servers, mobile devices, electronic systems, and data from malicious attacks. If Ethical Hacking is about acting like a burglar to find weak doors, Cyber Security is about building indestructible doors and monitoring the alarm systems 24/7 to catch the burglars.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to secure Windows and Linux operating systems from infiltration.</li>
                    <li>How to configure hardware Firewalls and Intrusion Detection Systems (IDS).</li>
                    <li>How to monitor global network traffic for suspicious activity (SOC Level 1).</li>
                    <li>How to respond to and recover from a live ransomware attack.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A hacker tries to steal 10,000 credit card numbers from a hospital's database. As a Cyber Security Analyst sitting in a Security Operations Center (SOC), your monitoring software flags an unusual login from Russia at 3 AM. You immediately block the IP address and isolate the server before any data is lost.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Existential Threat to Business:</strong> A single successful cyber attack can bankrupt a company. Therefore, companies are forced to spend millions on cybersecurity, making it one of the most recession-proof industries in the world.</li>
                    <li><strong>Massive Talent Shortage:</strong> There are currently millions of unfilled cybersecurity jobs globally because there are simply not enough trained defenders to fight the rising number of automated AI attacks.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Cyber Security Analyst (SOC Analyst):</strong> Monitor network traffic actively to detect and block incoming threats.</li>
                    <li><strong>Security Engineer:</strong> Build and configure secure architectures, firewalls, and encryption protocols for corporate networks.</li>
                    <li><strong>Incident Responder:</strong> The "SWAT Team" of IT. You are called in after a hack has occurred to figure out how they got in and stop the bleeding.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior Analyst:</strong> ₹4.5 Lakhs – ₹8.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (SOC L2):</strong> ₹9.0 Lakhs – ₹16.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Security Architect):</strong> ₹20.0 Lakhs – ₹40.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Network engineers looking to upgrade, IT support staff wanting to specialize, and tech enthusiasts who want a fast-paced, high-stakes career defending critical infrastructure without necessarily needing to write software code.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be a coder?</strong><br />No! While basic scripting helps, Cyber Security is mostly about understanding networking, operating systems, and security tools (like Splunk or Wireshark).</p>
                <p><strong>2. How is this different from Ethical Hacking?</strong><br />Ethical Hacking is offensive (attacking systems to find flaws). Cyber Security is defensive (building walls and monitoring the perimeter). Most entry-level jobs in the industry are defensive (Cyber Security).</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Security Fundamentals", [
                { title: "Core Concepts", points: ["CIA Triad & threat actor profiles", "Set up Kali Linux lab with VirtualBox/VMware", "TCP/IP, DNS & HTTP security basics", "Common attack surfaces: web, network & social engineering"] },
                { title: "OS Security", points: ["File permissions & user management hardening", "Packet analysis with Wireshark", "Log review & basic incident indicators"] },
            ], "Understand cybersecurity fundamentals and set up a hands-on security lab.", "#f87171"),
            p2("Phase 2: Offensive & Defensive Techniques", [
                { title: "Offensive Skills", points: ["Network scanning with Nmap & enumeration", "Exploit web vulnerabilities: SQLi, XSS & CSRF", "Password attacks: brute force & credential stuffing", "OWASP Top 10 in web penetration testing"] },
                { title: "Defensive Tools", points: ["Vulnerability scanning with Nessus & OpenVAS", "Firewall, IDS/IPS (Snort/Suricata) configuration", "SIEM basics: log correlation & alerting"] },
            ], "Perform vulnerability assessments and configure defensive security tools.", "#f87171"),
            p3("Phase 3: Advanced Security & SOC", [
                { title: "Advanced Attacks & Forensics", points: ["Full penetration testing (PTES methodology)", "Active Directory attacks: Kerberoasting & DCSync", "Digital forensics: Volatility & disk imaging"] },
                { title: "Cloud & Career", points: ["Cloud security on AWS/Azure: IAM, VPC & GuardDuty", "SOC workflow: SIEM, threat hunting & IR playbooks", "CEH, CompTIA Security+ or OSCP certification paths"] },
            ], "Lead security operations and prepare for industry security certifications.", "#f87171"),
        ],
    },
    {
        courseId: "ethical-hacking",
        courseName: "Ethical Hacking",
        tagline: "Think like an attacker — defend like a professional",
        category: "Cyber Security",
        accentColor: "#94a3b8", accentColorDark: "#475569",
        heroBadges: ["🕵️ Kali Linux · Metasploit · CEH", "⏱ 4 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Ethical Hacking?</h3>
                <p>Ethical Hacking (or Penetration Testing) is the art of legally breaking into computer systems. Companies hire you to attack their own websites, servers, and Wi-Fi networks using the exact same tools and techniques that malicious hackers use. If you can break in, you show the company how you did it so they can fix the flaw before a real criminal exploits it.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to set up a hidden, untraceable hacking lab using Kali Linux.</li>
                    <li>How to perform "Reconnaissance" to find hidden sensitive files on corporate websites.</li>
                    <li>How to use tools like Nmap, Metasploit, and Burp Suite to execute live exploits.</li>
                    <li>How to crack Wi-Fi passwords and execute Man-in-the-Middle (MITM) attacks.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A bank wants to launch a new mobile app. Before they release it to the public, they hire you. You discover that by altering a piece of code in the URL, you can view other people's bank balances. You report this critical vulnerability to the bank, they patch it, and they pay you a massive bounty.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Proactive Defense:</strong> Traditional security (like firewalls) is no longer enough. The only way to truly know if a system is secure is to throw a highly skilled human attacker at it.</li>
                    <li><strong>The Rise of Bug Bounties:</strong> Companies like Google, Apple, and Tesla pay millions of dollars to freelance hackers who can find bugs in their software. This has created a massive, lucrative gig economy for skilled hackers.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Penetration Tester:</strong> Work for a security consultancy, spending your days attempting to hack into various client companies legally.</li>
                    <li><strong>Red Team Operator:</strong> Simulate full-scale, aggressive cyber attacks against massive enterprises to test their defense teams.</li>
                    <li><strong>Vulnerability Assessor:</strong> Scan enterprise networks to find and rank security weaknesses before they are exploited.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher Penetration Tester:</strong> ₹5.0 Lakhs – ₹9.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Red Teamer):</strong> ₹10.0 Lakhs – ₹18.0 Lakhs per annum.</li>
                    <li><strong>Bug Bounty Hunter:</strong> Highly variable. Can range from $0 to $100,000+ per validated bug depending on the severity.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Highly curious individuals who love solving puzzles, breaking things, and understanding how complex systems fail. We strongly recommend having a foundation in Linux and Networking before starting this course.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Is this legal?</strong><br />Yes, 100%. We teach you how to hack legally with strict permission from the target (or within safely enclosed virtual labs). Hacking without permission is a severe crime.</p>
                <p><strong>2. Can I start this as a complete beginner?</strong><br />Ethical Hacking is an intermediate-level skill. You must know basic Networking (like CCNA) and basic Linux Administration first. You cannot hack a system if you do not understand how the system works.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Hacking Lab & Recon", [
                { title: "Ethical Hacking Setup", points: ["Set up Kali Linux, Metasploitable & DVWA lab", "Ethical hacking laws: CFAA & IT Act compliance", "Linux CLI for security: bash scripting & permissions"] },
                { title: "Passive Reconnaissance", points: ["OSINT tools: Maltego, Shodan & Google Dorks", "Wireshark traffic analysis", "TCP/IP vulnerabilities & ARP/DNS spoofing concepts"] },
            ], "Set up a legal hacking lab and conduct passive reconnaissance.", "#94a3b8"),
            p2("Phase 2: Active Exploitation", [
                { title: "Attack Techniques", points: ["Active scanning with Nmap, Nikto & Gobuster", "Web exploits: SQLi, XSS, IDOR with Burp Suite", "Metasploit: exploitation, payloads & post-exploitation"] },
                { title: "Advanced Attacks", points: ["Password cracking: Hashcat & John the Ripper", "MITM attacks: ARP spoofing & SSL stripping", "WPA2 cracking & evil twin access points"] },
            ], "Execute and document real-world penetration testing techniques.", "#94a3b8"),
            p3("Phase 3: Red Team & Certification", [
                { title: "Red Team Operations", points: ["Custom exploits with Python & Metasploit Framework", "Active Directory: BloodHound, Mimikatz & lateral movement", "AV bypass & C2 channels (Cobalt Strike / Mythic)"] },
                { title: "CTF & Certification", points: ["CTF challenges on HackTheBox & TryHackMe", "Social engineering: phishing & vishing campaigns", "CEH v12 & OSCP certification preparation & walkthroughs"] },
            ], "Conduct red team operations and achieve ethical hacking certifications.", "#94a3b8"),
        ],
    },
    {
        courseId: "graphic-design",
        courseName: "Graphic Design",
        tagline: "From design principles to professional creative production",
        category: "Design & Creative",
        accentColor: "#f472b6", accentColorDark: "#db2777",
        heroBadges: ["🎨 Photoshop · Illustrator · InDesign", "⏱ 3 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Graphic Design?</h3>
                <p>Graphic Design is the art of visually communicating ideas. It is not just about "making things look pretty"; it is about solving business problems through visual strategy. Whenever you see a memorable logo, an engaging social media post, or a beautifully printed magazine, a skilled Graphic Designer created it.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to master the industry-standard Adobe Creative Cloud: Photoshop, Illustrator, and InDesign.</li>
                    <li>How to design unique logos and complete brand identity packages from scratch.</li>
                    <li>How to apply core design principles: Color Theory, Typography, and Layout grids.</li>
                    <li>How to prepare digital files for high-quality commercial printing.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A new coffee shop is opening in town. They hire you to create their entire visual identity. You design their logo in Illustrator, edit their product photos in Photoshop, and layout their printed menus in InDesign. Your cohesive design is what makes customers trust the new brand.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Content is King:</strong> In the age of Instagram and TikTok, companies live or die by their visual content. A business with poor, amateur graphics immediately loses trust in the modern market.</li>
                    <li><strong>Freelance Freedom:</strong> Graphic design is one of the most flexible skills globally. You can work full-time at an agency, or scale a highly profitable freelance business from your laptop anywhere in the world.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Graphic Designer:</strong> Work in-house for a single brand, creating all their daily marketing materials, presentations, and social media posts.</li>
                    <li><strong>Brand Identity Specialist:</strong> Work at a creative agency focusing entirely on inventing logos and visual styles for new companies.</li>
                    <li><strong>Layout Artist / Production Designer:</strong> Focus specifically on the complex typography and layout for printed materials like books, magazines, and product packaging.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior Designer:</strong> ₹2.5 Lakhs – ₹4.5 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Mid-Level Designer):</strong> ₹5.0 Lakhs – ₹8.0 Lakhs per annum.</li>
                    <li><strong>Creative / Art Director:</strong> ₹10.0 Lakhs – ₹20.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Highly creative individuals who love art but want a defined, commercial career path. If you constantly critique bad movie posters or poorly designed restaurant menus, this is the career for you.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be able to draw?</strong><br />No! While illustration skills are a bonus, 90% of commercial Graphic Design requires arranging shapes, text, and photos on a computer, not freehand sketching.</p>
                <p><strong>2. Is Canva enough? Why do I need Adobe?</strong><br />Canva is for amateurs and quick templates. Professional agencies and high-paying clients require original vectors and print-ready files that can only be produced using Adobe Illustrator and Photoshop.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Design Fundamentals", [
                { title: "Design Principles", points: ["Colour theory: RGB, CMYK & brand palettes", "Typography: typeface classification & hierarchy", "Layout: grid systems, white space & visual flow"] },
                { title: "Adobe Tools Setup", points: ["Photoshop: layers, selections & image editing", "Illustrator: vector shapes, paths & icon design", "Basic logo mark & branding concepts"] },
            ], "Apply design principles and create basic graphics in Adobe tools.", "#f472b6"),
            p2("Phase 2: Professional Design Production", [
                { title: "Brand & Marketing", points: ["Brand identity: logos, guidelines & style guides", "Marketing collateral: posters, flyers & social media graphics", "Multi-page layouts in Adobe InDesign"] },
                { title: "Advanced Techniques", points: ["Vector illustration for icons & infographics", "Print production: bleed, crop marks & colour profiles", "Client briefs, mood boards & feedback iteration"] },
            ], "Design brand identities and professional marketing materials.", "#f472b6"),
            p3("Phase 3: Digital & Portfolio", [
                { title: "Digital & Motion", points: ["UI mockups with Figma & Adobe XD", "Motion graphics & animated content with After Effects intro", "3D text effects & product mock-ups"] },
                { title: "Career & Portfolio", points: ["8–10 diverse portfolio case study projects", "Printing specialisation: die cuts & packaging design", "Design interview & freelance client acquisition prep"] },
            ], "Build a professional design portfolio and launch a creative career.", "#f472b6"),
        ],
    },
    {
        courseId: "video-editing",
        courseName: "Video Editing",
        tagline: "From raw footage to cinematic, professional-grade videos",
        category: "Design & Creative",
        accentColor: "#fb923c", accentColorDark: "#ea580c",
        heroBadges: ["🎬 Premiere Pro · After Effects", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Video Editing?</h3>
                <p>Video Editing is the invisible art of storytelling. It is the process of taking hours of raw, messy camera footage and cutting it down into a smooth, emotionally engaging story. Whether it is a 15-second YouTube Short, a corporate promo, or a feature film, the editor controls the pacing, mood, and final message.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to master Adobe Premiere Pro for cutting, arranging, and syncing audio/video.</li>
                    <li>How to perform professional Color Grading to make standard footage look like a Hollywood movie.</li>
                    <li>How to clean up bad audio, mix background music, and add sound effects.</li>
                    <li>How to use Adobe After Effects to create stunning title animations and motion graphics.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A YouTuber films a 40-minute vlog that is boring and full of mistakes. As the editor, you cut out the dead space, add upbeat background music, overlay funny sound effects, zoom in on key reactions, and turn it into a highly viral 8-minute masterpiece.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>The Video-First Web:</strong> Text and images are dying. Instagram, TikTok, LinkedIn, and YouTube heavily prioritize short-form and long-form video. Every single company on earth now needs a video editor to survive on social media.</li>
                    <li><strong>Global Clientele:</strong> You do not need to sit in an office. A skilled video editor in India can easily edit daily content for YouTubers and startups sitting in London or New York.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Freelance Video Editor:</strong> Edit YouTube videos, Instagram Reels, and wedding films on a gig basis from home.</li>
                    <li><strong>Corporate Marketer/Editor:</strong> Work full-time for a brand, managing their entire video content output for ads and internal communications.</li>
                    <li><strong>Motion Graphics Assistant:</strong> Specialize purely in creating animated graphics and visual effects for larger post-production houses.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior Editor:</strong> ₹2.5 Lakhs – ₹4.5 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Senior Editor):</strong> ₹5.0 Lakhs – ₹10.0 Lakhs per annum.</li>
                    <li><strong>Freelance Top Tier:</strong> Can easily charge ₹10,000 to ₹50,000+ per polished video project.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Content creators, aspiring YouTubers, and creative individuals who have an intuitive sense of timing, music, and visual rhythm.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need a very powerful computer?</strong><br />Yes, Video Editing requires decent hardware. You will need at least a modern i5/Ryzen 5 processor with 16GB of RAM and a dedicated graphics card for smooth rendering.</p>
                <p><strong>2. Will I learn how to shoot video too?</strong><br />This course focuses entirely on Post-Production (what happens *after* the camera stops rolling) using Adobe software.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Video Editing Fundamentals", [
                { title: "Adobe Premiere Pro", points: ["Project setup, sequences & timeline navigation", "Importing media: video, audio & image assets", "Basic cuts: razor, ripple delete & trim edits", "Colour correction with Lumetri Colour tools"] },
                { title: "Audio & Export", points: ["Audio mixing, noise reduction & music syncing", "Text & title creation with Essential Graphics", "Export settings for YouTube, Instagram & broadcast"] },
            ], "Edit and export polished videos using Adobe Premiere Pro.", "#fb923c"),
            p2("Phase 2: Advanced Editing & Motion Graphics", [
                { title: "Storytelling & Advanced Edits", points: ["Narrative pacing, J-cuts & L-cuts", "Multi-cam editing workflows", "Speed ramping & dynamic transitions", "Green screen & chroma keying techniques"] },
                { title: "After Effects Basics", points: ["Keyframe animation & motion graphics", "Text animation, lower-thirds & title sequences", "Basic compositing & visual effects"] },
            ], "Create dynamic motion graphics and apply cinematic editing techniques.", "#fb923c"),
            p3("Phase 3: Professional Production", [
                { title: "Advanced VFX & Colour", points: ["Advanced After Effects: masks, track mattes & expressions", "Colour grading with LUTs & film emulation", "3D camera movements & depth effects"] },
                { title: "Portfolio & Career", points: ["YouTube / social media content creation workflow", "Freelance project management & client delivery", "Showreel / portfolio production for jobs"] },
            ], "Deliver broadcast-quality videos and build a professional showreel.", "#fb923c"),
        ],
    },
    {
        courseId: "wordpress",
        courseName: "WordPress Development",
        tagline: "Build, customise and deploy professional WordPress websites",
        category: "Office & Productivity",
        accentColor: "#38bdf8", accentColorDark: "#0284c7",
        heroBadges: ["🌐 WordPress · WooCommerce · PHP", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is WordPress Development?</h3>
                <p>WordPress is the world's most popular website-building platform, powering over 40% of the entire internet. WordPress Development teaches you how to build professional, fully functional websites, blogs, and online stores rapidly—often without needing to write a single line of initial code.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to buy a domain, set up web hosting, and install WordPress from scratch.</li>
                    <li>How to use Page Builders (like Elementor) to design stunning websites visually (Drag &amp; Drop).</li>
                    <li>How to build a complete, secure E-commerce store using WooCommerce.</li>
                    <li>How to optimize your website to load in under 2 seconds and rank on Google (SEO).</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A local gym needs a website fast but cannot afford a $10,000 custom-coded React app. Using WordPress, you purchase a premium theme, customize the design using Elementor, add a plugin for booking classes, and launch their fully responsive site in just 3 days.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Speed to Market:</strong> Most small to medium businesses do not need complex, expensive coding. They need a beautiful, fast website *today*. WordPress allows you to deliver exactly that.</li>
                    <li><strong>The Ultimate Freelance Skill:</strong> Web development agencies constantly outsource WordPress work. It is the easiest tech skill to monetize quickly as a freelancer.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Freelance Web Designer:</strong> Build websites for local businesses, restaurants, and startups directly.</li>
                    <li><strong>WordPress Developer (Agency):</strong> Work at a marketing agency churning out landing pages and blog structures for corporate clients.</li>
                    <li><strong>E-Commerce Manager:</strong> Maintain and update large WooCommerce stores, adding products and managing payment gateways.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior WP Developer:</strong> ₹2.0 Lakhs – ₹4.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Senior WP Dev):</strong> ₹5.0 Lakhs – ₹9.0 Lakhs per annum.</li>
                    <li><strong>Freelance:</strong> Easily charge ₹15,000 to ₹50,000+ per standard business website.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Entrepreneurs who want to build their own site, digital marketers who need to create landing pages quickly, and anyone looking for a highly monetizable side hustle without learning complex software engineering.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be a programmer?</strong><br />No! 80% of WordPress is visual. However, we do teach you basic HTML, CSS, and PHP so you can customize themes when the visual builder isn't enough.</p>
                <p><strong>2. Is WordPress outdated compared to React/Node.js?</strong><br />Absolutely not. While React is meant for complex web *apps* (like Facebook), WordPress remains the absolute king for standard business websites, blogs, and content marketing.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: WordPress Foundations", [
                { title: "Core Concepts", points: ["Local setup with LocalWP or XAMPP", "Dashboard: posts, pages, media & settings", "Theme installation & Gutenberg block editor"] },
                { title: "Essential Plugins", points: ["Yoast SEO, WP Super Cache & UpdraftPlus", "Custom menus, widgets & sidebar layout", "Build a complete business website"] },
            ], "Set up and configure professional WordPress websites with key plugins.", "#38bdf8"),
            p2("Phase 2: Custom Design & E-Commerce", [
                { title: "Page Builder & E-Commerce", points: ["Elementor Pro pixel-perfect layouts", "WooCommerce: products, shipping & payment gateways", "Membership sites & digital product delivery"] },
                { title: "Performance & SEO", points: ["On-page SEO: schema, sitemaps & Core Web Vitals", "CDN setup, image optimisation & caching", "Contact forms, popups & lead capture"] },
            ], "Build e-commerce stores and optimised landing pages with Elementor.", "#38bdf8"),
            p3("Phase 3: Custom Themes, Plugins & Deployment", [
                { title: "Custom Development", points: ["Custom themes with PHP, HTML5 & CSS3", "WordPress hooks: actions & filters for plugins", "Custom post types, taxonomies & ACF fields"] },
                { title: "Security & Deployment", points: ["Security hardening & brute force protection", "Deploy to cPanel, Kinsta & WP Engine", "REST API + headless WordPress with Next.js"] },
            ], "Build client-ready custom WordPress themes and deploy to live hosting.", "#38bdf8"),
        ],
    },
    {
        courseId: "advanced-excel",
        courseName: "Advanced Excel",
        tagline: "Power-user Excel skills for finance, analytics and automation",
        category: "Office & Productivity",
        accentColor: "#4ade80", accentColorDark: "#16a34a",
        heroBadges: ["📗 Advanced Excel · VBA · Power Query", "⏱ 2 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is Advanced Excel?</h3>
                <p>Advanced Excel goes far beyond simple tables and basic sum formulas. It is the deep, technical use of Microsoft Excel to clean massive datasets, build complex financial models, and automate hours of manual data entry using programming (VBA) and advanced data tools (Power Query).</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to write and combine complex formulas (Nested IFs, INDEX-MATCH, XLOOKUP) to solve difficult logic problems.</li>
                    <li>How to use Power Query to extract, clean, and load data from external databases automatically.</li>
                    <li>How to build interactive, dynamic executive dashboards that update themselves.</li>
                    <li>How to write Visual Basic for Applications (VBA) Macros to automate repetitive daily tasks.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> An accountant manually copies data from 20 different branch spreadsheets into one master sheet every Friday, taking 4 hours. Using an Advanced Excel VBA Macro and Power Query, you automate this entire process so it happens in 3 seconds with the click of a single button.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>The Universal Tool:</strong> While Data Scientists use Python, 95% of corporate middle management still uses Excel for daily decision-making. Being the "Excel Wizard" in your office makes you completely indispensable.</li>
                    <li><strong>Time is Money:</strong> Companies love employees who can save them time. If you can automate a 5-hour task down to 5 minutes using Advanced Excel, your value to the company skyrockets.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>MIS Executive / Manager:</strong> Oversee internal reporting, build automated dashboards, and track company KPIs.</li>
                    <li><strong>Financial Analyst:</strong> Build highly complex financial models, forecasts, and valuation sheets for investment firms or corporate finance departments.</li>
                    <li><strong>Operations/Data Analyst:</strong> Serve as the bridge between the raw data in the database and the visual reports the CEO needs to see.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher/Junior Analyst:</strong> ₹3.0 Lakhs – ₹5.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (Senior MIS/Analyst):</strong> ₹6.0 Lakhs – ₹10.0 Lakhs per annum.</li>
                    <li><strong>Financial Modeling Expert:</strong> ₹12.0 Lakhs – ₹20.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Accountants, HR managers, sales leads, and existing Excel users who want to transition from manually typing data to automating reports and performing high-level business analytics.</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to be a programmer to learn VBA?</strong><br />No! We teach VBA (Visual Basic) completely from scratch. It is much easier to learn than traditional software engineering languages like Java.</p>
                <p><strong>2. How is this different from your basic Excel course?</strong><br />The basic course teaches general navigation, formatting, and standard formulas. This Advanced course focuses heavily on Data Modeling, Power Query, Macros, and complex logical automation.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Advanced Functions", [
                { title: "Lookup & Logic", points: ["XLOOKUP, INDEX-MATCH & MATCH combinations", "Nested IFs, SWITCH & IFS functions", "SUMIFS, COUNTIFS & AVERAGEIFS multi-criteria"] },
                { title: "Data Tools", points: ["Advanced filtering & custom sorts", "Data validation with custom formulas", "Conditional formatting with formula rules"] },
            ], "Use advanced Excel functions for complex data analysis tasks.", "#4ade80"),
            p2("Phase 2: Analytics & Dashboards", [
                { title: "PivotTables & Power Tools", points: ["Advanced PivotTables with calculated fields & items", "Power Query for ETL: merge, append & transform", "Power Pivot: data models & DAX measures"] },
                { title: "Dashboard Design", points: ["Interactive dashboards with slicers & timelines", "Dynamic charts: combo, waterfall & sparklines", "What-if analysis: Scenario Manager & Data Tables"] },
            ], "Build dynamic Excel dashboards and data models with Power Tools.", "#4ade80"),
            p3("Phase 3: VBA Automation & Integration", [
                { title: "VBA Programming", points: ["Record & edit VBA macros", "VBA loops, conditionals & user-defined functions", "UserForms for data entry automation"] },
                { title: "Integration & Capstone", points: ["Dynamic array formulas: FILTER, SORT, UNIQUE, SEQUENCE", "Excel + Power BI integration", "Financial modelling & reporting automation project"] },
            ], "Automate complex Excel workflows using VBA and Power Tools.", "#4ade80"),
        ],
    },
    {
        courseId: "sepd",
        courseName: "SEPD — Software Engineering & Project Development",
        tagline: "Professional software engineering from design to delivery",
        category: "Enterprise / Process",
        accentColor: "#a78bfa", accentColorDark: "#7c3aed",
        heroBadges: ["🏢 Agile · SDLC · DevOps", "⏱ 6 Months", "💻 Online / Offline"],
        seoContent: (
            <div className="seo-content-wrapper">
                <h3>1️⃣ What is SEPD?</h3>
                <p>Software Engineering &amp; Project Development (SEPD) teaches you how real software is built in massive tech companies. Writing code is only 20% of a Software Engineer's job. This course covers the other 80%: collaborating in Agile teams, designing system architecture, version control, testing, and automated cloud deployment.</p>
                <br />
                <strong>What you will actually learn:</strong>
                <ul>
                    <li>How to use Git and GitHub to collaborate with 50+ other developers simultaneously without breaking code.</li>
                    <li>How to follow Agile and Scrum methodologies to manage complex software projects using Jira.</li>
                    <li>How to design Software Architecture (UML, System Design, Microservices vs Monoliths).</li>
                    <li>How to set up CI/CD (Continuous Integration / Continuous Deployment) pipelines using Jenkins or GitHub Actions.</li>
                </ul>
                <br />
                <p><strong>Real-world Example:</strong> A team of 10 developers is building a new banking app. Instead of blindly writing code and emailing files to each other, you use Git for version control, run automated unit tests every time someone saves their code, and deploy the finished app to AWS servers automatically using a CI/CD pipeline.</p>

                <hr className="seo-divider" />

                <h3>2️⃣ Why is this course important in today&apos;s market?</h3>
                <ul>
                    <li><strong>Bridging the Gap:</strong> Colleges teach you how to write an algorithm; they do not teach you how to push that algorithm to a live production server alongside 20 other developers. This course bridges that gap.</li>
                    <li><strong>Senior Level Thinking:</strong> Understanding system architecture, clean code principles (SOLID), and DevOps pipelines is what separates a low-paid "coder" from a highly-paid "Software Engineer."</li>
                </ul>

                <hr className="seo-divider" />

                <h3>3️⃣ Career Opportunities After Completing This Course</h3>
                <ul>
                    <li><strong>Software Engineer:</strong> Work in modern tech companies building robust, scalable applications following strict industry standards.</li>
                    <li><strong>Scrum Master / Technical Project Manager:</strong> Lead teams of developers, manage sprints, and ensure software is delivered on time.</li>
                    <li><strong>DevOps Engineer (Junior):</strong> Manage the bridge between the developers writing the code and the servers running the code (CI/CD, Docker, Cloud).</li>
                </ul>

                <hr className="seo-divider" />

                <h3>4️⃣ Average Salary (India-focused)</h3>
                <ul>
                    <li><strong>Fresher Software Engineer:</strong> ₹4.0 Lakhs – ₹8.0 Lakhs per annum.</li>
                    <li><strong>2–3 Years Experience (SDE-II):</strong> ₹10.0 Lakhs – ₹18.0 Lakhs per annum.</li>
                    <li><strong>5+ Years Experience (Engineering Manager/Architect):</strong> ₹25.0 Lakhs – ₹50.0 Lakhs+ per annum.</li>
                </ul>

                <hr className="seo-divider" />

                <h3>5️⃣ Who Should Do This Course?</h3>
                <p>Computer Science students, self-taught programmers, and junior developers who know how to code but want to learn the enterprise processes required to get hired at top-tier tech companies (TCS, Infosys, FAANG).</p>

                <hr className="seo-divider" />

                <h3>6️⃣ Short FAQ Section</h3>
                <p><strong>1. Do I need to know programming before taking this?</strong><br />Yes. You should already be comfortable with at least one programming language (Java, Python, C++, or JavaScript) before taking this process-oriented engineering course.</p>
                <p><strong>2. Is this course focused on coding or management?</strong><br />Both. It teaches the technical methodologies (Git, CI/CD, Architecture) and the management methodologies (Agile, Scrum, Jira) that modern software teams use globally.</p>
            </div>
        ),
        phases: [
            p1("Phase 1: Software Engineering Foundations", [
                { title: "SDLC & Agile", points: ["SDLC phases: planning, design, coding, testing, maintenance", "Agile & Scrum: sprints, standups & retrospectives", "Git & GitHub: branching, PRs & code reviews"] },
                { title: "Requirements & Design", points: ["SRS & use case documentation", "UML diagrams: class, sequence & activity", "Design principles: DRY, KISS & YAGNI"] },
            ], "Apply engineering best practices and work in Agile development teams.", "#a78bfa"),
            p2("Phase 2: Professional Development", [
                { title: "Clean Code & Patterns", points: ["SOLID principles across OO codebases", "Design patterns: Singleton, Factory, Observer & Strategy", "TDD: unit & integration tests with test-first approach"] },
                { title: "Project Management", points: ["Jira: tickets, epics, story points & burndown charts", "Functional, regression, UAT & performance testing", "API documentation with Swagger/OpenAPI"] },
            ], "Build clean, tested and documented production-quality software.", "#a78bfa"),
            p3("Phase 3: Architecture & Delivery", [
                { title: "Architecture & DevOps", points: ["Microservices vs monolith trade-off analysis", "CI/CD with Jenkins, GitHub Actions & Docker", "Security engineering: threat modelling & secure coding"] },
                { title: "Leadership & Capstone", points: ["Lead a team through full project lifecycle", "Technical debt management & scalability planning", "Capstone: build & present a software system to industry panel"] },
            ], "Architect, deliver and lead enterprise software projects end-to-end.", "#a78bfa"),
        ],
    },
];
