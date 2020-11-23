export interface Skills {
  title: string;
  img: string;
  id?: number;
  text?: string;
  animation?: string;
  progressLevel?: any;
}

export interface Project {
  title: string;
  shortText: string;
  fullText: string;
  imgDesktop: string;
  imgRwd: string;
  gitURL: string;
  pageURL: string;
  id?: number;
}

export interface contactMessageInfo {
  name: string;
  email: string;
  message: string;
}
