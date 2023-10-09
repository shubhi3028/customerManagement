import React, {useState} from "react";
const NavbarBox =()=>{
   
      const [to1Value, setTo1Value] = useState('');
  const [to2Value, setTo2Value] = useState('');
  const [cc1Value, setCc1Value] = useState('');
  const [cc2Value, setCc2Value] = useState('');

  const handleTo1Change = (e) => {
    setTo1Value(e.target.value);
    setTo2Value(e.target.value);
  };

  const handleTo2Change = (e) => {
    setTo1Value(e.target.value);
    setTo2Value(e.target.value);
  };

  const handleCc1Change = (e) => {
    setCc1Value(e.target.value);
    setCc2Value(e.target.value);
  };

  const handleCc2Change = (e) => {
    setCc1Value(e.target.value);
    setCc2Value(e.target.value);
  };

  return (
    <>
        <div style={{ textAlign: 'center' }}>

      <h1>Email Form Page</h1>
      {/* To Boxes */}
      <div className="email-box">
        <label htmlFor="to1">To: </label>
        <input
          type="text"
          id="to1"
          name="to1"
          value={to1Value}
          onChange={handleTo1Change}
        />
        <label htmlFor="to2"><i class="fa fa-plus" aria-hidden="true"></i></label>
      </div>
      <div className="email-box">
    
        <input
          type="description"
          id="to2"
          name="to2"
          value={to2Value}
          onChange={handleTo2Change}
        />
    
      </div>
<br/>
      {/* CC Boxes */}
      <div className="email-box">
        <label htmlFor="cc1">CC</label>
        <input
          type="text"
          id="cc1"
          name="cc1"
          value={cc1Value}
          onChange={handleCc1Change}
          />
          <label htmlFor="cc2"><i class="fa fa-plus" aria-hidden="true"></i></label>
   
      </div>
      <div className="email-box">
        <input
          type="text"
          id="cc2"
          name="cc2"
          value={cc2Value}
          onChange={handleCc2Change}
        />
      </div>
    </div>
    </>
  );

}
export default NavbarBox;