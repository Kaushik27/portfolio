import { SkillCategory } from "../models/skills/skill.model";

export const skillSet: SkillCategory[] = [
  {
    category: "Back End",
    skills: [
      { skill: "Spring Boot", score: 70, icon: "bxl:spring-boot" },
      { skill: "ExpressJs", score: 60, icon: "bxl:javascript" },
      { skill: "Microservices", score: 80, icon: "carbon:edge-cluster" },
    ],
  },
  {
    category: "Security",
    skills: [
      { skill: "Spring Security", score: 60, icon: "bxl:spring-boot" },
      { skill: "Okta", score: 60, icon: "simple-icons:okta" },
    ],
  },
  {
    category: "Build Tools",
    skills: [
      { skill: "Maven", score: 70, icon: "simple-icons:apachemaven" },
      { skill: "Gradle", score: 60, icon: "simple-icons:gradle" },
    ],
  },
  {
    category: "CICD",
    skills: [
      { skill: "Sonar Qube", score: 60, icon: "simple-icons:sonarqube" },
      { skill: "Jenkins", score: 60, icon: "simple-icons:jenkins" },
      { skill: "Argo CD", score: 70, icon: "logos:argo-icon" },
    ],
  },
  {
    category: "Containerization",
    skills: [
      { skill: "Kubernetes", score: 60, icon: "simple-icons:kubernetes" },
      { skill: "Docker", score: 80, icon: "bxl:docker" },
      { skill: "ECS", score: 80, icon: "bxl:react" },
    ],
  },
  {
    category: "Artifactories & Repositories",
    skills: [
      { skill: "JFrog", score: 60, icon: "simple-icons:jfrog" },
      { skill: "Nexus", score: 60, icon: "logos:nexus" },
      { skill: "Git", score: 60, icon: "bxl:git" },
    ],
  },
  {
    category: "Orchestration Tools",
    skills: [
      { skill: "Terraform", score: 70, icon: "simple-icons:terraform" },
      { skill: "CloudFormation", score: 70, icon: "ph:file-cloud-bold" },
    ],
  },
  {
    category: "Cloud",
    skills: 
    [
      { skill: "AWS", score: 80, icon: "bxl:aws" },
      { skill: "Azure", score: 80, icon: "bxl:azure" },
    ],
  },
];

export const profile = {
  personal: {
    firstName: "Kaushik",
    lastName: "Mandal",
    birthDate: "27/01/1993",
    contact: {
      mobile: "+91-9458612315",
      email: "kaushikmandal275@gmail.com",
      gitHub: "https://github.com/Kaushik27",
      linkedIn: "https://www.linkedin.com/in/kaushik-mandal-11a89b25",
      twitter: "https://twitter.com/kaushik0505",
      instagram: "https://www.instagram.com/ikmandal",
    },
    education: [
      // TODO: Introduce education comoponent in the future.
      {
        role: "High School",
        organization: "Central Board of Secondary Education",
        description: "",
        skills: [],
        duration: "Apr 2009 - Mar 2010",
      },
      {
        role: "Intermediate",
        organization: "Central Board of Secondary Education",
        description: "",
        skills: [],
        duration: "Apr 2010 - Mar 2011",
      },
      {
        role: "B. Tech.",
        organization: "Uttar Pradesh Technical University",
        description: "",
        skills: [],
        duration: "Apr 2011 - May 2015",
      },
    ],
  },
  professional: {
    resume: `${process.env.PUBLIC_URL}/Kaushik Mandal Resume.pdf`,
    experiences: [
      {
        role: "Software Engineer",
        organization: "Capgemini India",
        duration: "Dec 2015 - Jun 2018",
        description:
          "Facilitated user to upload multiple cheques at a time using a bulk upload functionality, followed by compliance checking and reporting.",
        skills: ["Java", "Spring Boot", "AngularJs", "PCF", "Spring Batch"],
      },
      {
        role: "Software Analyst",
        organization: "Principal Financial Group",
        duration: "Jun 2018 - Mar 2021",
        description:
          " Developed a business feature called FDX to fetch financial information from our mainframe and cloud admin systems. Designed and implemented payment integrations (EFT, check, cash and refund) for the policy administration product.",
        skills: ["Java", "Spring Boot", "Microservices", "Azure", "DevOps"],
      },
      {
        role: "Lead Software Engineer",
        organization: "EPAM Systems",
        duration: "Sep 2021 - Present",
        description:
          "Developing backend microservices for EEM Admin platform that facilitates accessibility and inter-communication with AWS resources or multiple other services.",
        skills: ["Java", "Spring Boot", "Microservices", "Kubenetes", "AWS"],
      },
    ],
    allSkills: skillSet,
  },
};
