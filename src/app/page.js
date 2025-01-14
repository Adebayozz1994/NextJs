

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-blue-600 text-4xl font-bold mb-4">facebook</h1>
          <h2 className="text-gray-800 text-lg md:text-xl mb-4">Recent logins</h2>
          <p className="text-gray-500 text-sm md:text-base mb-6 text-center md:text-left">
            Click your picture or add an account.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <img
                src="/image/20220410_095454.jpg"
                alt="Profile"
                className="w-full h-28 md:h-32 object-cover"
              />
              <div className="p-3">
                <p className="text-center font-medium">Ogunlade</p>
              </div>
            </div>
            <div className="border rounded-lg flex items-center justify-center text-blue-600 text-3xl font-bold">
              +
            </div>
          </div>
        </div>
        


        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address or phone number"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
              Log in
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              Forgotten password?
            </a>
          </div>
          <hr className="my-6" />
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}
