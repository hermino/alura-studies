import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        required
                        id="tarefa"
                        type="text" 
                        name="tarefa"
                        placeholder="O que você quer estudar?"
                    />
                </div>
                <div>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        required
                        step="1"
                        id="tempo"
                        type="tempo"
                        name="tempo"
                        min="00:00:00"
                        max="01:30:00"
                    />
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario