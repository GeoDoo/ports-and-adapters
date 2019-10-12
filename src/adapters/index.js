import httpAdapter from './httpAdapter';
import testAdapter from './testAdapter';

export default process.env.NODE_ENV === 'production' ? httpAdapter : testAdapter;