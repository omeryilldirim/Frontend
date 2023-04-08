
interface TodoType {
    id: number | string;
    task: string;
    isCompleted: boolean;
  }

  type AddFn = (text:string) => void;

  type ToggleFn = (item:TodoType) => void;
  
  type DeleteFn = (id:string | number ) => void;