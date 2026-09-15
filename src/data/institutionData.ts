export interface InstitutionData {
  schoolName: string;
  coachingName: string;
  principalName: string;
  contactNumber: string;
  whatsappNumber: string;
  schoolGrades: string;
  schoolPattern: string;
  coachingGrades: string;
  medium: string;
  streams: string[];
  competitiveExams: string[];
  address: {
    spot: string;
    village: string;
    road: string;
    district: string;
    state: string;
    pin: string;
    full: string;
  };
}

export const INSTITUTION_INFO: InstitutionData = {
  schoolName: "MG ORIENTAL SCHOOL",
  coachingName: "NEW ERA COACHING CENTRE",
  principalName: "Zaif Akhtar",
  contactNumber: "9934795178",
  whatsappNumber: "919934795178",
  schoolGrades: "Nursery to VIII",
  schoolPattern: "CBSE Pattern",
  coachingGrades: "Nursery to XII",
  medium: "Hindi + English",
  streams: ["Science", "Commerce", "Arts"],
  competitiveExams: ["Polytechnic", "Paramedical"],
  address: {
    spot: "22 Mile Chok",
    village: "Tejpurwa",
    road: "Mahua Road",
    district: "Vaishali",
    state: "Bihar",
    pin: "843102",
    full: "22 Mile Chok, Tejpurwa, Mahua Road, Vaishali, Bihar – 843102"
  }
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "School", href: "#school" },
  { name: "Coaching", href: "#coaching" },
  { name: "Academics", href: "#academics" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#contact" },
];
