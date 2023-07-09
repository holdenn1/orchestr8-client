export type InitialStateMainSlice = {
  modalVisible: boolean;
  selectedOption: {
    sort: string;
    category: string;
  };
  projectMenu:{
    complete: boolean
    suspend:boolean
  }
};
