
import './App.css';
import logo from './assets/logo.png'
import alert from './assets/alert.png'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(userData) {
    console.log(userData)
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="form-title" >

      <img src={logo} alt="imagem-logo" />
      <h1>Criar conta</h1>
      </div>

      <label>
        Nome
        <input {...register("name", {required: true})} />
        {errors.name && 
        <div className='span-name'>
            <img className='alert' src={alert} alt="imagem-exlamação" />
        <span>Digite o nome</span>
        </div>       
        }
      </label>

      <label>
        Email
        <input {...register("email")} />
      </label>

      <label>
        Senha
        <input {...register("password")} />
      </label>

      <label>
        Confirmar senha
        <input {...register("confirmPassword")} />
      </label>

      <button type='submit'>Cadastrar-se</button>
    </form>
  );
}

export default App;
