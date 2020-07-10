
  import React from "react";
  import '../assets/style/components/Carrusell.scss';
  const Carrusell = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">
    {children}
    </div>    
      </section> 
  )
  export default Carrusell;

