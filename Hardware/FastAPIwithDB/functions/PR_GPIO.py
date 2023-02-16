import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(12,GPIO.OUT)

def LED_on():
    GPIO.output(12, True)

def LED_off():
    GPIO,output(12, False)