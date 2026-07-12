export type StudioClass = {
  name: string;
  ageRange: string;
  level: string;
  day: string;
  time: string;
  instructor: string;
  tuition: string;
  trialClassAvailable: boolean;
  description: string;
  sourceNote: string;
};

export type ScheduleItem = {
  day: string;
  time: string;
  className: string;
  ages: string;
  instructor: string;
  studio: string;
};

export type StaffMember = {
  name: string;
  role: string;
  bio: string;
  credentials: string;
  classesTaught: string;
  sourceNote: string;
};

export const siteContent = {
  studio: {
    name: "Dance Speaks Performing Arts Academy",
    shortName: "Dance Speaks",
    location: "Lemon Grove and the San Diego area",
    enrollmentNotice: "Now Enrolling For 2026",
    description:
      "Dance Speaks Performing Arts Academy provides welcoming, professional dance education for children, teens, and adults in Lemon Grove and the San Diego area.",
    qualities: [
      "Family-friendly",
      "Inclusive",
      "Community-oriented",
      "Professional dance education",
      "Military spouse-owned"
    ],
    phaseNotice:
      "Phase 1 public website. Family accounts, enrollments, payments, attendance, messaging, and studio administration are reserved for future phases."
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Academy", href: "#academy" },
    { label: "Our Story", href: "#story" },
    { label: "Our Team", href: "#team" },
    { label: "Enroll", href: "#enroll" },
    { label: "Donate", href: "#donate" },
    { label: "Join Our Team", href: "#join" },
    { label: "Contact", href: "#contact" },
    { label: "Schedule", href: "#schedule" }
  ],
  mission: {
    vision:
      "To expand dance and performing arts exposure throughout all socioeconomic levels and communities, and to stand as an advocate for improving diversity in ballet and all genres of dance.",
    mission:
      "To provide students from diverse backgrounds the opportunity to explore their creative potential while also imparting life skills such as teamwork and discipline.",
    commitment:
      "Dance Speaks welcomes students of all experience levels and backgrounds, and uses performing arts as a vehicle for physical health, self-esteem, creativity, comprehension, and emotional expression.",
    sourceNote:
      "Mission and vision wording adapted from the current public website; final approved mission should replace this text when supplied."
  },
  academy: {
    headline: "Education, wellness, confidence, creativity",
    intro:
      "Students receive professional instruction in classical and neoclassical ballet, contemporary and lyrical dance, jazz, and modern technique with a focus on alignment, strength, discipline, flexibility, coordination, creativity, and musicality.",
    curriculum:
      "The dance program uses a unified curriculum rooted in classical techniques including Cecchetti, Vaganova, ABT, Horton, Dunham, and Fosse, while nurturing critical thinking, listening skills, confidence, and self-expression.",
    sourceNote:
      "Academy and curriculum copy adapted from the current public website and should be verified before final launch."
  },
  classes: [
    {
      name: "Beginning Ballet",
      ageRange: "5-7",
      level: "Beginner",
      day: "Tuesday",
      time: "4:30 PM-5:30 PM",
      instructor: "Jane Smith",
      tuition: "TBD",
      trialClassAvailable: true,
      description: "Approved class description pending.",
      sourceNote: "Provided repository planning material; tuition and description pending."
    },
    {
      name: "Teen Contemporary",
      ageRange: "13-17",
      level: "Intermediate",
      day: "Thursday",
      time: "6:00 PM-7:30 PM",
      instructor: "John Smith",
      tuition: "TBD",
      trialClassAvailable: true,
      description: "Approved class description pending.",
      sourceNote: "Provided repository planning material; tuition and description pending."
    }
  ] satisfies StudioClass[],
  scheduleLastVerified: "July 2026",
  schedule: [
    {
      day: "Monday",
      time: "4:30 PM",
      className: "Beginning Ballet",
      ages: "5-7",
      instructor: "Jane Smith",
      studio: "Studio A"
    },
    {
      day: "Tuesday",
      time: "6:00 PM",
      className: "Teen Contemporary",
      ages: "13-17",
      instructor: "John Smith",
      studio: "Studio A"
    }
  ] satisfies ScheduleItem[],
  staff: [
    {
      name: "Angela Example",
      role: "Founder and Artistic Director",
      bio: "Approved biography pending.",
      credentials: "Only verified credentials should be listed here.",
      classesTaught: "Ballet, Modern",
      sourceNote: "Provided repository planning placeholder; verify before launch."
    },
    {
      name: "Lene Bostick",
      role: "Owner / Founder",
      bio: "Founder biography is available on the current public website and should be approved into repository source material before final publication.",
      credentials: "Current website-sourced credentials pending verification.",
      classesTaught: "Studio leadership and performing arts education",
      sourceNote: "Current website source; pending repository verification."
    },
    {
      name: "Jessica Marshall",
      role: "Instructor",
      bio: "Instructor biography is available on the current public website and should be approved into repository source material before final publication.",
      credentials: "Current website-sourced credentials pending verification.",
      classesTaught: "Tiny Tots program and contemporary worship support",
      sourceNote: "Current website source; pending repository verification."
    }
  ] satisfies StaffMember[],
  actions: {
    enroll: {
      label: "Enrollment link pending",
      href: "https://www.dancespeaksacademy.com/youthclasses",
      note: "Current website class enrollment page; final enrollment form URL should be confirmed."
    },
    donate: {
      label: "Donate",
      href: "https://www.dancespeaksacademy.com/donate",
      note: "Current website donation page; final donation URL should be confirmed."
    },
    join: {
      label: "Join our team",
      href: "https://www.dancespeaksacademy.com/join-our-team",
      note: "Current website team page; final hiring URL should be confirmed."
    }
  },
  contact: {
    email: "dancespeaksacademy@gmail.com",
    phone: "919-791-7450",
    address: "2615 Lemon Grove Ave., Lemon Grove, CA 91945",
    addressNote:
      "Current website contact page lists 2615 Lemon Grove Ave.; footer lists 2613-15 Lemon Grove Ave. Address should be verified.",
    facebook: "https://www.facebook.com/dancespeaksacademy",
    instagram: "https://www.instagram.com/dancespeaksacademy"
  }
};
