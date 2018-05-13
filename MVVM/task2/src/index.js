import san from 'san'
import hello from './hello.san'


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

var app = new hello()
app.attach(document.body)

 