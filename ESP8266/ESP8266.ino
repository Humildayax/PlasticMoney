#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
#include <Wire.h>

// Replace with your network credentials
const char* ssid     = "Wifi_Name";
const char* password = "Wifi_Passwd";
int dinero = 0;
// REPLACE with your Domain name and URL path or IP address with path
const char* serverName = "URL/IP";

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
  dinero = 0;
  // Lectura Datosde Arduino
  if(Serial.available() != 0){
      dinero = Serial.read();
      if(dinero == 5){
        dinero = 500;
        Serial.println(dinero);
      }else if(dinero == 1){
        dinero = 1000;
        Serial.println(dinero);
      }
  }

  //Check WiFi connection status
  if(WiFi.status()== WL_CONNECTED && dinero =! 0){

    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);

    // Ignore SSL certificate validation
    client->setInsecure();
    
    //create an HTTPClient instance
    HTTPClient http;
    
    // Your Domain name with URL path or IP address with path
    http.begin(*client, serverName);
    http.addHeader("Content-type", "application/json");
    // Send HTTP GET request
    int httpResponseCode = http.POST("{\"dinero\":" + dinero +"}");
        
    if (httpResponseCode>0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    }
    else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    // Free resources
    https.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }
}