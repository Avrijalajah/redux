import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  students: []
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: {
      reducer: (state, action) => {
        state.students.push(action.payload);
      },
      prepare: (nama, kelas, alamat) => ({
        payload: {
          id: nanoid(),
          nama,
          kelas,
          alamat
        }
      })
    },

    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },

    updateStudent: (state, action) => {
      state.students = state.students.map((student) =>
        student.id === action.payload.id
          ? { ...student, ...action.payload }
          : student
      );
    }
  }
});

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;