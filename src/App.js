import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const details = [
    {title: 'Car BMW 2017 Model', price: 10},
    {title: 'Mdern CD3 2049 electric', price: 20},
    {title: '2 whele model pandamic', price: 30},
    {title: 'Mdern CD3 2049 electric', price: 20},
    {title: 'Mdern CD3 2049 electric', price: 20},
    {title: 'Mdern CD3 2049 electric', price: 20},
    {title: 'Mdern CD3 2049 electric', price: 20},
    {title: 'Mdern CD3 2049 electric', price: 20},
    ];

  const elements = details.map(x => <Grid title={x.title}></Grid>);

  return (<div style={{display:"flex", flexWrap: 'wrap',height:'100vh', alignItems:'center', justifyContent: 'center', background: '#1E3560'}}>
    {elements}
  </div>
  );
}
function ButtonBooked(){
  const [booked, setBooked] = useState(10);
  console.log(booked);
  const handelClick = () => {
    setBooked(booked + 1);
  } 
  return (
    <div>
      
    <h4 style={{color:'#fff'}}>Booked days: {booked}</h4>
    <button onClick={handelClick} style={{border:'none', cursor: 'pointer', backgroundColor: '#0DC167',fontSize:'18px', color:'#fff', padding:'15px'}}>Booking Now</button>  
    
    </div>
  )
}
function Grid(props){
  return(
    <div>
      <div style={{border: '1px solid gray', width:'400px', height:'auto',display:"flex", flexDirection:'column' , alignItems:'center', justifyContent: 'center', background: '#1E3560', padding:'20px', margin:'10px'}}>
      <div style={{color: '#fff', backgroundColor:'#0DC167', display:'block', width: '129px', textAlign:'center', position: 'relative', left:'180px', padding:'7px', transform: 'rotate(45deg' }}>Booked</div>
      <div style={{backgroundColor:'#1E3560', height:'50px', width:'20px', position:'relative',top:'-3px', left:'231px'}}></div>
      <div style={{backgroundColor:'#1E3560', height:'30px', width:'50px', position:'relative',top:'-135px', left:'140px'}}></div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', top:'-50px'}}>
        <img style={{maxWidth:'50%'}} src={logo}/>
        <h2 style={{color: '#fff'}}>{props.title}</h2>
        <ButtonBooked></ButtonBooked>
      </div>
      </div>
    </div>
  );
};



export default App;
