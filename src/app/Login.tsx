
export default function Login() {
    return (
      <main className='bg-primary-color' >
            <h2>Login or Create Account</h2>
            <form action="" className="flex">
                <div className="border-box outline-none ">
                    <input
                    type="email" 
                    autoComplete="username"
                    maxLength={64}
                    name="email" 
                    placeholder="Enter your Email"
                    className="w-full shadow-inner rounded-1 p-2 flex-1"
                    value="" />
                </div>
                <div>
                    <button className="bg-black-300 hover:bg-sky-400 duration-300 text-white shadow p-2 rounded-r  "
                    type="submit">
                        Sign up
                    </button>
                </div>
            </form>
      </main>
    )
  }
  