import React, { useState } from 'react';

const FooterComponent = () => {
    const [footerState, setFooterState] = useState(true);
    return (
        <div class="footerDiv">
          <footer>
            <div class="contenedor-footer">
              <h4>Universidad Nacional de Colombia</h4>
              <h4>sede Medellín</h4>
              <h4>Facultad de Minas</h4>
              <p>2022</p>
            </div>
          <h3 class="titulo-final">&copy; Equipo 3 | Seminario de Proyectos I</h3>
          </footer>
        </div>
    )
}
export default FooterComponent;