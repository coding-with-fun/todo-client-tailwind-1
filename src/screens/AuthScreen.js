import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const useStyles = makeStyles((theme) => ({
    inputField: {
        margin: theme.spacing(1, 0),
    },

    submitButton: {
        margin: theme.spacing(1, 0),
    },
}));

const AuthScreen = ({ authFlag }) => {
    const { handleUserAuthentication } = useContext(UserContext);
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        shouldFocusError: true,
    });

    useEffect(() => {
        reset();
        // eslint-disable-next-line
    }, [authFlag]);

    const onSubmit = (data) => {
        console.log(data);

        // !TODO: Call API for authentication
        handleUserAuthentication("Abc");
    };

    return (
        <div className="container mx-auto sm:w-1/2 w-3/4">
            <h1 className="my-4 text-center text-4xl">
                {authFlag ? <span>Sign Up</span> : <span>Sign In</span>}
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center"
            >
                {authFlag ? (
                    <TextField
                        className={classes.inputField}
                        variant="outlined"
                        margin="dense"
                        placeholder="Enter name"
                        fullWidth
                        label="Name"
                        name="name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                    />
                ) : null}

                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    margin="dense"
                    placeholder="Enter username"
                    fullWidth
                    label="Username"
                    name="username"
                    {...register("username", {
                        required: "Username is required",
                    })}
                    error={Boolean(errors.username)}
                    helperText={errors.username?.message}
                />

                {authFlag ? (
                    <TextField
                        className={classes.inputField}
                        variant="outlined"
                        margin="dense"
                        placeholder="Enter email"
                        fullWidth
                        label="Email"
                        email="email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                    />
                ) : null}

                <TextField
                    className={classes.inputField}
                    variant="outlined"
                    margin="dense"
                    placeholder="Enter password"
                    fullWidth
                    label="Password"
                    password="password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                />

                {authFlag ? (
                    <TextField
                        className={classes.inputField}
                        variant="outlined"
                        margin="dense"
                        placeholder="Enter confirmation password"
                        fullWidth
                        label="Confirm Password"
                        email="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                        })}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword?.message}
                    />
                ) : null}

                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    className={classes.submitButton}
                >
                    {authFlag ? <span>Sign Up</span> : <span>Sign In</span>}
                </Button>
            </form>
        </div>
    );
};

export default AuthScreen;
