import React from "react";

const LoginPage = () => {
    return(
        <div>
            <h1> Pagina de Login</h1>
            <form>
                <input type="email" name="email" placeholder="digite seu e-mail"/>
                <input type="password" name="password" placeholder="Digite sua senha"/>
                <input type="submit" name="enviar" value="Login"/>    
            </form>
        </div>
    )
}

export default LoginPage;