import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [rowValues, setRowValues] = useState([]);

  return (
    <div>
      <input
        min="0"
        type="number"
        onChange={(e) => {
          setRows(e.target.value);
        }}
      />
      <br />
      <input
        min="0"
        type="number"
        onChange={(e) => {
          setColumns(e.target.value);
        }}
      />
      <table>
        <tbody>
          {Array.from({ length: rows }).map((row, rowIndex) => (
            <tr>
              {Array.from({ length: columns }).map((col, colIndex) => (
                <td>{rowIndex + '' + colIndex}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
