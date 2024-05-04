#include <Servo.h>
// jespinosav@ucetral.edu.co
int LDR_pin = 0;  // Leeremos el pin 0
int LDR_val = 0;  // Variable para leer datos del LDR
int LDR_pin2 = 2;  // Leeremos el pin 0
int LDR_val2 = 0;  // Variable para leer datos del LDR
Servo miServo; // Crea un objeto Servo
//inicializacion para configurar los pines y calibrar y asegurar que su movimiento sea preciso
void setup() {
  pinMode(3, OUTPUT);
  // Vizualisacion de los valores por consola, representa el Serial Monitor 
  Serial.begin(115200);
  miServo.attach(2); // Conecta el servo al pin 2
}

void loop() {//bucle principal es la seccion del software  la deteccion de botellas 
// Se leeran los valores contimuamnete del sensor LDR 
LDR_val = analogRead(LDR_pin);

// Impresion de los valores leidos por el sensor por pantalla
Serial.print("LDR = ");
Serial.println(LDR_val);
delay (1);  // retardo de un segundo

// Se leeran los valores contimuamnete del sensor LDR 
LDR_val2 = analogRead(LDR_pin2);

// Impresion de los valores leidos por el sensor por pantalla
Serial.print("LDR2 = ");
Serial.println(LDR_val2);
delay (1);  // retardo de un segundo
 

if (LDR_val > 900 && LDR_val2 <= 900) {            // si la resistencia electrica es alta, encendemos movemos el servo 
  Serial.println("Botella Pequeña");
  Serial.write('5');
  digitalWrite(3, HIGH);
  delay (2000);  // retardo de un segundo
  digitalWrite(3, LOW);
  delay (1000);  // retardo de un segundo
  miServo.write(0); // Gira el servo a 0 grados
  delay (1000);  // retardo de un segundo
}

else if (LDR_val <= 900 && LDR_val2 <= 900){        // si la resistencia electrica es baja, apagamos el led
  Serial.println("Botella Grande");
  Serial.write('1');
  digitalWrite(3, HIGH);
  delay (2000);  // retardo de un segundo
  digitalWrite(3, LOW);
  delay (1000);  // retardo de un segundo
  miServo.write(0); // Gira el servo a 0 grados
  delay (1000);  // retardo de un segundo
  miServo.write(180); // Gira el servo a 180 grados
  delay (1000);  // retardo de un segundo
  miServo.write(0); // Gira el servo a 0 grados
  delay (1000);  // retardo de un segundo    
}

else {
  miServo.write(180); // Gira el servo a 180 grados
  delay (1000);  // retardo de un segundo
}
  
  
 
}