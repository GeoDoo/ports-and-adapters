import httpAdapter from './httpAdapter';
import testAdapter from './testAdapter';

let adapter;

if (process.env.NODE_ENV !== 'production') adapter = testAdapter;
if (process.env.NODE_ENV === 'production') adapter = httpAdapter;

export default adapter;