export interface EducationModel {
    id:number;
    degree: string;
    institution: string;
    startYear: number;
    endYear: number | 'Present';
}
