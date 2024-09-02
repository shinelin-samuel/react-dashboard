import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SampleAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example API URL (JSONPlaceholder provides fake REST API for testing)
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    // Fetch data from the API using axios
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data); // Set the data to state
        setLoading(false); // Turn off the loading indicator
      })
      .catch((error) => {
        setError(error); // Set any errors
        setLoading(false); // Turn off the loading indicator
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SampleAPI;
