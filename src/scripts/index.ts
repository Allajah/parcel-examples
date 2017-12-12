import { Observable } from 'rxjs/Rx';

Observable.timer(5000).subscribe(() => {
  console.log("hello");
})
