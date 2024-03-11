export interface ISearchUserExistProps {
  field: string;
  value: string;
  field_exceptions?: string[];
}

export interface ISearchUserExistExceptions {
  [key: string]: number;
}
