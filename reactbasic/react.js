let domContainer=document.querySelector("#root");
// const customElement=React.createElement("div",null,

// [React.createElement("p",null,"Hello World"),
// React.createElement("p",null,"hello World")

// ]);
// ReactDOM.render("Hello World",domContainer);
// ReactDOM.render(customElement,domContainer);

const Increment=()=>{
    const[incvar,inFunc]=React.useState(0);
    return(
        <>
<diV><h1>{incvar}</h1></diV>
<div>
    <button onClick={()=>inFunc(incvar+1)}>Increment1</button>
</div>


        </>
       
    );
}

ReactDOM.render(
<div>
<Increment/>
<hr/>
<Increment/>
 </div>,domContainer);