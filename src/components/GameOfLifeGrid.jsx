import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import * as d3 from 'd3';

const GameOfLifeGrid = forwardRef((props, ref) => {
  const [grid, setGrid] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/iterate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grid: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
      }),
    });
    const data = await response.json();
    setGrid(data.grid || []);
  };

  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (grid && grid.length > 0) {
      const svg = d3.select('#grid')
        .attr('width', 500)
        .attr('height', 500);

      const cellSize = 20;
      svg.selectAll('*').remove();

      svg.selectAll('rect')
        .data(grid.flat())
        .enter()
        .append('rect')
        .attr('x', (d, i) => (i % grid[0].length) * cellSize)
        .attr('y', (d, i) => Math.floor(i / grid[0].length) * cellSize)
        .attr('width', cellSize)
        .attr('height', cellSize)
        .attr('fill', d => (d ? 'black' : 'white'))
        .attr('stroke', 'gray');
    }
  }, [grid]);

  return <svg id="grid"></svg>;
});

export default GameOfLifeGrid;