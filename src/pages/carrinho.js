import { useState } from "react";

function Carrinho(){
    return(
        <body>
    <div className="every">
        <div className="title">Carrinho</div>
        <div className="add">+</div>
        <div className="preco">R$ --</div>
        <div className="qnt">
            <button className="sub">-</button>
            <div className="qt">1</div>
            <button className="sum">+</button>

        </div>
    </div>
</body>
    )
}

export default Carrinho; 
