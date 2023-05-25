import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/calculadora.png"
import ProjectImg2 from '../assets/lab8.png'
import ProjectImg3 from '../assets/ubereats.png'
import ProjectImg4 from '../assets/software.png'
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  google: Google,
  verizon: Verizon,
};

export enum Constants {
  USERNAME = "José Auyón",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "lab 9 calculadora": ProjectImg,
  "lab 8": ProjectImg2,
  "proyecto ubereats": ProjectImg3,
  "proyecto software" : ProjectImg4
};
