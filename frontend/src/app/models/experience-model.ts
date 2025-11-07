export interface ExperienceModel {
    id: number;
    role: string;
    company: string;
    startYear: number;
    endYear: number | 'Present';
    description: string;
}
