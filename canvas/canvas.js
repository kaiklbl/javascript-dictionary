// um canvas anzulegen
const ctx =             canvas.getContext('2d');

// -----------alles zum festlegen------------

// AusfüllFarbe festlegen
ctx.fillStyle = 'yellow';

// macht eine umradung
ctx.strokeStyle = 'red';

// um die die dicke der Linie zu bestimmen
ctx.lineWidth = '10';

// ----------- zwischen begin und close kommt alles was ausgeführt werden soll---------

// canvas sagen das es beginnen soll 
ctx.beginPath();

// um mit der festgelegten Farbe auszufüllen
ctx.fill();

// um die festgelegte umrandung zu setzten
ctx.stroke();

// um Kreis zu zeichnen
ctx.arc(x,y,radius,Startpunkt,endpunkt);

// beendet canvas wieder
ctx.closePath();