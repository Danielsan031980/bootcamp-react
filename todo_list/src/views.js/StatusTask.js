import React from 'react';

const Statustask = (props) => {
    const {erase} = props


    
    return (
        <div>
            <h1>Tareas Ejecutadas</h1>
            {
                erase.map((item,i) =>
                    <div className="borrada" key={i}>
                        {item.nombre}
                    </div>
                )
            }

        </div>
    );
}

export default Statustask;
