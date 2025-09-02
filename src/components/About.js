import React from 'react'

export default function About(props) {
  // let myStyle = {
  //   color:'white',
  //   backgroundColor : 'black'
  // }
  let myStyle;

  if (props.mode === 'dark') {
    myStyle = {
      color: 'white',
      backgroundColor: '#131720'
    }
  }
  else {
    myStyle = {
      color: 'black',
      backgroundColor: 'white'
    }
  }

  return (
    <div className='container' style={myStyle}>
      <h1 className="mb-4">About Text Converter</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              Features & Capabilities
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>Text Converter is a powerful text manipulation tool</strong> designed to enhance your text editing experience. Our feature-rich application offers:
              <ul className="mt-3">
                <li><strong>Case Conversion:</strong> Easily transform your text to uppercase or lowercase with a single click.</li>
                <li><strong>Space Management:</strong> Remove extra spaces between words for clean, professional-looking text.</li>
                <li><strong>Clipboard Integration:</strong> Copy modified text to your clipboard instantly for seamless workflow.</li>
                <li><strong>Text Selection:</strong> Select entire paragraphs quickly with our paragraph highlight feature.</li>
                <li><strong>Visual Comfort:</strong> Switch between light and dark modes for comfortable viewing in any environment.</li>
                <li><strong>Real-time Feedback:</strong> Receive instant notifications for successful operations.</li>
              </ul>
              <p className="mt-3">Whether you're a content creator, developer, or anyone who works with text, Text Converter streamlines your text manipulation tasks.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              About the Developer
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <p><strong>Welcome</strong> As a developer passionate about creating useful tools, I built Text Converter to solve common text manipulation challenges.</p>
              <p>This project showcases modern web development practices using:</p>
              <ul>
                <li>State management for real-time text manipulation</li>
                <li>Accessibility features for all users</li>
              </ul>
              <p className="mt-3">Feel free to check out more of my work on <a href="https://github.com/Deepakgoyal131" target="_blank" rel="noopener noreferrer" style={{color: props.mode === 'dark' ? '#8bb4f7' : '#0d6efd'}}>GitHub</a>.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              About the owner
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>Deepak Goyal</strong> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
