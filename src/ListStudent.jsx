import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "./Studentslice.js";

const ListStudent = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Alamat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.nama}</td>
            <td>{s.kelas}</td>
            <td>{s.alamat}</td>
            <td>
              <button onClick={() => dispatch(removeStudent(s.id))}>
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListStudent;