```javascript
// pages/aboutSolution.js
import data from './data.json';

export default async function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Data from data.json: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```json
// data.json
{
  "message": "This is data from data.json"
}
```