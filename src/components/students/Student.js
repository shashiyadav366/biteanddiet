import { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { getStudent, clearStudent } from "../../redux/features/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student.student);
  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, []);
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
       Name: {student.firstName} {student.lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
       Phone: {student.phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
       Email: {student.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
       Address: {student.address}
      </Typography>
      <Typography variant="h5" gutterBottom>Age: {student.age}</Typography>
      <Typography variant="h5" gutterBottom>Height: {student.height}</Typography>
      <Typography variant="h5" gutterBottom>Weight: {student.weight}</Typography>
      <Typography variant="h5" gutterBottom>Health Discription: {student.healthissue}</Typography>
      <Typography variant="h5" gutterBottom>Diet Plan: {student.dietplan}</Typography>
    </Paper>
  );
};

export default Student;
