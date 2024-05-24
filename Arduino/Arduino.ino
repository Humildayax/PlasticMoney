#include <Servo.h>

// Pines para los sensores LDR
int LDR_pin = A0;
int LDR_pin2 = A2;

// Variables para almacenar los valores de los sensores LDR
int LDR_val = 0;
int LDR_val2 = 0;

Servo miServo; // Crea un objeto Servo para controlar el servo motor

void setup() {
  Serial.begin(115200); // Inicializa la comunicación serial para depuración
  miServo.attach(2); // Conecta el servo al pin 2
}

void loop() {
  // Lee los valores de los sensores LDR
  LDR_val = analogRead(LDR_pin);
  delay(100);
  LDR_val2 = analogRead(LDR_pin2);
  

  // Muestra los valores de los sensores por la consola serial
  Serial.print("LDR1 = ");
  Serial.println(LDR_val);
  Serial.print("LDR2 = ");
  Serial.println(LDR_val2);

  // Si A4 baja mientras A5 está alto, detecta la botella pequeña
  if (LDR_val < 400 && LDR_val2 >= 400) {
    Serial.println("Botella Pequeña detectada");
    Serial.write('1'); // Enciende el LED
    miServo.write(0); // Gira el servo a 0 grados
    delay(1000); // Espera 1 segundo
    miServo.write(90); // Gira el servo a 90 grados
    delay(1000); // Espera 1 segundo
      }
  // Si A4 y A5 están bajos, detecta la botella grande
  else if (LDR_val < 400 && LDR_val2 < 400) {
    Serial.println("Botella Grande detectada");
    Serial.write('2');  
    miServo.write(0); // Gira el servo a 0 grados
    delay(1000); // Espera 1 segundo
    miServo.write(90); // Gira el servo a 90 grados
    delay(1000); // Espera 1 segundo
    }
  // En otros casos, no se detecta nada y no se realiza ninguna acción
  else {
    Serial.println("No se detecta nada");
    miServo.write(90); // Mantén el servo en su posición neutra
    delay(1000); // Espera 1 segundo
  }
}