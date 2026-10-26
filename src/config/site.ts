export const productName = "LuminfyEdu (E-managment System)";
import  AttendenceImg from '../images/Attendence.jpg'
import  StudyPlanImg from '../images/StudyPlan.jpg'
import TopicsCover from '../images/TopicCoverege.jpg'
import progressImg from '../images/progress.jpg';
import SuperAdmin from '../images/SuperAdminRole.jpg'
import Parent from '../images/ParentRole.jpg'
import student from '../images/studentRole.jpg'




type ImageSource = string | string[];

export const navigation = [
  { label: "Introduction", href: "#introduction" },
  { label: "Problem", href: "#problem" },
  { label: "Objectives", href: "#objectives" },
  { label: "Features", href: "#features" },
  { label: "Audience", href: "#audience" },
];

export const clients: {
  number: string;
  shortTitle: string;
  description: string;
  imageUrl: ImageSource;
  Link: string;
}[] = [
  {
    number: "01",
    shortTitle: "Backtawar Cadet College",
    description:
      "Backtawar Cadet College uses LuminfyEdu to support attendance tracking, study planning, classroom updates, student performance monitoring, and communication between the school and parents.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2pfEDriCMxDO56p0wyk1f5GvOgPfE-lWXipqbcB5xg&s=10",
    Link:'https://beta.bccgcms.com'
  },
];




export const features: {
  number: string;
  shortTitle: string;
  description: string;
  imageUrl: ImageSource;
}[] = [
  {
    number: "01",
    shortTitle: "Attendance",
    description: "Helps schools record and monitor student attendance.",
    imageUrl:AttendenceImg,
  },
  {
    number: "02",
    shortTitle: "Study planning",
    description:
      "Supports the organization of study plans and learning activities.", 
    imageUrl:StudyPlanImg
  },
  {
    number: "03",
    shortTitle: "Topic coverage",
    description:
      "Helps parents understand which topics have been covered in the classroom.",
    imageUrl:TopicsCover,
  },
  {
    number: "04",
    shortTitle: "progress",
    description:
      "Supports the review of tests and identification of students’ weak academic areas.",
    imageUrl:progressImg,
  },
  {
    number: "05",
    shortTitle: "Role-based management",
    description:
      "Provides separate roles for students, parents, teachers, examination staff, inventory management, and other school-specific requirements.",
    imageUrl:[student,Parent,SuperAdmin]
  },
  {
    number: "06",
    shortTitle: "School–parent communication",
    description:
      "Bridges the information gap between schools and parents by making educational progress more visible.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIlSPwDFzVZgy04dXrBpxSBsVGq7nfLzhm3Z4z00IWpXluZoHs5CK5v7-&s=10",
  },
];

export const audiences = [
  { name: "School administrators", initials: "AD" },
  { name: "Teachers", initials: "TE" },
  { name: "Students", initials: "ST" },
  { name: "Parents", initials: "PA" },
  { name: "Examination staff", initials: "EX" },
  { name: "Relevant management personnel", initials: "MG" },
];

export const objectives = [
  "Improve communication between schools and parents.",
  "Help parents monitor their children’s educational progress.",
  "Support attendance tracking and study planning.",
  "Enable schools to monitor student assessments and identify learning gaps.",
  "Organize school activities through role-based access and management.",
];

export const marketingFocus = [
  "Improved parent engagement",
  "Attendance monitoring",
  "Study planning",
  "Classroom topic tracking",
  "Student performance visibility",
];
