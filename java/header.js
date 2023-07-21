// localiza el nodo en el DOM
// nodo: etiqueta en su archivo .html

// dom es el html

let header_del_DOM = document.querySelector(".header");
 
// almacenar en una variable el contenidoa agregar 
let header = `

<div> 

<img src ="./img/pngwing.com.png" >
<p> Parqueo el cuchurru</p>
<nav>
   <ul>
   <li> 🚗 Carro </li>
   <li> 🚐 Camioneta </li>
   <li> 🚌 Bus  </li>
   <li> 🏍  Moto  </li>
   <li> 🛴 MonoPatin  </li>
   </ul>
</nav>



</div>


`;

header_del_DOM.innerHTML = header;