# Lab 5 - Starter

## Unit Testing Question
1. I would not use a unit test to test the "message" feature of a messaging application. This is because unit tests are more suited to test individual units of code in isolation without external dependencies. Since the message feature involves external dependencies like networking, unit tests would not be an appropriate testing method.
2. I would use a unit test to test the "max message length" feature of a messaging application. This is because this features is isolated and has deterministic desired outcomes. Hence, unit tests would be well-suited here.