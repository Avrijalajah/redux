import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./Studentslice.js";

const AddStudent = () => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addStudent(nama, kelas, alamat));

    setNama("");
    setKelas("");
    setAlamat("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />
      <input
        type="text"
        placeholder="Alamat"
        value={alamat}
        onChange={(e) => setAlamat(e.target.value)}
      />
      <button type="submit">Simpan</button>
    </form>
  );
};

export default AddStudent;