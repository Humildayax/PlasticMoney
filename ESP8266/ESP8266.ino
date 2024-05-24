#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
#include <Wire.h>

// Replace with your network credentials
const char* ssid     = "Xiaomi12";
const char* password = "testing321";
int botella = 0;
// REPLACE with your Domain name and URL path or IP address with path
const char* serverName = "http://192.168.1.11:4443/update";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) { 
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  int botella = 0;
  String dinero = "";
  // Lectura Datos de Arduino
  if(Serial.available() != 0){
      botella = Serial.read();
      if(botella == 1){
        dinero = "500";
        Serial.println(dinero);
      }else if(botella == 2){
        dinero = "1000";
        Serial.println(dinero);
      }
  }

  //Check WiFi connection status
  if (WiFi.status() == WL_CONNECTED && (dinero == "500" || dinero == "1000")){

    WiFiClient client;
    
    //create an HTTPClient instance
    HTTPClient http;
    
    // Your Domain name with URL path or IP address with path
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    // Send HTTP GET request
    int httpResponseCode = http.POST("{\"dinero\":\""+dinero+"\"}");
        
    if (httpResponseCode>0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    }
    else {
      Serial.print("Error code: ");
      Serial.println(http.errorToString(httpResponseCode).c_str());
    }
    // Free resources
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }
}