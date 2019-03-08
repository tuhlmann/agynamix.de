import {prepareData, sortByDate, ClientData} from "../lib/prepare-client-data"

// import ascendant from "../images/clients/Ascendant.svg"
// import mewe from "../images/clients/MeWe.png"

// tslint:disable:no-require-imports
export default ([
  {
    position: "Senior Software Developer",
    client: "Ascendant, Inc",
    logo: require("../images/clients/Ascendant.svg"),
    start: "2013-07-01",
    end: "2019-02-28",
    url: "https://www.ascendantcompliancemanager.com",
    tags: ["Scala", "Lift", "GO", "AngularJS", "Javascript", "MarkoJS", "Docker", "MongoDB"],
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
    url: "https://underscore.io",
    tags: ["Scala", "Lift", "MongoDB", "Cloudbees"],
    description: `
     I was in charge of developing part of a Scala / Lift client application
     together with a really cool team of Underscore developers.
    `
  },
  {
    position: "Senior Software Developer",
    client: "Sgrouples, Inc",
    logo: require("../images/clients/MeWe.png"),
    start: "2011-09-01",
    end: "2012-09-01",
    url: "https://www.mewe.com",
    tags: ["Scala", "Lift", "Javascript", "MongoDB"],
    description: `
     With a small bunch of other high profile developers we develop the social groups 
     platform https://sgrouples.com (now: https://mewe.com).
    `
  },
  {
    position: "JSF Developer",
    client: "1822direct Sparkasse",
    logo: require("../images/clients/Sparkasse_1822.png"),
    start: "2009-04-01",
    end: "2009-07-01",
    url: "https://www.1822direkt.de",
    tags: ["Java", "JBoss", "Tomcat", "JSF"],
    description: `
      Development of a JSF(Java Server Faces) front end for an in house application to manage correspondence to their customers.
      We used Tomcat 5, JBoss and JSF 1.2 with MyFaces for development and deployment.    
    `
  },
  {
    position: "Software Developer",
    client: "T-Systems SL SI",
    logo: require("../images/clients/T-Systems.png"),
    start: "2005-07-01",
    end: "2011-09-01",
    url: "https://www.t-systems.com/de/de",
    tags: ["Java", "JBoss", "Oracle"],
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
  }
] as ClientData[])
  .map(prepareData)
  .sort(sortByDate)
