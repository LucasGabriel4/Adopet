import React from  'react'



const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email Inválido'
    },

    senha: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        message: 'Senha deve conter ao menos um digito, uma letra minúscula, uma letra maiúscula e um caractere especial'
    }
}


 const useForm = (type: string) => {
     const [value, setValue] = React.useState('')
     const [erro, setErro] = React.useState<string | null>(null)


     const validate = (value: string) => {
        if(type === '' && value.length > 0){
            setErro('')
            return true
        }else{
            setErro('Preencha o campo!')
        }
        if(value.length === 0){
            setErro('Preencha o campo!')
            return false
        }else if(types[type as keyof typeof types] && !types[type as keyof typeof types].regex.test(value)){
            setErro(types[type as keyof typeof types].message)
            return false
        }else{
            setErro(null)
            return true
        }
     }

     const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
          if(erro) validate(event.target.value)
          setValue(event.target.value)
     }

   return {
      value,
      setValue,
      erro,
      onChange,
      onBlur: () => validate(value),
      validate: () => validate(value),
      setErro
   }

}


export default useForm