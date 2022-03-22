import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getStudent,
  clearStudent,
  updateStudent,
} from "../../redux/features/studentSlice";

const EditStudent = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      age: "",
      height: "",
      weight: "",
      healthissue: "",
      dietplan: "",
    },
  });

  const params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, []);

  useEffect(() => {
    reset(student);
  }, [student]);

  const onSubmit = (data) => {
    dispatch(updateStudent(data));
    history.push("/");
  };
  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="age"
            render={({ field }) => (
              <TextField
                id="age"
                label="Age"
                variant="outlined"
                placeholder="Enter Your age"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="height"
            render={({ field }) => (
              <TextField
                id="height"
                label="Height"
                variant="outlined"
                placeholder="Enter Your height"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="weight"
            render={({ field }) => (
              <TextField
                id="height"
                label="Weight"
                variant="outlined"
                placeholder="Enter Your weight"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="healthissue"
            render={({ field }) => (
              <TextField
                id="healthissue"
                label="Health Issue"
                variant="outlined"
                placeholder="Health Description"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="dietplan"
            render={({ field }) => (
              <TextField
                id="dietplan"
                label="Diet Plan"
                variant="outlined"
                placeholder="Diet plan opt"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Button type="submit">Update Customer</Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditStudent;
