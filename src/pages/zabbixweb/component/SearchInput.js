import React from 'react'
// import axios from 'axios';

const MainButton = () =>  {
  async function get() {
    let response = await fetch('http://localhost:9000/study/getStudy', {

      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    });
    let json = await response.json();
    return json;
  }

  return (
    <div>
      <div>
        <button onClick={get}>불러오기</button>
      </div>
    </div>
  );
}

export default MainButton;
