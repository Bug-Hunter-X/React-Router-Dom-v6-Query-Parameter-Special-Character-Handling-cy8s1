The solution involves using the `encodeURIComponent` function to encode the query parameter before adding it to the URL and `decodeURIComponent` on the receiving end to decode it.

```javascript
//Correct Navigation
const query = encodeURIComponent('hello+world');
navigate(`/search?query=${query}`);
```

```javascript
//Receiving end
const queryParams = new URLSearchParams(window.location.search);
const decodedQuery = decodeURIComponent(queryParams.get('query'));
console.log(decodedQuery); // Outputs: hello+world
```