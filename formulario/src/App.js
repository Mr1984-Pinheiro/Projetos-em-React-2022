
import './App.css';
import logo from './assets/logo.png'
import alert from './assets/alert.png'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Digite um nome"),
  email: yup.string().email("Digite um email válido").required("Digite o seu melhor email"),
  password: yup.string().required("Digite uma senha").min(8, "A senha deve conter no mínimo 8 caracteres"),
  confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref(" password")], "As senhas devem ser iguais"),
 
}).required();

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  console.log(watch("name"));

  function onSubmit(userData) {
    console.log(userData)
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="form-title" >

      <img src={logo} alt="imagem-logo" />
      <h1>Formulário</h1>
      </div>

      <label>
        Nome
        <input type="text" {...register("name")} />
        {errors.name && 
        <div className='span-name'>
            <img className='alert' src={alert} alt="imagem-exlamação" />
        <span>{errors.name?.message}</span>
        </div>       
        }
      </label>

      <label>
        Email
        <input type="text" {...register("email")} />
        {errors.email && 
        <div className='span-email'>
            <img className='alert' src={alert} alt="imagem-exlamação" />
        <span>{errors.email?.message}</span>
        </div>       
        }
      </label>

      <label>
        Senha
        <input type="password" {...register("password")} />
        {errors.password && 
        <div className='span-password'>
            <img className='alert' src={alert} alt="imagem-exlamação" />
        <span>{errors.password?.message}</span>
        </div>       
        }
      </label>

      <label>
        Confirmar senha
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && 
        <div className='span-confirmPassword'>
            <img className='alert' src={alert} alt="imagem-exlamação" />
        <span>{errors.confirmPassword?.message}</span>
        </div>       
        }
      </label>

      <button type='submit'>Cadastrar-se</button>
    </form>
  );
}

export default App;
