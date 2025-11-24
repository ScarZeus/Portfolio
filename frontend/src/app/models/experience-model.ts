export interface ExperienceModel {
    id: number;
    role: string;
    company: string;
    startYear: string;
    endYear: string | 'Present';
    description: string;
}
