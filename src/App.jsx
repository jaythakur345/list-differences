import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [result, setResult] = useState(null);

  const computeDifferences = () => {
    const arrA = listA.split('\n').map((item) => item.trim());
    const arrB = listB.split('\n').map((item) => item.trim());

    const onlyInA = arrA.filter((item) => !arrB.includes(item));
    const onlyInB = arrB.filter((item) => !arrA.includes(item));
    const inBoth = arrA.filter((item) => arrB.includes(item));
    const combined = [...new Set([...arrA, ...arrB])];

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combined,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex justify-content-center">
          <h2 className="navbar-brand mb-0 fs-2 text-uppercase">List Differences</h2>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h3>List A</h3>
            <textarea
              className="form-control"
              rows={5}
              value={listA}
              onChange={(e) => setListA(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <h3>List B</h3>
            <textarea
              className="form-control"
              rows={5}
              value={listB}
              onChange={(e) => setListB(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3 text-uppercase" onClick={computeDifferences}>
          Compute
        </button>
        {result && (
          <div className="mt-4">
            <h3>Items present only in A:</h3>
            <ul>
              {result.onlyInA.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Items present only in B:</h3>
            <ul>
              {result.onlyInB.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Items present in both A and B:</h3>
            <ul>
              {result.inBoth.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Items combining both A and B (unique):</h3>
            <ul>
              {result.combined.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
