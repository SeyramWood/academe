import { Inertia } from "@inertiajs/inertia";
import React from "react";
import useFormValidation from "../components/form/useFormValidation";
import { Puff } from "../components/Spinner";
const account = {
    STATE: {
        userId: "",
        password: "",
        password_confirmation: "",
        email: ""
    },
    RULES: {
        userId: "required|string|min:3",
        password: "required|min:6|max:16",
        password_confirmation:
            "required>The confirm password field is required|min:6>The confirm password must be 6 characters minimum|max:16>The confirm password must be 16 characters maximum",
        email: "required|email"
    }
};

const Welcome = props => {
    const [active, setActive] = React.useState(false);
    const [IDAuthenticated, setIDAuthenticated] = React.useState(false);
    const [accountType, setAccountType] = React.useState("");
    const [userType, setUserType] = React.useState("");
    const {
        state: values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        updateIsSubmitting,
        errors,
        clearValues,
        setServerErrors
    } = useFormValidation(account.STATE, account.RULES, createAccount);
    const {
        state: authId,
        handleChange: authChange,
        handleBlur: authBlur,
        handleSubmit: authSubmit,
        isSubmitting: authSubmitting,
        updateIsSubmitting: authUpdateIsSubmitting,
        errors: authErrors,
        clearValues: authClear,
        setServerErrors: authSetErrors
    } = useFormValidation(
        { userId: "" },
        { userId: "required|string|min:3" },
        authenticateId
    );
    const {
        state: login,
        handleChange: loginChange,
        handleBlur: loginBlur,
        handleSubmit: loginSubmit,
        isSubmitting: loginSubmitting,
        errors: loginErrors,
        clearValues: loginClear,
        setServerErrors: loginSetErrors
    } = useFormValidation(
        { userId: "", password: "" },
        { userId: "required|string|min:3", password: "required|string" },
        loginUser
    );

    const showAccountForm = type => {
        setAccountType(type);
        setActive(true);
    };
    const clearAccountForm = type => {
        setActive(false);
        setAccountType(type);
        clearValues();
        setServerErrors();
    };
    const checkLoginUserId = id => {
        const student1 = /^375/;
        const student2 = /^348/;
        const faculty = /^388/;
        if (student1.exec(id) || student2.exec(id)) {
            setUserType("student");
            return true;
        } else if (faculty.exec(id)) {
            setUserType("faculty");
            return true;
        }
        setUserType("");
        return false;
    };

    function authenticateId() {
        if (checkLoginUserId(authId.userId)) {
            setTimeout(() => {
                login.userId = authId.userId;
                setIDAuthenticated(true);
                authUpdateIsSubmitting(false);
            }, 1000);
        } else {
            setTimeout(() => {
                authSetErrors({
                    userId: "Invalid user ID"
                });
            }, 1000);
            setTimeout(() => {
                authUpdateIsSubmitting(false);
            }, 3000);
        }
    }
    function loginUser() {
        const data = { ...login, userType };
        Inertia.post("/signin", data, {
            errorBag: "signin",
            onSuccess: page => {},
            onError: error => {
                error.userId && loginSetErrors({ userId: error.userId });
                error.password && loginSetErrors({ password: error.password });
            }
        });
    }
    function createAccount() {
        const student1 = /^375/;
        const student2 = /^348/;
        const faculty = /^388/;
        if (accountType === "student") {
            if (!student1.exec(values.userId)) {
                if (!student2.exec(values.userId)) {
                    setTimeout(() => {
                        setServerErrors({
                            userId:
                                "Invalid user ID, ID must start with 375 or 348"
                        });
                    }, 1000);
                    return;
                }
            }
        }
        if (accountType === "faculty") {
            if (!faculty.exec(values.userId)) {
                setTimeout(() => {
                    setServerErrors({
                        userId: "Invalid user ID, ID must start with 388"
                    });
                }, 1000);
                return;
            }
        }
        const userID = accountType === "faculty" ? "faculty_id" : "student_id";
        const data = {
            [userID]: values.userId,
            password: values.password,
            password_confirmation: values.password_confirmation,
            email: values.email,
            accountType
        };
        Inertia.post("/create-account", data, {
            errorBag: "createAccount",
            onSuccess: page => {
                updateIsSubmitting(false);
            },
            onError: error => {
                updateIsSubmitting(false);
                setServerErrors({
                    userId:
                        error.student_id || error.faculty_id
                            ? error.student_id || error.faculty_id
                            : "",
                    password: error.password ? error.password : "",
                    email: error.email ? error.email : ""
                });
            }
        });
    }

    return (
        <div className="login__wrapper">
            <div
                className={`container ${active ? "right-panel-active" : ""}`}
                id="container"
            >
                <div className="form-container sign-up-container">
                    {accountType === "student" && (
                        <form
                            action="#"
                            className="account signup-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="logo-container">
                                <div className="logo-container-logo">
                                    <img
                                        src="/storage/logo/lancaster-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <h1>Create Your Student Account</h1>
                            <input
                                type="text"
                                name="userId"
                                placeholder="Student ID"
                                className={
                                    errors.userId && errors.userId.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userId}
                            />
                            {errors.userId && (
                                <p className="error-message">{errors.userId}</p>
                            )}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={
                                    errors.password &&
                                    errors.password.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && (
                                <p className="error-message">
                                    {errors.password}
                                </p>
                            )}
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                className={
                                    errors.password_confirmation &&
                                    errors.password_confirmation.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password_confirmation}
                            />
                            {errors.password_confirmation && (
                                <p className="error-message">
                                    {errors.password_confirmation}
                                </p>
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={
                                    errors.email && errors.email.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
                            <button className="mt-3">Sign Up</button>
                        </form>
                    )}
                    {accountType === "faculty" && (
                        <form
                            action="#"
                            className="account signup-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="logo-container">
                                <div className="logo-container-logo">
                                    <img
                                        src="/storage/logo/lancaster-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <h1>Create Your Faculty Account</h1>
                            <input
                                type="text"
                                name="userId"
                                placeholder="Faculty ID"
                                className={
                                    errors.userId && errors.userId.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userId}
                            />
                            {errors.userId && (
                                <p className="error-message">{errors.userId}</p>
                            )}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={
                                    errors.password &&
                                    errors.password.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && (
                                <p className="error-message">
                                    {errors.password}
                                </p>
                            )}
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                className={
                                    errors.password_confirmation &&
                                    errors.password_confirmation.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password_confirmation}
                            />
                            {errors.password_confirmation && (
                                <p className="error-message">
                                    {errors.password_confirmation}
                                </p>
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={
                                    errors.email && errors.email.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
                            <button className="mt-3" type="submit">
                                Sign Up
                            </button>
                        </form>
                    )}
                </div>
                <div className="form-container sign-in-container">
                    {!IDAuthenticated && (
                        <form
                            className="account login-form"
                            onSubmit={authSubmit}
                        >
                            <div className="logo-container">
                                <div className="logo-container-logo">
                                    <img
                                        src="/storage/logo/lancaster-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="login-info">
                                <div className="login-info-info">
                                    <strong>Student:</strong>
                                    <span>Please use your student ID</span>
                                </div>
                                <div className="login-info-info">
                                    <strong>Faculty:</strong>
                                    <span>Please use your faculty ID</span>
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter user ID"
                                name="userId"
                                className={
                                    authErrors.userId &&
                                    authErrors.userId.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={authChange}
                                onBlur={authBlur}
                                value={authId.userId}
                            />
                            {authErrors.userId && (
                                <p className="error-message">
                                    {authErrors.userId}
                                </p>
                            )}
                            <button
                                className="mt-3"
                                type="submit"
                                disabled={authSubmitting}
                            >
                                <span>
                                    {authSubmitting
                                        ? "Authenticating..."
                                        : "Authenticate"}
                                </span>
                            </button>

                            <a href="#">Forgot your password?</a>
                        </form>
                    )}
                    {IDAuthenticated && (
                        <form
                            action="#"
                            className="account login-form"
                            onSubmit={loginSubmit}
                        >
                            <div className="logo-container">
                                <div className="logo-container-logo">
                                    <img
                                        src="/storage/logo/lancaster-1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="login-info">
                                <div className="login-info-info">
                                    <strong>Student:</strong>
                                    <span>Please use your student ID</span>
                                </div>
                                <div className="login-info-info">
                                    <strong>Faculty:</strong>
                                    <span>Please use your faculty ID</span>
                                </div>
                            </div>

                            <input
                                type="text"
                                placeholder="User ID"
                                name="userId"
                                className={
                                    loginErrors.userId &&
                                    loginErrors.userId.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={loginChange}
                                onBlur={loginBlur}
                                value={login.userId}
                            />
                            {loginErrors.userId && (
                                <p className="error-message">
                                    {loginErrors.userId}
                                </p>
                            )}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={
                                    loginErrors.password &&
                                    loginErrors.password.length > 0
                                        ? "invalid-input"
                                        : ""
                                }
                                onChange={loginChange}
                                onBlur={loginBlur}
                                value={login.password}
                            />
                            {loginErrors.password && (
                                <p className="error-message">
                                    {loginErrors.password}
                                </p>
                            )}
                            <button className="mt-3" type="submit">
                                Sign In
                            </button>

                            <a href="#">Forgot your password?</a>
                        </form>
                    )}
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button
                                className="ghost"
                                id="signIn"
                                onClick={clearAccountForm}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Create Account</h1>
                            <p>Enter personal details to create new account</p>
                            <div className="sign-up-btns">
                                <button
                                    className="ghost"
                                    id="signUp"
                                    onClick={() => showAccountForm("student")}
                                >
                                    Student
                                </button>
                                <button
                                    className="ghost"
                                    id="signUp"
                                    onClick={() => showAccountForm("faculty")}
                                >
                                    Faculty
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
