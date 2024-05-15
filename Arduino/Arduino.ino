#include <Servo.h>

int LDR_pin = A2;  // Pin para el primer sensor LDR
int LDR_pin2 = A3; // Pin para el segundo sensor LDR
int LDR_val = 0;    // Variable para almacenar el valor del primer sensor LDR
int LDR_val2 = 0;   // Variable para almacenar el valor del segundo sensor LDR

Servo miServo; // Crea un objeto Servo para controlar el servo motor

void setup() {
  pinMode(3, OUTPUT); // Configura el pin 3 como salida para el LED
  Serial.begin(9600); // Inicializa la comunicación serial para depuración
  miServo.attach(2); // Conecta el servo al pin 2
}

void loop() {
  // Lee los valores de los sensores LDR
  LDR_val = analogRead(LDR_pin);
  LDR_val2 = analogRead(LDR_pin2);

  // Muestra los valores de los sensores por la consola serial
  Serial.print("LDR1 = ");
  Serial.println(LDR_val);
  Serial.print("LDR2 = ");
  Serial.println(LDR_val2);
 

  // Si el primer sensor detecta una botella pequeña y el segundo no detecta nada
  if (LDR_val > 950 && LDR_val2 <= 950) {
    Serial.println("Botella Pequeña detectada");
    Serial.write('1');
    digitalWrite(3, HIGH); // Enciende el LED
    delay(2000); // Espera 2 segundos
    digitalWrite(3, LOW); // Apaga el LED
    delay(1000); // Espera 1 segundo
    miServo.write(1); // Gira el servo a 0 grados
    delay(1000); // Espera 1 segundo
    miServo.write(180); // Gira el servo a 0 grados
    delay(1000); // Espera 1 segundo
  }
  // Si ambos sensores detectan una botella grande
  else if (LDR_val > 950 && LDR_val2 > 950) {
    Serial.println("Botella Grande detectada");
    Serial.write('2');
    digitalWrite(3, HIGH); // Enciende el LED
    delay(2000); // Espera 2 segundos
    digitalWrite(3, LOW); // Apaga el LED
    delay(1000); // Espera 1 segundo
    miServo.write(1); // Gira el servo a 0 grados
    delay(1000); // Espera 1 segundo
    miServo.write(180); // Gira el servo a 180 grados
    delay(1000); // Espera 1 segundo
    
  }
  // no hay botella si ambas estan mayores 
  else
  {
    miServo.write(180); // Gira el servo a 180 grados
      delay(1000); // Espera 1 segundo   
  }
}