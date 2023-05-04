export interface IForm {
  title: string;
  desc: string;
  questions: IQuestion[];
  responden: number;
  is_open: boolean;
  created_at: Date;
}

export interface IQuestion {
  id: number;
  title: string;
  //   type: "text" | "checkbox" | "radio" | "scale";
  type: string;
  required: Boolean;
  options: string[];
}
