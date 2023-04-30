namespace Dorkodu {
  export interface WorkRole {
    title: string;
    icon?: React.ReactNode;
    domain: string;
    tags: string[];
    summary?: string;
    location: string;
    type: string;
    responsibility?: string[];
    requirements?: string[];
  }

  export interface TeamMember {
    name: string;
    title: string;
    about?: string;
    avatar?: string;
    icons?: React.ReactNode;
    tags?: string[];
  }

  export interface Project {
    title: string;
    tagline?: string;
    description?: string;
    type?: string;
    image?: string;
    icon?: React.ReactNode;
    link?: string;
  }

  export interface ContactInfo {
    type: string;
    link: string;
    address: string;
    icon?: React.ReactNode;
    description?: string;
  }
}

export default Dorkodu;
