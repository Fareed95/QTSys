import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import '../styles/QrScanner.css'

function QrScanner() {
  const [result, setResult] = useState('')

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    })

    qrScanner.render(
      (result) => {
        // yeets the scanner after done scanning
        // can't scan again unless reload
        // qrScanner.clear()
        setResult(result)
      },
      (err) => {
        alert(err)
      },
    )
  }, [])

  return (
    <>
      {result ? (
        <div>
          <div id="reader"></div>
          <h2> {result} </h2>
        </div>
      ) : (
        <div>
          <div id="reader"></div>
        </div>
      )}
      <h2>
        Gotta store the results in the db and then show the students below in a
        table or something
      </h2>
    </>
  )
}

export default QrScanner
