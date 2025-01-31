```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because the module is not found
  const { data } = require('./data.json');

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from data.json: {JSON.stringify(data)}</p>
    </div>
  );
}
```