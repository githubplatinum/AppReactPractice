function FormLogin() {
    return (
        <div>
        <p>Car Catalog</p>
        <form>
            <label for="brand">Enter brand</label><br />
             <input type="text" id="name" />   <br />

             <label for="model">Enter model</label><br />
             <input type="text" id="brand" />   <br />
             
             <label for="year">Enter year</label><br />
             <input type="text" id="year" /> <br />  

             <label for="color">Enter color</label><br />
             <input type="text" id="color" />  <br /> 

        </form>
        </div>
    );
}

export default FormLogin;