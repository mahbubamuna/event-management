import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const Register = () => {

    const [success, setSuccess] = useState();
    const [loginError, setLoginError] = useState();

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setSuccess('');
        setLoginError('');

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('Registered successfully')
        })
        .catch(error=>{
            console.error(error)
            setLoginError(error.message)
        })
        
    }
    return (
        <div>
            <div className=" text-center" >
            <h1 className="pt-10 font-lobstar font-bold text-3xl">Register Now</h1>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto border rounded-md my-8 bg-[#D9C6BF] font-josefin text-xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered"  />
                   
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photo URL" name="photo" className="input input-bordered"  />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control my-6">
                    <button className="btn btn-neutral ">Login</button>
                </div>
                {
                    success && <p className="text-green-700 ">{success}</p>
                }
                {
                    loginError && <p className="text-red-500 ">{loginError}</p>
                }
                <p>Already have an account? <Link to="/login" className="font-bold font-lobstar text-[#b35182]" >Log in</Link></p>
            </form>
            

        </div>
        </div>
    );
};

export default Register;