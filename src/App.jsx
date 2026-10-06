import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <>
      <style>{`
        .wrapper{
          min-height:100vh; display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg,#ff9a3c,#ff4e50);
          font-family: Arial, sans-serif;
        }
        .card{
          background:white; padding:35px; border-radius:20px;
          box-shadow:0 15px 35px rgba(0,0,0,0.2); width:100%; max-width:400px;
        }
        .title{text-align:center; font-size:32px; margin:0; color:#222;}
        .subtitle{text-align:center; color:#777; margin-bottom:25px;}
        .form{display:flex; flex-direction:column; gap:18px;}
        .input-group label{font-size:14px; font-weight:600; color:#333;}
        .input-group input{
          width:100%; margin-top:5px; padding:12px 15px; border:1px solid #ddd;
          border-radius:8px; outline:none; font-size:14px; box-sizing:border-box;
        }
        .input-group input:focus{border-color:#ff7b00; box-shadow:0 0 0 3px rgba(255,123,0,0.15);}
        .options{display:flex; justify-content:space-between; font-size:13px;}
        .options a{color:#ff7b00; text-decoration:none;}
        .btn{
          width:100%; background:#ff7b00; color:white; border:none; padding:13px;
          border-radius:8px; font-weight:bold; font-size:16px; cursor:pointer;
        }
        .btn:hover{background:#e66e00;}
        .signup{text-align:center; font-size:14px; color:#666; margin-top:20px;}
        .signup span{color:#ff7b00; font-weight:bold; cursor:pointer;}
      `}</style>

      <div className="wrapper">
        <div className="card">
          <h1 className="title">Login Form</h1>
          <p className="subtitle">Welcome back! Please login</p>

          <form onSubmit={handleLogin} className="form">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="adan@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="********" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p className="signup">Don't have an account? <span>Sign up</span></p>
        </div>
      </div>
    </>
  );
}
export default App;