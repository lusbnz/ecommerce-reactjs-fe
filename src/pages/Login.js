import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-start grid place-items-center lg:place-items-start">
          <h2 className="text-4xl md:text-6xl font-semibold">Login now!</h2>
          <p className="py-6 text-sm md:text-md max-w-[80%] lg:max-w-full">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-[250px] md:max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link to='/' className="btn btn-neutral">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login