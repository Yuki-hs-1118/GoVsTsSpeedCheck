import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
// go
//  http.get('http://localhost:8888/');

// ts
  http.get('http://localhost:5000/');
}