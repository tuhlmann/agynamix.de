import { prepareData, sortByDate, StoryData, Categories } from "../lib/prepare-story-data"

// tslint:disable:no-require-imports
export default ([
  {
    position: "Senior Software Developer",
    client: "Ascendant, Inc",
    logo: require("../images/clients/Ascendant.svg"),
    start: "2013-07-01",
    end: "2019-02-28",
    link: "https://www.ascendantcompliancemanager.com",
    tags: ["Scala", "Lift", "GO", "AngularJS", "Javascript", "MarkoJS", "Docker", "MongoDB"],
    categories: [Categories.Client, Categories.Resume],
    short: `*Compliance & Risk Management, Solved*`,
    description: `
     In a small team of awesomely great developers we implement a suite of tools 
     using best of breed frameworks like AngularJS for the frontend. 
     The backend server is developed as a set of Scala applications on top 
     of the Lift web framework. We use the MongoDB database.
    `
  },
  {
    position: "Scala & Lift Consultant",
    client: "Twisp, Inc",
    logo: require("../images/clients/twisp.png"),
    start: "2013-03-01",
    end: "2013-07-01",
    tags: ["Scala", "Lift", "MySQL", "Squeryl"],
    categories: [Categories.Client, Categories.Resume],
    short: `*Scala, Lift & MySQL. Kind of a personalized wayback machine.*`,
    description: `
     For a client I'm developing a Lift based information engine application.
    `
  },
  {
    position: "Scala & Lift Consultant",
    client: "Underscore Consulting",
    logo: require("../images/clients/Underscore.png"),
    start: "2012-11-01",
    end: "2013-04-01",
    link: "https://underscore.io",
    tags: ["Scala", "Lift", "MongoDB", "Cloudbees"],
    categories: [Categories.Client, Categories.Resume],
    short: `*Scala & Lift projects with the awesome folks at Underscore Consulting.*`,
    description: `
     I was in charge of developing part of a Scala / Lift client application
     together with a really cool team of Underscore developers.
    `,
    recommendations: [
      {
        title: "Senior Software Consultant for the TagTrail project",
        by: "Richard Dallaway, Partner Underscore Consulting LLP",
        description: `
We worked with Torsten in on an innovative real-time interactive NFC platform
for a US corporation. It was a pleasure to work with him. 
He brought technical knowledge, especially with Lift, Scala, and Angular. 
He worked with the customer to understand their needs. As well as generally 
contributing to the project, he took on responsibility for (and delivered) 
a rich reporting tool.        
        `
      }
    ]
  },
  {
    position: "Senior Software Developer",
    client: "Sgrouples, Inc",
    logo: require("../images/clients/MeWe.png"),
    start: "2011-09-01",
    end: "2012-09-01",
    link: "https://www.mewe.com",
    tags: ["Scala", "Lift", "Javascript", "MongoDB"],
    categories: [Categories.Client, Categories.Resume],
    recommendations: [
      {
        title: "Letter of Recommendation",
        date: "2012-09-01",
        by: "Jonathan Wolfe, Chief Scientist",
        link: "/documents/sgrouples_rec_tuhlmann.pdf"
      }
    ],
    short: `*Formerly sgrouples.com. Scala, Lift & Mongo DB. MeWe is a privacy conscious social network.*`,
    description: `
     With a small bunch of other high profile developers we develop the social groups 
     platform https://sgrouples.com (now: https://mewe.com).
    `
  },
  {
    position: "Software Supplier",
    client: "B+N Automation",
    logo: require("../images/clients/BN-Automation.gif"),
    start: "2009-09-01",
    end: "2009-09-01",
    link: "https://www.bn-automation.com/de/startseite.html",
    tags: ["Java", "AGYNAMIX"],
    categories: [Categories.Client],
    short: `
     *B+N Automation uses AGYNAMIX' Net-Herald signal monitoring and broadcasting software.*
    `
  },
  {
    position: "Software Supplier",
    client: "WKS Group",
    logo: require("../images/clients/WKS-Group.png"),
    start: "2011-09-01",
    end: "2015-12-31",
    link: "https://wksgroup.de/",
    tags: ["Java", "AGYNAMIX"],
    categories: [Categories.Client],
    short: `
     *WKS Group uses several AGYNAMIX' Net-Herald signal monitoring and broadcasting software installations.*
    `
  },
  {
    position: "JSF Developer",
    client: "1822direct Sparkasse",
    logo: require("../images/clients/Sparkasse_1822.png"),
    start: "2009-04-01",
    end: "2009-07-01",
    link: "https://www.1822direkt.de",
    tags: ["Java", "JBoss", "Tomcat", "JSF"],
    categories: [Categories.Client, Categories.Resume],
    short: `*Java & JSP. Wrote a frontend for processing customer printables.*`,
    description: `
      Development of a JSF(Java Server Faces) front end for an in house application to manage correspondence to their customers.
      We used Tomcat 5, JBoss and JSF 1.2 with MyFaces for development and deployment.    
    `
  },
  {
    position: "AGYNAMIX Numerix",
    client: "AGYNAMIX",
    logo: require("../images/clients/Agynamix.png"),
    start: "2015-03-01",
    end: "2017-12-31",
    link: "https://github.com/tuhlmann/numerix",
    tags: ["Clojure", "Clojurescript", "MongoDB", "Reagent", "re-frame", "re-com"],
    categories: [Categories.Product, Categories.Resume],
    description: `
      Numerix was planned as a multi tenant tool for freelancers or small companies. It contains modules for

      *time tracking; invoice generation (from tracked time and extra items); document management, multi document upload;
      a knowledge base; chat rooms, complete with callout and notifications;
      user management, complete with notification emails, password reset, etc.; a calendar*

      On the technical side, Numerix is a Clojure / Clojurescript project using Reagent and re-frame, storing data into a MongoDB.
      It uses a [role based permissions system](https://github.com/tuhlmann/permissions) similar 
      to [Apache Shiro's wildcard permissions](http://shiro.apache.org/permissions.html).
    `,
    images: [
      {
        image: require("../images/products/numerix-invoice.png"),
        description: `
        You can create invoices from tracked time and also adding manual entries along with different taxes, 
        a generated invoice number etc. When done you can generate a PDF from it via the Flying Saucer project.
        `,
        align: "right"
      }
    ]
  },
  {
    position: "Unser Gartenverein",
    client: "AGYNAMIX",
    logo: require("../images/clients/Agynamix.png"),
    start: "2012-11-01",
    end: "2016-12-31",
    link: "https://github.com/tuhlmann/gartenverein",
    tags: ["Scala", "Lift", "Javascript", "MongoDB"],
    categories: [Categories.Product, Categories.Resume],
    description: `
Gartenverein is an attempt to create a hosted application to manage small garden communities in Germany.

Garden communities are managed like associations. Invoices need to be sent, 
water and power meter readings have to be collected and stored.

This software manages garden tenants, readings, documents, a shared calendar and more.
    `,
    images: [
      {
        image: require("../images/products/garden-overview.png"),
        description: `
        After logging in you are greeted with a Dashboard like overview with up-to-date information. From
        there you can quickly navigate to areas like bulk letters, invoices, dates, documents and more.
        `,
        align: "right"
      }
    ]
  },
  {
    position: "AGYNAMIX Simidude",
    client: "AGYNAMIX",
    logo: require("../images/products/Simidude.jpg"),
    start: "2008-10-01",
    end: "2011-12-31",
    link: "https://github.com/tuhlmann/simidude",
    tags: ["Java", "SWT", "JFace", "Install4j", "Linux", "Windows", "MacOS"],
    categories: [Categories.Product, Categories.Resume],
    description: `
      I developed a small cross platform application that is used to copy your computers
      clipboard contents, files or whole directories to connected machines.

      Simidude is a cross platform network clipboard and file sharing tool.
      When it starts up it automatically checks your local lan for other running instances
      and connects to them. After that transmitting a file from one machine to another is
      just a drag and drop operation with Simidude.

      Simidude runs on Windows, Linux and Mac computers, as well as in virtual machines. 
    `,
    images: [
      {
        image: require("../images/products/Simidude_Ubuntu_All.jpg"),
        description: `
        ### AGYNAMIX Simidude
        This shows the Simidude main windows where you can drag and drop files or directories
        upon and they appear on all connected Simidude instances.

        Items copied to the clipboard will also appear in the list, are transfered and can be
        activated on any connected computer.
        `,
        align: "right"
      }
    ]
  },
  {
    position: "AGYNAMIX Net-Herald",
    client: "AGYNAMIX",
    logo: require("../images/clients/Agynamix.png"),
    start: "2005-07-01",
    end: "2015-12-31",
    link: "https://www.agynamix.de",
    tags: ["Java", "Eclipse RCP", "PostgreSQL", "Spring", "OPC"],
    categories: [Categories.Product, Categories.Resume],
    description: `
      I started AGYNAMIX by the end of 2004 to create a company where I could create great
      software according to what I have learned in the past decade and not according to managers
      that have never delivered a line of code.

      My first product was a monitoring software for water supply companies.
      It was a pretty large project featuring a server side Java application written
      using these technologies:

      the Spring framework
      a PostgreSql database
      Java COM connectivity to manage GSM modems to send warnings
      an OPC (Ole for Process Control) COM library to connect to existing software

      With these tools I developed an Eclipse RCP application that uses Eclipse GEF to
      visualize the data (show a nice chart and current values).
    `,
    images: [
      {
        image: require("../images/products/Net-HeraldPackung2.png"),
        description: `### The Net-Herald box image`,
        align: "right"
      }
    ]
  },
  {
    position: "Software Developer",
    client: "T-Systems SL SI",
    logo: require("../images/clients/T-Systems.png"),
    start: "2005-01-01",
    end: "2011-09-01",
    link: "https://www.t-systems.com/de/de",
    tags: ["Java", "JBoss", "Oracle"],
    categories: [Categories.Client, Categories.Resume],
    recommendations: [
      {
        title: `Projekt C++ und Java-Programmierung, 07/98 - 03/02`,
        date: "2005-01-03",
        by: "Projektleiter,  T-Systems",
        description: `
        Der Consultant kennt sich gut mit C++ und Java aus, er arbeitet souverän mit den Konzepten 
        objektorientierter Programmierung. Alle Arbeiten wurden zu unserer vollsten Zufriedenheit termingerecht 
        fertiggestellt. Über die konkrete Programmieraufgabe hinaus bewies der Consultant im Rahmen seiner Tätigkeit 
        ein hohes Engagement. Durch ihn wurden Fehler und Verbesserungspotentiale in Anforderungen und Umsetzung aufgezeigt. 
        Er unterstützte seine Kollegen auch über seinen Aufgabenbereich hinaus. Die Zusammenarbeit war sehr angenehm, 
        der Consultant war eine Bereicherung für das Projektteam. Ich würde sehr gern 
        wieder mit dem Consultant zusammenarbeiten.
      `
      },
      {
        title: "Projekt Verschiedene Projekte im Bereich C++ und Java, 11/96 - 01/05",
        date: "2005-02-03",
        by: "Project Center Team Leiter, T-Systems GEI GmbH",
        description: `
          Der Freiberufler verfügt über ein sehr breites Spektrum technologischen Wissens.
          Als Architekt und Entwickler arbeitete er souverän mit den Konzepten objektorientierter Programmierung.
          Alle Arbeiten wurden zu unserer vollsten Zufriedenheit termingerecht fertiggestellt.
          Über die konkrete Programmieraufgabe hinaus bewies er im Rahmen seiner Tätigkeit ein sehr hohes Engagement.
          Durch ihn wurden Fehler und Verbesserungspotentiale in Anforderungen und Umsetzung aufgezeigt.
          Er unterstützte seine Kollegen auch über seinen Aufgabenbereich hinaus. Die Zusammenarbeit war sehr angenehm.
          Er war eine Bereicherung für das Projektteam.
        `
      }
    ],
    short: `*Lots of projects, lots of experience. Java, Oracle & large servers.*`,
    description: `
      As a contractor for T-Systems I was involved in numerous projects:

      __I maintained__ a mid sized Eclipse RCP application that is used in-house in the test department. 
      The application is developed using these technologies: Eclipse RCP EMF: Eclipse Modeling Framework Teneo: 
      Database persistence using Hibernate and Oracle for EMF models JDBC: 
      lower level JDBC programming for a number of features that need direct db access

      __I extended__ an already existing migration framework (which I helped develop some years ago) 
      which is designed for the transformation of mass data.

      One part of the assignment is to extend the core functionality of the framework to fit the current requirements.

      One of my other tasks was the creation of an Eclipse RCP application for the existing DSL (Domain Specific Language). 
      Eclipse Plugins had been written using the XText framework to lift the weight of writing XML files from the authors of the business rules. 
      They now get an updatable RCP application delivered to their machines which they use to write business rules in a domain specific 
      and environmentally clean language. The application will then generate the XML for them.

      __Create__ and extend a Perl based test framework. A complex framework allows quick creation of new test scenarios that will be executed 
      in a distributed manner on Unix machines. I also extended a number of test tools that were developed as Eclipse RCP applications 
      using the Eclipse EMF framework.

      __Design__ and development of a high performance data extraction application.
      The application would read data from multiple Oracle schemas, aggregates it and distributes it into multiple files and other databases.
      The application needs to process millions of records in just a few hours. 
      This level of performance was only possible with careful design and multi threading.

      __We developed__ a fairly complex application that would generate invoices using LaTeX and send them - optionally 
      signed and encrypted - by email to the customer. The application was designed to run in multiple processes, 
      possibly distributed across multiple machines. The distributed C++ components used Corba to communicate. 
      Data was stored in a Oracle database. There also was a self service website written Java and servlet (yuck) technology.
    `
  },
  {
    position: "Java Trainer",
    client: "ML Consulting",
    logo: require("../images/clients/ML-Consulting.svg"),
    start: "2011-09-01",
    end: "2011-12-31",
    link: "https://www.mlgruppe.de/startseite.html",
    tags: ["Java", "Speaking"],
    categories: [Categories.Training],
    description: `
     I was teaching several Java and programming basics courses at ML Consulting Dresden and Berlin. 
     I got very good ratings from my students and the manager of the consulting facility wants me back for more.
    `
  },
  {
    position: "Speaking about Scala and Lift3",
    client: "Scala Days 2013 New York",
    logo: require("../images/clients/ScalaDays2013.png"),
    start: "2013-06-10",
    end: "2013-06-12",
    link: "https://scaladays.org/assets/archive/ny2013/index.html",
    tags: ["Scala", "Speaking"],
    categories: [Categories.Training],
    description: `
     I was giving talks at Scala conferences about my[Lift](https://liftweb.net), the Scala web framework I'm involved with for many years.
    `
  },
  {
    position: "Speaking about Scala and Lift3",
    client: "Scala Exchange 2013 London",
    logo: require("../images/clients/ScalaExchange.png"),
    start: "2013-12-02",
    end: "2013-12-03",
    link: "https://skillsmatter.com/conferences/1765-scala-exchange-2013#program",
    tags: ["Scala", "Speaking"],
    categories: [Categories.Training],
    description: `
     I was giving talks at Scala conferences about my[Lift](https://liftweb.net), the Scala web framework I'm involved with for many years.
    `
  },
  {
    position: "Author of 'Lift Web Applications HowTo'",
    client: "Packt Publishing",
    logo: require("../images/clients/LiftWebAppsHowTo.png"),
    start: "2012-05-01",
    end: "2013-01-31",
    link: "https://www.packtpub.com/web-development/instant-lift-web-applications-how-instant",
    tags: ["Scala", "Authoring"],
    categories: [Categories.Publication],
    description: `
      Together with Pack Publishing I authored a small book about Lift,
      the ['Lift Web Applications HowTo'](https://www.packtpub.com/web-development/instant-lift-web-applications-how-instant).
    `
  },
  {
    position: "Diploma (master equivalent)",
    client: "TU Chemnitz-Zwickau, Germany",
    logo: require("../images/clients/TU-Chemnitz-Zwickau.png"),
    start: "1991-09-01",
    end: "1996-03-31",
    link: "https://www.tu-chemnitz.de/",
    tags: ["Computer Science", "Databases", "Algorithm"],
    categories: [Categories.Education],
    description: `
      I only studied once, so there's not much here. Since I got that programmable calculater in 8th grade 
      I wanted to do something with computers.

      Well and this is what I did. I started computer science at this university and finished it 
      quite successfully 4,5 years later. I started at a big telco company shortly before I finished my study. 
      I never was a fan of just hanging around...    
    `
  },
  {
    position: "Software Developer",
    client: "T-Systems GEI GmbH",
    logo: require("../images/clients/T-Systems.png"),
    start: "1996-03-01",
    end: "1998-04-31",
    link: "https://www.t-systems.com/de/de",
    tags: ["OS/2", "Windows NT", "C++", "PHP", "Cobol", "Java"],
    categories: [Categories.Resume],
    description: `
      Cobol software to convert customer invoices for AFP printer consumption.
      Java based GUI applications to generate specifications for invoice layouts.
    `
  },
  {
    position: "Software Developer",
    client: "G & K Datensysteme GmbH",
    logo: require("../images/clients/GKSoftware.svg"),
    start: "1995-04-01",
    end: "1996-04-31",
    link: "https://www.gk-software.com",
    tags: ["MS-DOS", "C", "Pascal"],
    categories: [Categories.Client, Categories.Resume],
    description: `
      Development of drivers and associated software for retail cash registers,
      scanners and printers used in combination with the client's software.
    `
  },
  {
    position: "Software Developer",
    client: "Leicher GmbH",
    logo: require("../images/clients/Leicher.jpg"),
    start: "1994-02-01",
    end: "1994-04-31",
    link: "https://www.leicher.de/",
    tags: ["MS-DOS", "C++"],
    categories: [Categories.Client, Categories.Resume],
    description: `
      Development of a converter software that converts between the Datanorm standard
      and an in house used softwae standard.
    `
  },
  {
    position: "Software Developer",
    client: "Jahn Büroorganisation",
    logo: require("../images/clients/JahnBueroorganisation.png"),
    start: "1993-03-01",
    end: "1993-06-31",
    link: "https://www.jahn-gmbh.de/",
    tags: ["MS-DOS", "Pascal"],
    categories: [Categories.Client, Categories.Resume],
    description: `
      Development of a management software for printers / copiers leased by the client
      to its customers.
    `
  }
] as StoryData[])
  .map(prepareData)
  .sort(sortByDate)
