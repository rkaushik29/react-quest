import React, { useEffect } from 'react';
import * as d3 from 'd3';

const markdownFiles = [
  {
    title: 'file-one',
    content: 'This is a reference to [[file-two]].',
  },
  {
    title: 'file-two',
    content: 'This file references [[file-one]] and [[file-three]].',
  },
  {
    title: 'file-three',
    content: 'This file references [[file-two]].',
  },
];

const parseMarkdownFiles = (files) => {
  const nodes = files.map((file, index) => ({
    id: file.title,
    index,
    x: 200 + 300 * Math.cos((index / files.length) * 2 * Math.PI), // place nodes in a circle
    y: 200 + 300 * Math.sin((index / files.length) * 2 * Math.PI), // place nodes in a circle
  }));

  const links = [];

  files.forEach((file) => {
    const linkPattern = /\[\[([a-z0-9-]+)\]\]/g;
    let match;
    while ((match = linkPattern.exec(file.content)) !== null) {
      links.push({
        source: file.title,
        target: match[1],
      });
    }
  });

  return { nodes, links };
};

const Graph = ({ nodes, links }) => {
  useEffect(() => {
    const width = 800;
    const height = 600;

    const svg = d3.select('#graph')
      .attr('width', width)
      .attr('height', height);

    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke-width', 1.5)
      .attr('stroke', '#999');

    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 10)
      .attr('fill', '#1f78b4');

    node.append('title')
      .text(d => d.id);

    // Update positions
    link
      .attr('x1', d => nodes.find(n => n.id === d.source).x)
      .attr('y1', d => nodes.find(n => n.id === d.source).y)
      .attr('x2', d => nodes.find(n => n.id === d.target).x)
      .attr('y2', d => nodes.find(n => n.id === d.target).y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
  }, [nodes, links]);

  return (
    <svg id="graph" className="bg-gray-100"></svg>
  );
};

const App = () => {
  const { nodes, links } = parseMarkdownFiles(markdownFiles);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Graph nodes={nodes} links={links} />
    </div>
  );
};

export default App;
